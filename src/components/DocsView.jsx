import React from 'react';
import { BookOpen, CheckCircle, Terminal, Zap, Code, ShieldCheck } from 'lucide-react';

export default function DocsView() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" /> SDK Reference Guide
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Integration & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</span>
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Embed SuperReel into React, Next.js, Vue, or plain HTML websites in under 2 minutes.
        </p>
      </div>

      {/* Quickstart Steps */}
      <div className="flex flex-col gap-6">
        
        {/* Step 1 */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
              1
            </div>
            <h3 className="text-lg font-bold text-white">Include SuperReel Script</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Add the lightweight standalone bundle script into your website HTML <code className="text-purple-400">&lt;head&gt;</code> tag:
          </p>
          <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-['JetBrains_Mono',monospace] text-xs text-purple-300 overflow-x-auto">
            <code>{`<script src="https://cdn.superreel.io/v1/superreel.js" async></script>`}</code>
          </pre>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
              2
            </div>
            <h3 className="text-lg font-bold text-white">Initialize Player with App ID</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Call <code className="text-purple-400">SuperReel.init()</code> to mount the interactive reel container anywhere in your layout:
          </p>
          <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-['JetBrains_Mono',monospace] text-xs text-purple-300 overflow-x-auto">
            <code>{`SuperReel.init({
  container: '#superreel-container',
  layout: 'vertical-reel', // 'vertical-reel' | 'story-bubble' | 'floating-drawer'
  theme: 'glassmorphism',
  autoPlay: true,
  sound: 'muted'
});`}</code>
          </pre>
        </div>

        {/* Features List */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl">
          <h3 className="text-lg font-bold text-white mb-4">Core SDK Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Zero external dependencies (Vanilla JS + Shadow DOM)',
              'Ultra-fast load time under 18KB gzip',
              'Built-in analytics tracking & event hooks',
              'Custom CTA overlay buttons with URL parameters',
              'Automatic vertical swipe gesture navigation',
              'Full screen iOS and Android web playback support'
            ].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
