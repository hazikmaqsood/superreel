import React from 'react';

export default function App() {
  return (
    <div className="sr-container">
      {/* Embedded CSS Animations & Custom Styling */}
      <style>{`
        body {
          margin: 0;
          overflow-x: hidden;
          background-color: #000000;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes sr-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes sr-blurIn {
          from { opacity: 0; filter: blur(10px); transform: translateY(12px); }
          to { opacity: 1; filter: blur(0); transform: translateY(0); }
        }

        @keyframes sr-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes sr-ring {
          to { transform: rotate(360deg); }
        }

        @keyframes sr-beam {
          0% { transform: translateY(8%); opacity: 0; }
          15% { opacity: 0.55; }
          85% { opacity: 0.35; }
          100% { transform: translateY(-70%); opacity: 0; }
        }

        @keyframes sr-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.15; }
          50% { transform: translate(6px, -22px); opacity: 0.55; }
        }

        @keyframes sr-sweep {
          0% { transform: translateX(-130%) rotate(6deg); opacity: 0; }
          6% { opacity: 0.18; }
          22% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes sr-drift {
          0%, 100% { transform: translate(-2%, -1%) scale(1); }
          50% { transform: translate(2%, 2%) scale(1.06); }
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #d1d5db;
          transition: transform 0.25s, color 0.25s, box-shadow 0.25s;
        }

        .social-link:hover {
          transform: translateY(-3px) scale(1.05);
          color: #f7931e;
          box-shadow: 0 0 14px rgba(247, 147, 30, 0.3);
        }

        .app-store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 178px;
          padding: 11px 20px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          cursor: pointer;
          opacity: 0.85;
          transition: opacity 0.25s, border-color 0.25s, box-shadow 0.25s;
        }

        .app-store-btn:hover {
          border-color: rgba(247, 147, 30, 0.55);
          box-shadow: 0 0 18px rgba(247, 147, 30, 0.2);
          opacity: 1;
        }
      `}</style>

      {/* Main Wrapper */}
      <div 
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          isolation: 'isolate',
          '--sr-orange': '#f7931e',
          '--sr-red': '#ee3f56',
          '--sr-magenta': '#c22e9e',
          '--sr-purple': '#7b5ce0',
          backgroundColor: '#000000',
          padding: '24px 16px'
        }}
      >
        {/* Ambient Gradient Backgrounds */}
        <div style={{ position: 'absolute', inset: '-10%', background: 'radial-gradient(closest-side, color-mix(in srgb, var(--sr-purple) 55%, transparent) 0%, transparent 70%)', opacity: 0.85, animation: 'sr-drift 26s ease-in-out infinite', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '-15%', left: '50%', width: '120%', height: '70%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--sr-magenta) 45%, transparent) 0%, transparent 60%)', opacity: 0.5, zIndex: 0, animation: 'sr-drift 32s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '80%', height: '60%', background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--sr-orange) 40%, transparent) 0%, transparent 65%)', opacity: 0.35, zIndex: 0, animation: 'sr-drift 38s ease-in-out infinite' }} />

        {/* Ambient Beams */}
        <div style={{ position: 'absolute', bottom: 0, left: '12%', width: '70px', height: '100%', background: 'linear-gradient(to top, transparent, color-mix(in srgb, var(--sr-orange) 65%, transparent) 40%, transparent)', filter: 'blur(30px)', opacity: 0.22, animation: 'sr-beam 14s linear infinite', animationDelay: '-2s', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: 0, left: '38%', width: '90px', height: '100%', background: 'linear-gradient(to top, transparent, color-mix(in srgb, var(--sr-red) 60%, transparent) 35%, transparent)', filter: 'blur(36px)', opacity: 0.16, animation: 'sr-beam 18s linear infinite', animationDelay: '-6s', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: 0, left: '64%', width: '60px', height: '100%', background: 'linear-gradient(to top, transparent, color-mix(in srgb, var(--sr-magenta) 65%, transparent) 40%, transparent)', filter: 'blur(28px)', opacity: 0.2, animation: 'sr-beam 16s linear infinite', animationDelay: '-10s', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: 0, left: '84%', width: '50px', height: '100%', background: 'linear-gradient(to top, transparent, color-mix(in srgb, var(--sr-purple) 65%, transparent) 40%, transparent)', filter: 'blur(26px)', opacity: 0.18, animation: 'sr-beam 20s linear infinite', animationDelay: '-14s', zIndex: 0 }} />

        {/* Floating Particles */}
        <div style={{ position: 'absolute', top: '20%', left: '18%', width: '4px', height: '4px', borderRadius: '50%', background: '#e5e7eb', animation: 'sr-float 9s ease-in-out infinite', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '65%', left: '26%', width: '3px', height: '3px', borderRadius: '50%', background: 'var(--sr-orange)', animation: 'sr-float 11s ease-in-out infinite', animationDelay: '-3s', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '40%', left: '74%', width: '4px', height: '4px', borderRadius: '50%', background: '#e5e7eb', animation: 'sr-float 13s ease-in-out infinite', animationDelay: '-5s', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '78%', left: '82%', width: '3px', height: '3px', borderRadius: '50%', background: 'var(--sr-magenta)', animation: 'sr-float 10s ease-in-out infinite', animationDelay: '-1s', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '15%', left: '60%', width: '3px', height: '3px', borderRadius: '50%', background: '#9ca3af', animation: 'sr-float 12s ease-in-out infinite', animationDelay: '-7s', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '55%', left: '10%', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--sr-purple)', animation: 'sr-float 14s ease-in-out infinite', animationDelay: '-9s', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '30%', left: '88%', width: '3px', height: '3px', borderRadius: '50%', background: '#e5e7eb', animation: 'sr-float 10.5s ease-in-out infinite', animationDelay: '-4s', zIndex: 0 }} />

        {/* Light Sweep */}
        <div style={{ position: 'absolute', inset: 0, width: '200%', height: '200%', background: 'linear-gradient(75deg, transparent 40%, color-mix(in srgb, var(--sr-magenta) 35%, transparent) 50%, transparent 60%)', animation: 'sr-sweep 22s ease-in-out infinite', zIndex: 0, pointerEvents: 'none' }} />

        {/* Overlay Grid Dots */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.06, mixBlendMode: 'overlay', backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)', backgroundSize: '3px 3px' }} />

        {/* Main Content Container - Perfect Vertical & Horizontal Centering */}
        <div 
          style={{ 
            position: 'relative', 
            zIndex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 'clamp(16px, 3vh, 28px)', 
            maxWidth: '720px', 
            width: '100%',
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto'
          }}
        >

          {/* Logo */}
          <div style={{ position: 'relative', animation: 'sr-fadeUp 0.9s ease-out both' }}>
            <div style={{ position: 'absolute', inset: '-40px', background: 'radial-gradient(closest-side, color-mix(in srgb, var(--sr-orange) 45%, transparent) 0%, transparent 75%)', opacity: 0.5, filter: 'blur(10px)', zIndex: -1 }} />
            <img 
              src="/assets/Vertical_Logo_white.png" 
              alt="SuperReel" 
              style={{ width: 'clamp(140px, 18vw, 180px)', height: 'auto', display: 'block' }} 
              onError={(e) => {
                // Fallback to text logo if image fails
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Status Badge */}
          <div style={{ position: 'relative', display: 'inline-flex', padding: '12px', borderRadius: '999px', overflow: 'hidden', animation: 'sr-fadeUp 0.9s ease-out both', animationDelay: '0.8s' }}>
            <div style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '10px 22px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(6px)' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f7931e', boxShadow: '0 0 8px #f7931e', animation: 'sr-pulse 2.2s ease-in-out infinite', display: 'inline-block' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e5e7eb', fontWeight: 500 }}>WE'RE BUILDING</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 style={{ fontWeight: 700, fontSize: 'clamp(32px, 5.2vw, 70px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#ffffff', margin: 0, animation: 'sr-blurIn 1s ease-out both', animationDelay: '0.25s', maxWidth: '650px' }}>
            Worth the wait. Worth the watch.
          </h1>

          {/* Subtitle */}
          <p style={{ paddingBottom: '40px', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.55, color: '#9ca3af', maxWidth: '460px', margin: 0, animation: 'sr-fadeUp 0.9s ease-out both', animationDelay: '0.55s' }}>
            SuperReel is in progress.<br />
            <i>Short stories. Big drama. Coming soon.</i>
          </p>

          {/* App Stores Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', animation: 'sr-fadeUp 0.9s ease-out both', animationDelay: '1.05s' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280' }}>Coming soon to</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
              
              {/* App Store */}
              <div className="app-store-btn">
<svg width="20" height="20" viewBox="0 0 17 20" fill="#e5e7eb" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.6367 4.83594C13.3173 4.86294 15.2285 5.09936 16.4551 6.82031C16.3542 6.88031 14.175 8.09616 14.1992 10.625C14.2286 13.6518 16.9694 14.6588 17 14.6719C16.9778 14.7429 16.5618 16.1066 15.5557 17.5166C14.6851 18.7345 13.7821 19.9476 12.3594 19.9736C10.9621 19.9985 10.5117 19.1797 8.9131 19.1797C7.31571 19.1798 6.81571 19.948 5.49317 19.999C4.12022 20.0477 3.07387 18.6806 2.19728 17.4668C0.403518 14.984 -0.966838 10.4506 0.873057 7.39062C1.78718 5.87164 3.42071 4.90779 5.19435 4.88379C6.54225 4.85881 7.81554 5.75293 8.63966 5.75293C9.46384 5.75275 11.0109 4.67795 12.6367 4.83594Z" />
  <path d="M12.6572 0C12.7917 1.17097 12.3004 2.34838 11.5713 3.19336C10.8422 4.03928 9.64556 4.69633 8.47364 4.60938C8.3149 3.46148 8.90562 2.26463 9.58204 1.51562C10.3354 0.671635 11.6066 0.04 12.6572 0Z" />
</svg>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.25 }}>
                  <span style={{ fontSize: '13px', color: '#e5e7eb', fontWeight: 500 }}>App Store</span>
                  <span style={{ fontSize: '10.5px', color: '#6b7280', letterSpacing: '0.03em' }}>Coming Soon</span>
                </div>
              </div>

              {/* Google Play */}
              <div className="app-store-btn">
                <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"></path>
      <path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"></path>
      <path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"></path>
      <path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"></path>
    </g>
  </g>
