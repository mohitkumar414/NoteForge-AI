'use client';
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { BookOpen, ChevronRight, Loader2, LogOut, Settings, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface Subject {
  _id: string;
  subject_name: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  }
};

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      const user = session?.user as any;
      if (!user?.branch || !user?.semester) {
        router.push('/onboarding');
      } else {
        fetchSubjects(user.branch, user.semester);
      }
    }
  }, [status, session, router]);

  const fetchSubjects = async (branch: string, semester: number) => {
    setLoading(true);
    try {
      const res = await fetch('/api/subjects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branch, semester }),
      });
      const data = await res.json();
      setSubjects(data.subjects || []);
    } catch (error) {
      console.error("Failed to fetch subjects", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center bg-transparent"><Loader2 className="w-10 h-10 animate-spin text-blue-400" /></div>;
  }

  return (
    <main className="min-h-screen p-6 flex flex-col items-center relative overflow-hidden">
      
      {/* --- BACKGROUND VIDEO SECTION --- */}
      <div className="absolute inset-0 -z-20 w-full h-full bg-[#0f172a]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>
      {/* -------------------------------- */}

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl flex justify-between items-center mb-16 py-4 relative z-10"
      >
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-2 rounded-lg text-white shadow-lg shadow-purple-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight hidden sm:block">NoteForge AI</span>
        </div>
        
        {session ? (
          <div className="flex items-center gap-3">
            <Link href="/onboarding" className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Settings">
              <Settings className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-2 py-1 pr-4 rounded-full border border-white/10">
              {session.user?.image ? (
                <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full border border-white/20" />
              ) : (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {session.user?.name?.[0]}
                </div>
              )}
              <span className="text-sm font-medium text-slate-200 hidden sm:block">{session.user?.name}</span>
            </div>
            
            <button onClick={() => signOut()} className="p-2 bg-white/10 border border-white/10 rounded-full hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all text-slate-300" title="Sign Out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-medium py-2 px-5 rounded-full backdrop-blur-md transition-all flex items-center gap-2 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="group-hover:text-white/90">Sign in</span>
          </button>
        )}
      </motion.nav>

      {/* Main */}
      <div className="w-full max-w-5xl relative z-10">
        
        {!session ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 rounded-full text-sm font-semibold mb-6 border border-white/20 backdrop-blur-md">
              🚀 The Ultimate Study Companion
            </div>
            <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Master Your B.Tech <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Syllabus in Seconds</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Generate concise notes, solve complex topics, and create mock papers tailored exactly to your university branch.
            </p>
            <button 
              onClick={() => signIn("google")}
              className="bg-white text-slate-900 text-lg font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Start Learning with Google
            </button>
          </motion.div>
        ) : (
          <div className="w-full">
            <motion.header 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 pl-2"
            >
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">Your Dashboard</h2>
              <p className="text-slate-300 text-lg drop-shadow-md">
                Subjects for <span className="font-semibold text-blue-300">{(session.user as any).branch}</span> • Semester <span className="font-semibold text-purple-300">{(session.user as any).semester}</span>
              </p>
            </motion.header>

            {loading ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[1,2,3,4,5,6].map(i => (
                   <div key={i} className="h-32 glass-card rounded-2xl animate-pulse"></div>
                 ))}
               </div>
            ) : subjects.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {subjects.map((sub) => (
                  <motion.div key={sub._id} variants={itemVariants}>
                    <Link 
                      href={`/study/${sub._id}`} 
                      className="group relative glass-card p-6 rounded-2xl flex flex-col justify-between h-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
                    >
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/10 text-blue-300 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 backdrop-blur-md">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-100 group-hover:text-white transition-colors line-clamp-2">
                          {sub.subject_name}
                        </h3>
                      </div>

                      <div className="relative z-10 flex items-center text-sm font-medium text-slate-400 mt-6 group-hover:text-blue-300 transition-colors">
                        View Syllabus 
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center p-16 glass-card rounded-3xl">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                  <BookOpen className="w-8 h-8 text-slate-300" />
                </div>
                <p className="text-slate-300 text-lg mb-4">No subjects found for this semester.</p>
                <Link href="/onboarding" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors drop-shadow-md">
                  Update Branch settings
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}