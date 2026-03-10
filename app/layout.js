import './globals.css'

export const metadata = {
  title: 'Moj Forum',
  description: 'Jednostavan forum',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f4f4f4' }}>
        <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: '#fff' }}>Home</a>
          <a href="/login" style={{ color: '#fff' }}>Login</a>
          <a href="/register" style={{ color: '#fff' }}>Register</a>
        </nav>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}