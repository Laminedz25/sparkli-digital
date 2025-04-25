import React from 'react';

type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <h3>{title}</h3>
      <p>{price} ريال</p>
<button 
  style={{ 
    backgroundColor: '#0070f3', 
    color: 'white', 
    padding: '0.5rem', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  }}
>
  عرض المنتج
</button>
    </div>
  );
}
