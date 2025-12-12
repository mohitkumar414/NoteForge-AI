'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { Loader2, GraduationCap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Onboarding() {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    branch: '',
    semester: '',
  });

  const branches = [
    "Computer Science & Engineering",
    "Information Technology",
    "Electronics & Communication Engineering",
    "Mechanical Engineering"
  ];
  const semesters = [1, 2, 3, 4, 5, 6, 7];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.branch || !formData.semester) return alert("Please select both options");

    setLoading(true);

    try {
      const res = await fetch('/api/user/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await update({
          ...session,
          user: {
            ...session?.user,
            branch: formData.branch,
            semester: Number(formData.semester)
          }
        });
        router.push('/');
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0f172a]">
      
      {/* --- Animated Background Blobs --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"
      />

      {/* --- Main Glass Card --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md glass-card rounded-3xl p-8 relative z-10 mx-4 backdrop-blur-xl bg-white/5 border border-white/10"
      >
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="bg-linear-to-tr from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-purple-500/30"
          >
            <GraduationCap className="w-10 h-10" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white">Welcome!</h1>
          <p className="text-slate-400 mt-2 text-lg">Let's personalize your study assistant.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Branch Select */}
          <div className="group">
            <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Your Branch</label>
            <div className="relative">
              <select 
                required
                className="w-full p-4 bg-black/20 border border-white/10 rounded-xl appearance-none text-slate-100 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all cursor-pointer hover:bg-black/30"
                value={formData.branch}
                onChange={(e) => setFormData({...formData, branch: e.target.value})}
              >
                <option value="" disabled className="bg-slate-900 text-slate-500">Select your branch</option>
                {branches.map(b => <option key={b} value={b} className="bg-slate-900 text-slate-200">{b}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Semester Select */}
          <div className="group">
            <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Current Semester</label>
            <div className="relative">
              <select 
                required
                className="w-full p-4 bg-black/20 border border-white/10 rounded-xl appearance-none text-slate-100 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all cursor-pointer hover:bg-black/30"
                value={formData.semester}
                onChange={(e) => setFormData({...formData, semester: e.target.value})}
              >
                <option value="" disabled className="bg-slate-900 text-slate-500">Select semester</option>
                {semesters.map(s => <option key={s} value={s} className="bg-slate-900 text-slate-200">Semester {s}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Get Started'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}