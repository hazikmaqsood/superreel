import React, { useState } from 'react';
import { Play, Sparkles, X, Heart, MessageCircle } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    name: 'New Drops',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-vertical-view-of-a-woman-posing-41551-large.mp4',
    unseen: true,
  },
  {
    id: 2,
    name: 'SDK Setup',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-displaying-a-reel-51547-large.mp4',
    unseen: true,
  },
  {
    id: 3,
    name: 'Best Sellers',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-along-the-beach-at-sunset-41549-large.mp4',
    unseen: false,
  },
  {
    id: 4,
    name: 'Reviews',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-vertical-view-of-a-woman-posing-41551-large.mp4',
    unseen: false,
  }
];

export default function StoryStrip() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-lg">
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">SuperReel Story Bubbles Widget</h3>
        </div>
        <span className="text-xs text-slate-400">Click bubble to preview story reel</span>
      </div>

      {/* Story Bubbles Row */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
        {STORIES.map((story) => (
          <div
            key={story.id}
            onClick={() => setActiveStory(story)}
            className="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0"
          >
            <div className={`p-0.5 rounded-full bg-gradient-to-tr ${
              story.unseen 
                ? 'from-purple-500 via-pink-500 to-amber-400 animate-pulse' 
                : 'from-slate-700 to-slate-800'
            } transition transform group-hover:scale-105`}>
              <div className="p-0.5 rounded-full bg-slate-950">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border border-slate-800"
                />
              </div>
            </div>
            <span className="text-xs font-medium text-slate-300 group-hover:text-white transition">{story.name}</span>
          </div>
        ))}
      </div>

      {/* Modal Popup Overlay */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-[360px] h-[600px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col justify-between">
            
            {/* Header */}
            <div className="p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-10">
              <div className="flex items-center gap-2">
                <img src={activeStory.avatar} alt={activeStory.name} className="w-8 h-8 rounded-full border border-purple-500" />
                <span className="text-xs font-bold text-white">{activeStory.name}</span>
              </div>
              <button 
                onClick={() => setActiveStory(null)}
                className="p-1.5 rounded-full bg-black/40 text-white hover:bg-black/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video */}
            <video
              src={activeStory.videoUrl}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Footer */}
            <div className="p-4 z-10 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
              <button className="w-full py-2.5 rounded-xl bg-purple-600 font-bold text-xs text-white text-center">
                Explore Collection
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
