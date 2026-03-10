'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // !!! OVDJE STAVI SVOJ LINK S RENDER-A !!!
    const API_URL = 'https://moj-backend.onrender.com'; 
    
    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await res.json();
      
      if (data.user) {
        localStorage.setItem('token', data.user);
        alert('Uspješna prijava!');
        router.push('/recommended');
      } else {
        alert('Greška: ' + (data.error || 'Neispravni podaci'));
      }
    } catch (error) {
      console.error(error);
      alert('Greška pri spajanju na server.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', background: 'white', padding: '20px', borderRadius: '8px' }}>
      <h1>Prijava</h1>
      <form onSubmit={handleLogin}>
        <input 
          placeholder="Korisničko ime" 
          onChange={e => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Lozinka" 
          onChange={e => setPassword(e.target.value)} 
        />
        <button type="submit">Prijavi se</button>
      </form>
      <p style={{ marginTop: '10px' }}>Nemate račun? <a href="/register">Registrirajte se</a></p>
    </div>
  );
}