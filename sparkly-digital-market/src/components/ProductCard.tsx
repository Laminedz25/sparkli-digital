import React from 'react';

type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div
      style={{
        border: '1px solid #eee',
        borderRadius: '10px',
        padding: '1rem',
        width: '220px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        textAlign: 'center',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ marginBottom: '1rem', color: '#555' }}>{price} ريال</p>
      <button
        style={{
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0051a3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
      >
        عرض المنتج
      </button>
    </div>
  );
}
