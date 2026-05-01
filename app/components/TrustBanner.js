export default function TrustBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #E74C3C 0%, #c0392b 100%)',
      color: 'white',
      textAlign: 'center',
      height: '40px',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.05em',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1001, /* Above navbar */
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }}>
      <span style={{ fontSize: '1.2rem' }}>🔥</span> 
      <span>Limited Offer: 10% off your first month! Spots are filling up fast.</span>
    </div>
  );
}
