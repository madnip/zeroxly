export default function Dashboard() {
  return (
    <div style={{padding: '4rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', color: 'white', textAlign: 'center'}}>
      <h1 style={{fontSize: '3rem', marginBottom: '2rem'}}>🎉 Dashboard</h1>
      <div style={{background: 'rgba(255,255,255,0.1)', maxWidth: '600px', margin: '0 auto', padding: '3rem', borderRadius: '20px'}}>
        <h3>AI Processing Your Inbox...</h3>
        <div style={{fontSize: '4rem', margin: '2rem 0'}}>🔄</div>
        <p>Check back in 60 seconds for stats!</p>
      </div>
    </div>
  );
}