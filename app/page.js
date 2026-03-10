import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Dobrodošli na Forum!</h1>
      <p>Ovo je početna stranica.</p>
      <Link href="/login">Prijavi se ovdje</Link>
    </div>
  )
}