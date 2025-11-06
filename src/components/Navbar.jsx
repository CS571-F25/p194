import { Link, useLocation } from 'react-router'

export default function Navbar() {
   const location = useLocation()

   const isActive = (path) => location.pathname === path ? 'text-green-600 font-semibold' : 'text-gray-700'

   return (
      <nav style={styles.navbar}>
         <h2 style={styles.title}>Adopt-a-Tree 🌳</h2>
         <div style={styles.links}>
            <Link to='/' style={{ ...styles.link, ...(location.pathname === '/' ? styles.active : {}) }}>
               Home
            </Link>
            <Link to='/browse' style={{ ...styles.link, ...(location.pathname === '/browse' ? styles.active : {}) }}>
               Browse
            </Link>
            <Link to='/learn-more' style={{ ...styles.link, ...(location.pathname === '/learn-more' ? styles.active : {}) }}>
               Learn More
            </Link>
         </div>
      </nav>
   )
}

const styles = {
   navbar: {
      position: 'fixed',     
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#f0f9f4',
      borderBottom: '2px solid #b3d9b3',
   },
   title: {
      margin: 0,
      fontSize: '1.5rem',
      color: '#2e7d32',
      fontWeight: 'bold',
   },
   links: {
      display: 'flex',
      gap: '1.5rem',
   },
   link: {
      textDecoration: 'none',
      color: '#2e7d32',
      fontSize: '1.1rem',
   },
   active: {
      borderBottom: '2px solid #2e7d32',
      fontWeight: 'bold',
   },
}
