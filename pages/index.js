import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';

export default function Home() {
  const handleConnect = async () => {
    const stripe = await loadStripe('pktest51...');
    stripe.redirectToCheckout({
      lineItems: [{ price: 'price123', quantity: 1 }],
      mode: 'subscription',
      successUrl: window.location.origin + '/dashboard',
      cancelUrl: window.location.origin,
    });
  };

  return (
    <>
      <Head>
        <title>ZeroXly - AI Inbox Zero Automator</title>
        
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
        
        {/ 🔥 HERO SECTION - 3D GLASS MORPHISM /}
        <section className="relative pt-20 pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circleat20%80%,rgba(120,119,198,0.3),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circleat80%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              
              {/ MAIN LOGO - NEON GLOW /}
              <div className="inline-block mb-8 p-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  ZEROXLY
                </h1>
                <div className="w-48 h-1 mx-auto mt-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg"></div>
              </div>

              {/ HERO TEXT - KINETIC TYPE /}
              <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white/95 mb-6 leading-tight animate-float">
                  Your AI Email{' '}
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                    Genius
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Connect once. AI auto-replies 98% human-like, extracts leads, 
                  schedules meetings. Zero inbox forever.{' '}
                  <span className="font-bold text-emerald-400">No setup.</span>
                </p>
              </div>

              {/ 🔥 MAGIC BUTTON - 3D FLOATING /}
              <div className="group relative inline-block mb-16">
                <button
                  onClick={handleConnect}
                  className="px-16 py-8 text-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 hover:scale-105 relative overflow-hidden"
<span className="relative z-10 flex items-center gap-4">
                    ✨ Connect Email FREE
                    <svg className="w-8 h-8 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>

              {/ TRUST BADGES /}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-20">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                  10K+ emails processed daily
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/10">
                  🚀 xAI Powered
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/10">
                  $9/mo unlimited
                </div>
              </div>
            </div>
          </div>

          {/ FLOATING EMAIL ANIMATION /}
          <div className="absolute top-1/2 right-10 w-96 h-96 opacity-20 animate-bob">
            <div className="w-full h-full bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl animate-pulse"></div>
          </div>
        </section>

        {/ 🔥 DEMO VIDEO SECTION /}
        <section className="relative -mt-20 pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              
              {/ 3D VIDEO PLAYER /}
              <div className="relative group mx-auto max-w-4xl aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-1 shadow-2xl border border-white/20 hover:shadow-4xl transition-all duration-700 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur"></div>
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full rounded-3xl object-cover shadow-2xl"
                  poster="https://i.imgur.com/ai-email-poster.jpg"
<source src="https://i.imgur.com/ai-email-demo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 ml-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/ FEATURES GRID /}
              <div className="grid md:grid-cols-3 gap-8 mt-24">
                {[
                  { icon: '🤖', title: 'AI Auto-Replies', desc: '98% human-like responses' },
                  { icon: '💎', title: 'Lead Extraction', desc: 'Never miss a sales opportunity' },
                  { icon: '⚡', title: 'Zero Config', desc: 'Connect → Magic happens' },
                  { icon: '📅', title: 'Auto-Scheduling', desc: 'Calendly integration' },
                  { icon: '🔒', title: 'Privacy First', desc: 'Your data never stored' },
                  { icon: '🌍', title: 'Gmail/Outlook', desc: 'Any IMAP provider' }
                ].map((feature, i) => (
                  <div key={i} className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                    <p className="text-white/70">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/ PRICING /}
        <section className="container mx-auto px-6 pb-32">
          <div className="max-w-md mx-auto text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Simple Pricing
            </h2>
            <p className="text-xl text-white/80">Cancel anytime. No contracts.</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl rounded-3xl p-1 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-3xl p-10 text-center">
                <div className="inline-block px-8 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl mb-8">
                  <span className="text-3xl font-bold text-emerald-400">MOST POPULAR</span>
                </div>
                <h3 className="text-6xl font-black text-white mb-6">$9</h3>
                <p className="text-2xl text-white/80 mb-12">per inbox / month</p>
                <ul className="text-left mb-12 space-y-4 text-white/80">
                  <li className="flex items-center gap-3">✅ Unlimited emails</li>
                  <li className="flex items-center gap-3">✅ AI auto-replies</li>
                  <li className="flex items-center gap-3">✅ Lead extraction</li>
                  <li className="flex items-center gap-3">✅ Team accounts</li>
                </ul>
                <button
                  onClick={handleConnect}
                  className="w-full py-8 px-12 text-xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform"
🚀 Start Free Trial
                </button>
                <p className="text-sm text-white/60 mt-6">10 emails/day free forever</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bob { animation: bob 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      }</style>
    </>
  );
}