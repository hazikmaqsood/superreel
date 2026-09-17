import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Play, 
  Heart, 
  Zap, 
  Smartphone, 
  ShoppingBag,
  Github,
  Mail,
  Check
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F111A] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/Horizontal Logo_White.png" 
            alt="SuperReel" 
            className="h-8 w-auto object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="font-extrabold text-2xl tracking-tight text-white">Super<span className="text-purple-400">Reel</span></span>
        </div>

        <a
          href="https://github.com/hazikmaqsood/superreel"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10">
        
        {/* Left Text & Waitlist Column */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-bold mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Short-Video Reel SDK • Launching Soon</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Embed TikTok & Reel Video Feeds <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Into Any Web App</span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base sm:text-lg mt-6 leading-relaxed">
            SuperReel is the ultimate short-video SDK. Embed vertical reel feeds, shoppable video carousels, and story bubbles into your website with 1 line of code.
          </p>

          {/* Email Subscription Form */}
          <div className="mt-8 max-w-md mx-auto lg:mx-0">
            {submitted ? (
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center gap-3 text-purple-300 font-bold text-sm animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>You're on the early access list! We'll notify you soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-bold text-sm hover:opacity-95 shadow-lg shadow-purple-600/30 transition transform active:scale-95 flex items-center justify-center gap-2 shrink-0"
                >
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="text-slate-500 text-xs mt-3">Join 1,200+ developers & e-commerce brands on the waitlist.</p>
          </div>

          {/* Key Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-900">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold">1-Line Integration</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold">Mobile & Gesture First</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold">Shoppable Video CTAs</span>
            </div>
          </div>

        </div>

        {/* Right Phone Reel Preview Frame */}
        <div className="relative shrink-0 w-full max-w-[340px]">
          <div className="relative h-[620px] rounded-[40px] p-3 bg-slate-900 border-4 border-slate-800 shadow-2xl shadow-purple-950/50 overflow-hidden flex flex-col justify-between">
            
            {/* Top Video Overlay */}
            <div className="absolute top-0 inset-x-0 z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                  alt="SuperReel" 
                  className="w-8 h-8 rounded-full border-2 border-purple-500 object-cover"
                />
                <div>
                  <p className="text-white font-bold text-xs leading-none">SuperReel Demo</p>
                  <p className="text-slate-300 text-[10px] mt-0.5">@superreel.io</p>
                </div>
              </div>

              <button 
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-black/60 transition"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Video Player */}
            <video
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-vertical-view-of-a-woman-posing-41551-large.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover rounded-[28px] absolute inset-0"
            />

            {/* Right Like Button */}
            <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-3">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full backdrop-blur-md border transition-all ${
                  isLiked 
                    ? 'bg-rose-500 text-white border-rose-400 scale-110' 
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Bottom Overlay & CTA */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2 rounded-b-[36px]">
              <p className="text-white font-semibold text-xs">Transform your web app engagement with SuperReel! ✨</p>
              <button className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md">
                <ShoppingBag className="w-3.5 h-3.5" /> Shop Featured Product
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <div>&copy; {new Date().getFullYear()} SuperReel Inc. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/hazikmaqsood/superreel" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">GitHub</a>
          <a href="mailto:contact@superreel.io" className="hover:text-slate-300 transition">Contact Us</a>
        </div>
      </footer>

    </div>
  );
}
