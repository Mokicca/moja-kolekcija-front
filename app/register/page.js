'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // !!! OVDJE STAVI SVOJ LINK S RENDER-A !!!
    const API_URL = 'https://moja-kolekcija.onrender.com';
    
    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await res.json();
      
      if (data.status === 'ok') {
        alert('Registracija uspješna! Sada se prijavite.');
        router.push('/login');
      } else {
        alert('Greška: ' + (data.error || 'Korisnik već postoji'));
      }
    } catch (error) {
      console.error(error);
      alert('Greška pri spajanju na server.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', background: 'white', padding: '20px', borderRadius: '8px' }}>
      <h1>Registracija</h1>
      <form onSubmit={handleRegister}>
        <input 
          placeholder="Korisničko ime" 
          onChange={e => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Lozinka" 
          onChange={e => setPassword(e.target.value)} 
        />
        <button type="submit">Registriraj se</button>
      </form>
    </div>
  );

}
