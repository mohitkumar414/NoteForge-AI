'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Loader2, Copy, Check, GraduationCap, Download, Eye, Volume2, Square } from 'lucide-react';
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
  const [subject, setSubject] = useState<SubjectData | null>(null);
  const [loading, setLoading] = useState(true);

  // State
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [cachedModules, setCachedModules] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeType, setActiveType] = useState<'notes' | 'paper' | null>(null);
  const [downloading, setDownloading] = useState(false);
  
  // --- NEW: Voice State ---
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
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
                body: JSON.stringify({ 
                    subjectId: dataSub.subject._id, 
                    userId: session.user.email 
                })
            });
            const dataCache = await resCache.json();
            if(dataCache.cachedIdentifiers) {
                setCachedModules(dataCache.cachedIdentifiers);
            }
          }
        }
      } catch (error) {
        console.error("Error initializing page:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.subjectId) initPage();
    
    // Cleanup speech on unmount
    return () => {
        if (typeof window !== 'undefined') window.speechSynthesis.cancel();
    };
  }, [params.subjectId, session]);

  // --- NEW: Text-to-Speech Function ---
  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Strip Markdown characters for cleaner reading
      const cleanText = text.replace(/[#*`_]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      // Select a better voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => voice.name.includes("Google US English") || voice.name.includes("Samantha"));
      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleGenerate = async (targetTitle: string, topics: string[], type: 'notes' | 'paper') => {
    if (!session?.user?.email) return alert("Please login to generate content.");

    if (notes[targetTitle]) {
      setActiveModule(activeModule === targetTitle ? null : targetTitle);
      // Stop speaking if closing the module
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      return;
    }

    setGenerating(true);
    setActiveModule(targetTitle);
    setActiveType(type);

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

      const data = await res.json();
      if (data.content) {
        setNotes(prev => ({ ...prev, [targetTitle]: data.content }));
        if (!cachedModules.includes(targetTitle)) {
            setCachedModules(prev => [...prev, targetTitle]);
        }
      }
    } catch (error) {
      alert("Failed to generate content.");
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      allChildren.forEach((child) => {
        if (child instanceof HTMLElement) child.style.color = '#000000';
      });

      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.width = '800px'; 
      container.appendChild(clone);
      document.body.appendChild(container);

      const opt = {
        margin: 10,
        filename: `${filename}.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' }, 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(clone).save();
      document.body.removeChild(container);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download PDF.");
    } finally {
      setDownloading(false);
    }
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
              disabled={generating}
              className="flex items-center gap-3 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed border border-white/10"
            >
              {generating && activeType === 'paper' ? <Loader2 className="animate-spin w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              {cachedModules.includes("Full Syllabus Paper") ? (activeModule === "Full Syllabus Paper" ? "Hide Exam Paper" : "View Exam Paper") : "Generate Mock Paper"}
            </motion.button>
          </div>
        </header>

        <AnimatePresence>
          {activeModule === "Full Syllabus Paper" && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-8 overflow-hidden">
              <div className="p-8 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-purple-300">Sample Examination Paper</h2>
                  <div className="flex gap-2">
                    {notes["Full Syllabus Paper"] && !generating && (
                      <button onClick={() => handleDownload("paper-content", `${subject.subject_name}_Mock_Paper`)} disabled={downloading} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all disabled:opacity-50">
                        {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} PDF
                      </button>
                    )}
                    <button onClick={() => handleCopy(notes["Full Syllabus Paper"])} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all">
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />} Copy
                    </button>
                  </div>
                </div>
                {generating && !notes["Full Syllabus Paper"] ? (
                  <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <Loader2 className="w-12 h-12 animate-spin mb-4 text-purple-500" />
                    <p className="text-lg animate-pulse">Designing a challenging paper for you...</p>
                  </div>
                ) : (
                  <div id="paper-content" className="prose prose-invert max-w-none">
                    <ReactMarkdown>{notes["Full Syllabus Paper"]}</ReactMarkdown>
                  </div>
                )}
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
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 text-sm font-bold border border-white/5 shadow-inner">{mod.module_number}</span>
                      {mod.title}
                    </h3>

                    <button
                      onClick={() => handleGenerate(mod.title, mod.topics, 'notes')}
                      disabled={generating}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeModule === mod.title
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-white/5 text-blue-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {generating && activeModule === mod.title && activeType === 'notes' ? (
                        <Loader2 className="animate-spin w-4 h-4" />
                      ) : cachedModules.includes(mod.title) ? <Eye className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                      {activeModule === mod.title ? 'Hide Notes' : cachedModules.includes(mod.title) ? 'View Notes' : 'Generate Notes'}
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
                          {generating && !notes[mod.title] ? (
                            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                              <Loader2 className="w-8 h-8 animate-spin mb-3 text-blue-500" />
                              <p className="animate-pulse text-sm">AI is writing your notes...</p>
                            </div>
                          ) : (
                            <>
                              <div className="flex justify-end gap-3 mb-6 border-b border-white/10 pb-3">
                                {/* --- VOICE BUTTON ADDED HERE --- */}
                                <button 
                                  onClick={() => handleSpeak(notes[mod.title])}
                                  className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors ${isSpeaking ? 'bg-blue-600 text-white animate-pulse' : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'}`}
                                >
                                  {isSpeaking ? <Square className="w-4 h-4 fill-current" /> : <Volume2 className="w-4 h-4" />}
                                  <span>{isSpeaking ? 'Stop Reading' : 'Listen'}</span>
                                </button>

                                <button onClick={() => handleDownload(`module-${index}-content`, `${subject.subject_name}_Module_${mod.module_number}`)} className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-300 hover:text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                  {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} <span>Download PDF</span>
                                </button>
                                <button onClick={() => handleCopy(notes[mod.title])} className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-300 hover:text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />} <span>Copy Text</span>
                                </button>
                              </div>
                              
                              <div id={`module-${index}-content`} className="prose prose-invert max-w-none prose-headings:text-blue-100 prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-code:text-pink-300 prose-code:bg-black/50 prose-code:px-1 prose-code:rounded prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
                                <ReactMarkdown>{notes[mod.title]}</ReactMarkdown>
                              </div>
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