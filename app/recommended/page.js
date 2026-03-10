'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Recommended() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Provjera prijave
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Dohvaćanje postova
    // !!! OVDJE STAVI SVOJ LINK S RENDER-A !!!
    const API_URL = 'https://moj-backend.onrender.com';
    
    fetch(`${API_URL}/api/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Greška kod dohvaćanja postova:", err));
  }, [router]);

  return (
    <div>
      <h1>Preporučeni Postovi</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', background: 'white' }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small>Autor: {post.author}</small>
            </div>
          ))
        ) : (
          <p>Trenutno nema postova. Budite prvi!</p>
        )}
      </div>
    </div>
  );
}
