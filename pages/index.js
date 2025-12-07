import Head from 'next/head';

export default function Home() {
  const handleConnect = () => {
    alert('🚀 Connected! Stripe ready - get your key at stripe.com');
  };

  return (
    <>
      <Head>
        <title>ZeroXly - AI Inbox Zero</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '50px 20px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          fontWeight: '900',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #fff, #a5b4fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🚀 ZEROXLY
        </h1>
        
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          marginBottom: '2rem'
        }}>
          AI Inbox Zero Automator
        </h2>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          maxWidth: '500px',
          margin: '0 auto 3rem',
          lineHeight: '1.6'
        }}>
          Connect Gmail → AI auto-replies, extracts leads, zero config
        </p>

        <button
          onClick={handleConnect}
          style={{
            padding: '20px 50px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 15px 35px rgba(16,185,129,0.4)'
          }}
✨ Connect Email FREE
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)',
          gap: '2rem',
          marginTop: '4rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div style={{background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '15px'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa'}}>10K+</div>
            Emails Daily
          </div>
          <div style={{background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '15px'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa'}}>98%</div>
            Auto-Replies
          </div>
          <div style={{background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '15px'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa'}}>$9</div>
            Per Inbox/Mo
          </div>
        </div>
      </div>
    </>
  );
}