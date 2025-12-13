'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Loader2, Copy, Check, GraduationCap, Download, Eye, Play, Pause, RotateCcw, X, Volume2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';

interface Module {
  module_number: number;
  title: string;
  topics: string[];
}

interface SubjectData {
  _id: string;
  subject_name: string;
  branch: string;
  semester: number;
  modules: Module[];
}

// ANIMATION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  
  // DATA STATE
  const [subject, setSubject] = useState<SubjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [errorModules, setErrorModules] = useState<Record<string, string>>({});
  const [cachedModules, setCachedModules] = useState<string[]>([]);
  
  // UI INTERACTION STATE
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeType, setActiveType] = useState<'notes' | 'paper' | null>(null);
  
  // AUDIO & READER MODE STATE
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState<number>(-1);
  const [readerModeText, setReaderModeText] = useState<string[]>([]); // Holds split words
  
  // Refs to control the speech engine
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Initializing Speech Engine on Mount
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
    }

    const initPage = async () => {
      try {
        const id = params.subjectId;
        const resSub = await fetch(`/api/subjects/${id}`);
        const dataSub = await resSub.json();
        
        if (dataSub.subject) {
          setSubject(dataSub.subject);
          if (session?.user?.email) {
            const resCache = await fetch('/api/cache/status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subjectId: dataSub.subject._id, userId: session.user.email })
            });
            const dataCache = await resCache.json();
            if(dataCache.cachedIdentifiers) setCachedModules(dataCache.cachedIdentifiers);
          }
        }
      } catch (error) {
        console.error("Error initializing page:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.subjectId) initPage();
    
    // Stop audio if user leaves page
    return () => {
        if (synthRef.current) synthRef.current.cancel();
    };
  }, [params.subjectId, session]);

  // NATIVE SPEECH + HIGHLIGHTING LOGIC
  const handlePlayPause = (text: string) => {
    if (!synthRef.current) return;

    if (isSpeaking && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    } else if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    } else {
      
      // Clean text and prepare Reader Mode
      // Strip markdown symbols so the array matches what the voice reads
      const cleanText = text.replace(/[#*`_]/g, ''); 
      const words = cleanText.split(/\s+/);
      setReaderModeText(words);
      setHighlightedWordIndex(-1);

      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      const voices = synthRef.current.getVoices();
      const preferredVoice = voices.find(v => 
        v.name.includes("Google US English") || 
        v.name.includes("Microsoft Zira") || 
        v.name.includes("Samantha")
      );
      if (preferredVoice) utterance.voice = preferredVoice;

      // EVENT: onboundary
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          const charIndex = event.charIndex;
          const textBefore = cleanText.substring(0, charIndex);
          const wordCount = textBefore.trim().split(/\s+/).length;
          setHighlightedWordIndex(wordCount);
        }
      };

      // Reset state when finished
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setHighlightedWordIndex(-1);
      };

      // Speak
      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setHighlightedWordIndex(-1);
    }
  };

  const handleRestart = (text: string) => {
    handleStop();
    setTimeout(() => handlePlayPause(text), 100);
  };

  // GENERATE / VIEW LOGIC
  const handleGenerate = async (targetTitle: string, topics: string[], type: 'notes' | 'paper') => {

    // Block if Reader Mode is active on another module
    if (isSpeaking && activeModule !== targetTitle) {
        alert("Please exit Reader Mode (Stop Audio) to view other notes.");
        return;
    }

    if (!session?.user?.email) return alert("Please login to generate content.");

    // Logic for toggling visibility vs viewing
    if (notes[targetTitle] || errorModules[targetTitle]) {
      if (activeModule === targetTitle) {
        handleStop(); 
        setActiveModule(null);
      } else {
        setActiveModule(targetTitle);
        setActiveType(type); 
      }
      return;
    }

    setGeneratingId(targetTitle); 
    setActiveModule(targetTitle); 
    setActiveType(type); 
    
    // Clear errors
    setErrorModules(prev => {
        const newErrors = { ...prev };
        delete newErrors[targetTitle];
        return newErrors;
    });

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topics,
          subject: subject?.subject_name,
          type,
          subjectId: subject?._id,
          identifier: targetTitle,
          userId: session.user.email
        }),
      });

      if (res.status === 429) {
        setErrorModules(prev => ({ ...prev, [targetTitle]: 'RATE_LIMIT' }));
        return;
      }

      const data = await res.json();
      if (data.content) {
        setNotes(prev => ({ ...prev, [targetTitle]: data.content }));
        if (!cachedModules.includes(targetTitle)) {
            setCachedModules(prev => [...prev, targetTitle]);
        }
      } else {
        throw new Error("No content generated");
      }
    } catch (error) {
      alert("Failed to generate content.");
      setActiveModule(null); 
    } finally {
      setGeneratingId(null);
    }
  };

  // UTILS
  const handleDownload = async (contentId: string, filename: string) => {
    setDownloading(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById(contentId);
      if (!element) return;
      const clone = element.cloneNode(true) as HTMLElement;
      clone.classList.remove('prose-invert');
      clone.style.color = '#000000';
      clone.style.background = '#ffffff';
      clone.style.padding = '20px';
      const allChildren = clone.querySelectorAll('*');
      allChildren.forEach((child) => { if (child instanceof HTMLElement) child.style.color = '#000000'; });
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.width = '800px'; 
      container.appendChild(clone);
      document.body.appendChild(container);
      const opt = { margin: 10, filename: `${filename}.pdf`, image: { type: 'jpeg' as const, quality: 0.98 }, html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const } };
      await html2pdf().set(opt).from(clone).save();
      document.body.removeChild(container);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download PDF.");
    } finally {
      setDownloading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAllTopics = () => {
    if (!subject) return [];
    return subject.modules.flatMap(m => m.topics);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-transparent"><Loader2 className="w-10 h-10 animate-spin text-blue-400" /></div>;
  if (!subject) return <div className="text-center p-10 text-white">Subject not found.</div>;

  return (
    <main className="min-h-screen p-6 relative z-10 pb-20">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => router.back()} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
          <div className="p-2 rounded-full bg-white/5 mr-3 group-hover:bg-white/10 transition-all"><ArrowLeft className="w-4 h-4" /></div>
          <span className="font-medium">Back to Dashboard</span>
        </button>

        <header className="mb-10 glass-card p-8 rounded-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-sm">{subject.branch}</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-sm">Sem {subject.semester}</span>
              </div>
              <h1 className="text-4xl font-extrabold text-white tracking-tight">{subject.subject_name}</h1>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGenerate("Full Syllabus Paper", getAllTopics(), 'paper')}
              // Disable if generating something else OR if Speaking another module
              disabled={
                (generatingId !== null && generatingId !== "Full Syllabus Paper") || 
                (isSpeaking && activeModule !== "Full Syllabus Paper")
              }
              className="flex items-center gap-3 bg-lineart-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-white/10"
            >
              {generatingId === "Full Syllabus Paper" ? <Loader2 className="animate-spin w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              {cachedModules.includes("Full Syllabus Paper") ? (activeModule === "Full Syllabus Paper" ? "Hide Exam Paper" : "View Exam Paper") : "Generate Mock Paper"}
            </motion.button>
          </div>
        </header>

        {/* FULL SYLLABUS PAPER */}
        <AnimatePresence>
          {activeModule === "Full Syllabus Paper" && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-8 overflow-hidden">
               <div className="p-8 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                 <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                   <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-purple-300">Sample Examination Paper</h2>
                   <div className="flex gap-2">
                     <button onClick={() => handleDownload("paper-content", `${subject.subject_name}_Mock_Paper`)} disabled={downloading} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all disabled:opacity-50">
                       {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} PDF
                     </button>
                     <button onClick={() => handleCopy(notes["Full Syllabus Paper"])} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all">
                       {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />} Copy
                     </button>
                   </div>
                 </div>
                 <div id="paper-content" className="prose prose-invert max-w-none">
                    <ReactMarkdown>{notes["Full Syllabus Paper"]}</ReactMarkdown>
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-6 ml-2"><h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Syllabus Modules</h3></div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {subject.modules.map((mod, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${activeModule === mod.title ? 'border-blue-500/50 bg-white/10' : 'hover:border-white/20'}`}>
                <div className="p-6">
                  {/* MODULE HEADER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 text-sm font-bold border border-white/5 shadow-inner">{mod.module_number}</span>
                      {mod.title}
                    </h3>

                    <button
                      onClick={() => handleGenerate(mod.title, mod.topics, 'notes')}
                      // Disable if generating something else OR if Speaking another module
                      disabled={
                        (generatingId !== null && generatingId !== mod.title) || 
                        (isSpeaking && activeModule !== mod.title)
                      }
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all bg-white/5 text-blue-300 hover:bg-white/10 border border-white/5 disabled:opacity-50 disabled:cursor-not-allowed ${
                        activeModule === mod.title
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-white/5 text-blue-300 hover:bg-white/10 border border-white/5'
                      } ${generatingId !== null && generatingId !== mod.title ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {generatingId === mod.title ? (
                        <Loader2 className="animate-spin w-4 h-4" />
                      ) : cachedModules.includes(mod.title) ? <Eye className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                      {activeModule === mod.title ? 'Close Notes' : cachedModules.includes(mod.title) ? 'View Notes' : 'Generate Notes'}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {mod.topics.map((topic, i) => (
                      <span key={i} className="text-[11px] text-slate-400 bg-black/30 px-3 py-1.5 rounded-lg border border-white/5">{topic}</span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {activeModule === mod.title && activeType === 'notes' && (
                      <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 24 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="overflow-hidden">
                        <div className="p-6 bg-black/20 rounded-2xl border border-white/10 relative">
                          
                          {/* RATE LIMIT ERROR */}
                          {errorModules[mod.title] === 'RATE_LIMIT' ? (
                             <div className="flex flex-col items-center justify-center py-8 text-center">
                                <div className="text-5xl mb-3">😴</div>
                                <h4 className="text-lg font-bold text-white">Daily limit exceeded</h4>
                                <p className="text-sm text-slate-400 mt-1">Our AI needs a break. Try again tomorrow!</p>
                             </div>
                          ) : generatingId === mod.title ? (
                            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                              <Loader2 className="w-8 h-8 animate-spin mb-3 text-blue-500" />
                              <p className="animate-pulse text-sm">AI is writing your notes...</p>
                            </div>
                          ) : (
                            <>
                              <div className="flex flex-col sm:flex-row justify-end gap-3 mb-6 border-b border-white/10 pb-3">
                                {/* CONTROLS */}
                                <div className="flex items-center bg-white/5 rounded-lg p-1 mr-auto sm:mr-0">
                                    <button 
                                      onClick={() => handlePlayPause(notes[mod.title])}
                                      className={`p-2 rounded-md transition-colors ${isSpeaking ? 'text-blue-400 bg-blue-500/20' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                                      title={isSpeaking && !isPaused ? "Pause" : "Listen (Reader Mode)"}
                                    >
                                      {isSpeaking && !isPaused ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>
                                    
                                    <button onClick={() => handleRestart(notes[mod.title])} className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="Restart">
                                      <RotateCcw className="w-4 h-4" />
                                    </button>
                                    
                                    {isSpeaking && (
                                        <button onClick={handleStop} className="p-2 text-red-400 hover:bg-red-500/20 rounded-md transition-colors" title="Stop & Exit Reader">
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={() => handleDownload(`module-${index}-content`, `${subject.subject_name}_Module_${mod.module_number}`)} className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-300 hover:text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                    {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} <span className="hidden sm:inline">PDF</span>
                                    </button>
                                    <button onClick={() => handleCopy(notes[mod.title])} className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-300 hover:text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />} <span className="hidden sm:inline">Copy</span>
                                    </button>
                                </div>
                              </div>
                              
                              {/* READER MODE (Highlighting) VS MARKDOWN MODE */}
                              {isSpeaking && readerModeText.length > 0 ? (
                                <div className="p-6 bg-black/40 rounded-xl border border-blue-500/30 shadow-inner min-h-[300px]">
                                    <h4 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                        Reader Mode Active
                                    </h4>
                                    <p className="text-lg leading-relaxed text-slate-300 font-medium">
                                        {readerModeText.map((word, i) => (
                                            <span 
                                                key={i} 
                                                className={`transition-all duration-200 inline-block mr-1.5 rounded px-1 py-0.5 ${
                                                    i === highlightedWordIndex 
                                                        ? 'bg-blue-600 text-white transform scale-105 font-bold shadow-lg shadow-blue-500/50' 
                                                        : 'text-slate-300'
                                                }`}
                                            >
                                                {word}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                              ) : (
                                <div id={`module-${index}-content`} className="prose prose-invert max-w-none prose-headings:text-blue-100 prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-code:text-pink-300 prose-code:bg-black/50 prose-code:px-1 prose-code:rounded prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
                                    <ReactMarkdown>{notes[mod.title]}</ReactMarkdown>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}