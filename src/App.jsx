import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ReelPlayer from './components/ReelPlayer';
import StoryStrip from './components/StoryStrip';
import SDKPlayground from './components/SDKPlayground';
import AnalyticsView from './components/AnalyticsView';
import DocsView from './components/DocsView';
import { Sparkles, Play, Code2, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('demo');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-500 selection:text-white">
      
      {/* Global Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'demo' && (
          <div className="animate-in fade-in duration-300">
            {/* Story Bubbles Strip */}
            <StoryStrip />

            {/* Vertical Reel Player */}
            <ReelPlayer />
          </div>
        )}

        {activeTab === 'playground' && (
          <div className="animate-in fade-in duration-300">
            <SDKPlayground />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="animate-in fade-in duration-300">
            <AnalyticsView />
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="animate-in fade-in duration-300">
            <DocsView />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/assets/favicon-32x32.png" alt="SuperReel" className="w-5 h-5" />
            <span className="font-bold text-slate-300">SuperReel SDK</span>
            <span>&copy; {new Date().getFullYear()} SuperReel Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('docs')} className="hover:text-purple-400 transition">Documentation</button>
            <button onClick={() => setActiveTab('playground')} className="hover:text-purple-400 transition">Playground</button>
            <a href="https://github.com/hazikmaqsood/superreel" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
