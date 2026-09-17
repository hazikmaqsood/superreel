import React, { useState } from 'react';
import { Code2, Copy, Check, Sliders, Layers, Sparkles, Terminal, Smartphone, Monitor } from 'lucide-react';

export default function SDKPlayground() {
  const [layout, setLayout] = useState('vertical-reel'); // 'vertical-reel', 'story-bubble', 'floating-drawer'
  const [theme, setTheme] = useState('dark');
  const [autoPlay, setAutoPlay] = useState(true);
  const [soundDefault, setSoundDefault] = useState('muted');
  const [activeTab, setActiveTab] = useState('html');
  const [copied, setCopied] = useState(false);

  const getEmbedCode = () => {
    if (activeTab === 'html') {
      return `<!-- SuperReel SDK Embed -->
<div id="superreel-container"></div>
<script src="https://cdn.superreel.io/v1/superreel.js"></script>
<script>
  SuperReel.init({
    container: '#superreel-container',
    layout: '${layout}',
    theme: '${theme}',
    autoPlay: ${autoPlay},
    sound: '${soundDefault}',
    appId: 'sr_live_9942a7'
  });
</script>`;
    } else if (activeTab === 'react') {
      return `import { SuperReelPlayer } from '@superreel/react';

export default function App() {
  return (
    <SuperReelPlayer
      layout="${layout}"
      theme="${theme}"
      autoPlay={${autoPlay}}
      soundDefault="${soundDefault}"
      appId="sr_live_9942a7"
    />
  );
}`;
    } else {
      return `// NPM Package Installation
npm install @superreel/sdk

import { SuperReel } from '@superreel/sdk';

const sr = new SuperReel({
  apiKey: 'sr_live_9942a7',
  layout: '${layout}',
  theme: '${theme}'
});
sr.mount('#superreel-root');`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getEmbedCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
          <Sliders className="w-3.5 h-3.5" /> SDK Live Configurator
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Customize & Generate <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SDK Embed Code</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Configure player themes, widget styles, and behavior. Copy clean HTML or React component snippets into your project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Config Panel */}
        <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-xl flex flex-col gap-6">
          
          <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
            <Layers className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Widget Controls</h3>
          </div>

          {/* Layout Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Widget Layout Mode</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'vertical-reel', label: 'Vertical Reel', icon: Smartphone },
                { id: 'story-bubble', label: 'Story Bubbles', icon: Sparkles },
                { id: 'floating-drawer', label: 'Floating Drawer', icon: Monitor },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setLayout(item.id)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl text-xs font-medium border transition ${
                      layout === item.id 
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold' 
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Theme Style</label>
            <div className="grid grid-cols-3 gap-2">
              {['dark', 'glassmorphism', 'neon'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize border transition ${
                    theme === t 
                      ? 'bg-purple-600 text-white border-purple-500' 
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-col gap-4 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Autoplay Videos</p>
                <p className="text-xs text-slate-400">Start playing reels automatically on view</p>
              </div>
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => setAutoPlay(e.target.checked)}
                className="w-5 h-5 accent-purple-600 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Default Sound State</p>
                <p className="text-xs text-slate-400">Start videos muted for web policy compliance</p>
              </div>
              <select
                value={soundDefault}
                onChange={(e) => setSoundDefault(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 p-2 font-medium"
              >
                <option value="muted">Muted (Recommended)</option>
                <option value="unmuted">Unmuted</option>
              </select>
            </div>
          </div>

        </div>

        {/* Right Column: Code Generator */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-xl flex flex-col gap-4">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Generated Integration Code</h3>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              {['html', 'react', 'npm'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition ${
                    activeTab === tab ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Code Block Container */}
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 font-['JetBrains_Mono',monospace] text-xs text-purple-300 overflow-x-auto min-h-[260px] flex flex-col justify-between">
            <pre className="leading-relaxed">
              <code>{getEmbedCode()}</code>
            </pre>

            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/90 text-white font-sans text-xs font-bold hover:bg-purple-600 transition shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          {/* Quick Install Note */}
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
            <p className="text-xs text-slate-300">
              Paste this script into your HTML <code className="text-purple-400">&lt;head&gt;</code> or React component to immediately activate SuperReel on your domain.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
