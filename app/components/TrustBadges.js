export default function TrustBadges() {
  return (
    <section style={{ 
      background: 'white', 
      borderTop: '1px solid #eee', 
      borderBottom: '1px solid #eee',
      padding: '2rem 1rem' 
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        alignItems: 'center'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '48px', height: '48px', borderRadius: '50%', background: '#f0f9f4', 
            color: '#27AE60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
          }}>
            👨‍⚕️
          </div>
          <div>
            <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '0.95rem' }}>Nutritionist Approved</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Backed by science</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '48px', height: '48px', borderRadius: '50%', background: '#fff9e6', 
            color: '#D4A853', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
          }}>
            🥬
          </div>
          <div>
            <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '0.95rem' }}>100% Fresh Ingredients</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Never frozen</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '48px', height: '48px', borderRadius: '50%', background: '#f8f9fa', 
            color: '#3498DB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
          }}>
            🔒
          </div>
          <div>
            <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '0.95rem' }}>Cancel Anytime</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>No long-term commitments</div>
          </div>
        </div>

      </div>
    </section>
  );
}