</svg>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.25 }}>
                  <span style={{ fontSize: '13px', color: '#e5e7eb', fontWeight: 500 }}>Google Play</span>
                  <span style={{ fontSize: '10.5px', color: '#6b7280', letterSpacing: '0.03em' }}>Coming Soon</span>
                </div>
              </div>

            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', animation: 'sr-fadeUp 0.9s ease-out both', animationDelay: '1.25s' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280' }}>Stay connected</span>
            <div style={{ display: 'flex', gap: '10px' }}>

              <a href="https://www.instagram.com/superreel.fun" aria-label="Instagram" className="social-link">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a href="#" aria-label="TikTok" className="social-link">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82a4.28 4.28 0 0 1-3.34-2.58h-2.62v11.72c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 1 1 0-5.44c.24 0 .48.03.7.08V9.5a5.44 5.44 0 0 0-.7-.05 5.44 5.44 0 1 0 5.44 5.44V9.24a6.9 6.9 0 0 0 3.24.9V7.42a4.3 4.3 0 0 1-.0-.0z" />
                </svg>
              </a>

              <a href="#" aria-label="YouTube" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
                  <path d="M10.5 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a href="https://snapchat.com/t/wL5z4644" aria-label="Snapchat" className="social-link">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3.5c2.6 0 4.4 2 4.4 4.6 0 1 0 2.3.15 3.1.25.1.9.35 1.55.15.35-.1.75.15.7.55-.05.55-.6 1.15-1.6 1.7.2.65 1 1.15 2.1 1.35.3.05.4.45.15.65-.4.35-1.05.65-1.7.8.05.25.05.5-.05.7-.25.55-1.15.55-2 .75-.5.1-.85.55-1.35 1.1-.7.75-1.6 1.6-3.35 1.6s-2.65-.85-3.35-1.6c-.5-.55-.85-1-1.35-1.1-.85-.2-1.75-.2-2-.75-.1-.2-.1-.45-.05-.7-.65-.15-1.3-.45-1.7-.8-.25-.2-.15-.6.15-.65 1.1-.2 1.9-.7 2.1-1.35-1-.55-1.55-1.15-1.6-1.7-.05-.4.35-.65.7-.55.65.2 1.3-.05 1.55-.15.15-.8.15-2.1.15-3.1 0-2.6 1.8-4.6 4.4-4.6z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
