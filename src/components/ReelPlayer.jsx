import React, { useState, useRef } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  ShoppingBag, 
  ChevronUp, 
  ChevronDown, 
  Sparkles,
  Check,
  Bookmark
} from 'lucide-react';

const REEL_DEMOS = [
  {
    id: 1,
    creator: 'SuperReel Studio',
    username: '@superreel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    title: 'Transform your e-commerce with 1-click video reels! 🚀',
    tags: '#ecommerce #superreel #conversion',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-vertical-view-of-a-woman-posing-41551-large.mp4',
    likes: 12420,
    comments: 348,
    shares: 890,
    ctaText: 'Shop Featured Outfit',
    ctaLink: 'https://superreel.io/shop',
    price: '$89.00'
  },
  {
    id: 2,
    creator: 'TechLab Global',
    username: '@techlab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    title: 'The future of mobile video SDKs is here. Instant load speed ✨',
    tags: '#developer #webdev #react',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-displaying-a-reel-51547-large.mp4',
    likes: 28910,
    comments: 1042,
    shares: 3120,
    ctaText: 'Integrate in 2 Mins',
    ctaLink: 'https://superreel.io/docs',
    badge: 'Popular'
  },
  {
    id: 3,
    creator: 'Urban Vibe',
    username: '@urbanvibe',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    title: 'High-converting video carousel widget preview 🎵',
    tags: '#ui #design #superreelsdk',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-along-the-beach-at-sunset-41549-large.mp4',
    likes: 8740,
    comments: 192,
    shares: 410,
    ctaText: 'View SDK Live Demo',
    ctaLink: 'https://superreel.io'
  }
];

export default function ReelPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [likedMap, setLikedMap] = useState({});
  const [savedMap, setSavedMap] = useState({});
  const [copied, setCopied] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const videoRef = useRef(null);

  const currentReel = REEL_DEMOS[currentIndex];
  const isLiked = likedMap[currentReel.id] || false;
  const isSaved = savedMap[currentReel.id] || false;

  const handleNext = () => {
    if (currentIndex < REEL_DEMOS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = () => {
    setLikedMap((prev) => ({ ...prev, [currentReel.id]: !prev[currentReel.id] }));
  };

  const toggleSave = () => {
    setSavedMap((prev) => ({ ...prev, [currentReel.id]: !prev[currentReel.id] }));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-8 px-4">
      
      {/* Container header info */}
      <div className="text-center max-w-xl mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Interactive <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Reel Player Widget</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Embed vertical TikTok/Instagram style reels on your web app with instant engagement CTAs.
        </p>
      </div>

      {/* Main Player Box */}
      <div className="relative w-full max-w-[380px] h-[660px] rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-800 shadow-2xl shadow-purple-950/40 flex flex-col justify-between">
        
        {/* Top Overlay Controls */}
        <div className="absolute top-0 inset-x-0 z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={currentReel.avatar} 
              alt={currentReel.creator} 
              className="w-9 h-9 rounded-full border-2 border-purple-500 object-cover"
            />
            <div>
              <p className="text-white font-bold text-xs leading-none">{currentReel.creator}</p>
              <p className="text-slate-300 text-[10px] mt-0.5">{currentReel.username}</p>
            </div>
          </div>

          <button 
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-black/60 transition"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Video Element */}
        <div className="relative w-full h-full bg-slate-950 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src={currentReel.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
              <div className="p-4 rounded-full bg-purple-600/90 text-white shadow-xl transform scale-110">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Right Side Action Column */}
        <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4">
          {/* Like */}
          <button 
            onClick={toggleLike}
            className="flex flex-col items-center gap-1 group"
          >
            <div className={`p-3 rounded-full backdrop-blur-md border transition-all ${
              isLiked 
                ? 'bg-rose-500/90 text-white border-rose-400 scale-110' 
                : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
            }`}>
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[11px] font-semibold text-white drop-shadow">
              {(currentReel.likes + (isLiked ? 1 : 0)).toLocaleString()}
            </span>
          </button>

          {/* Comments */}
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex flex-col items-center gap-1"
          >
            <div className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-black/60 transition">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-white drop-shadow">
              {currentReel.comments}
            </span>
          </button>

          {/* Save / Bookmark */}
          <button 
            onClick={toggleSave}
            className="flex flex-col items-center gap-1"
          >
            <div className={`p-3 rounded-full backdrop-blur-md border transition ${
              isSaved ? 'bg-amber-500 text-white border-amber-400' : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
            }`}>
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </div>
          </button>

          {/* Share */}
          <button 
            onClick={handleShare}
            className="flex flex-col items-center gap-1 relative"
          >
            <div className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-black/60 transition">
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Share2 className="w-5 h-5" />}
            </div>
            <span className="text-[11px] font-semibold text-white drop-shadow">
              {currentReel.shares}
            </span>
          </button>
        </div>

        {/* Bottom Content & CTA */}
        <div className="absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-3">
          <div className="pr-12">
            <p className="text-white font-semibold text-sm leading-snug">{currentReel.title}</p>
            <p className="text-purple-400 font-medium text-xs mt-1">{currentReel.tags}</p>
          </div>

          {/* Conversion CTA Button */}
          <a
            href={currentReel.ctaLink}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-bold text-sm flex items-center justify-between shadow-lg shadow-purple-600/30 hover:opacity-95 transition transform active:scale-98"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> {currentReel.ctaText}
            </span>
            {currentReel.price && (
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{currentReel.price}</span>
            )}
          </a>
        </div>

        {/* Next / Prev Floating Navigation Buttons */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/80 transition"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === REEL_DEMOS.length - 1}
            className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/80 transition"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Reel Feed Controls */}
      <div className="mt-4 flex items-center gap-3">
        <span className="text-xs text-slate-400 font-medium">Reel {currentIndex + 1} of {REEL_DEMOS.length}</span>
        <div className="flex gap-1.5">
          {REEL_DEMOS.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                idx === currentIndex ? 'w-6 bg-purple-500' : 'w-2 bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
