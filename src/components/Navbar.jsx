import React from 'react';
import { Play, Sparkles, Code2, BarChart3, BookOpen, ExternalLink, Github } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'demo', label: 'Live Player Demo', icon: Play },
    { id: 'playground', label: 'SDK Configurator', icon: Code2 },
    { id: 'analytics', label: 'Reel Analytics', icon: BarChart3 },
    { id: 'docs', label: 'SDK Documentation', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('demo')}>
          <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 shadow-lg shadow-purple-500/20">
            <img 
              src="/assets/Horizontal Logo_White.png" 
              alt="SuperReel" 
              className="h-7 w-auto object-contain"
              onError={(e) => {
                // Fallback to text logo if image unavailable
                e.target.style.display = 'none';
              }}
            />
            <span className="font-extrabold text-xl tracking-tight text-white pl-1">Super<span className="text-purple-400">Reel</span></span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles className="w-3 h-3" /> v1.0 SDK
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/hazikmaqsood/superreel"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>

          <button
            onClick={() => setActiveTab('playground')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white hover:opacity-95 shadow-lg shadow-purple-500/25 transition-all transform active:scale-95"
          >
            Get SDK Code <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-around bg-slate-900/95 border-t border-slate-800/80 px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium ${
                isActive ? 'text-purple-400 font-bold' : 'text-slate-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label.split(' ')[0]}
            </button>
          );
        })}
      </div>
    </header>
  );
}
