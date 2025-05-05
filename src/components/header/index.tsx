const Header = () => {
  return (
    <header style={{
      backgroundColor: '#1f80e0',
      padding: '1rem',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }}>
     <img
        src="logo.png"
        alt="Disney+ Logo"
        style={{ width: '100px', marginBottom: '1rem' }}
      />
    </header>
  )
}

export default Header