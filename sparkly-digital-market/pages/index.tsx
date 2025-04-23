import ProductCard from '../components/ProductCard';
import Head from 'next/head';

const products = [
  { title: 'قالب سيرة ذاتية', price: 25, image: '/cv-template.jpg' },
  { title: 'ملف Excel للمصاريف', price: 15, image: '/excel.jpg' },
  { title: 'كتاب PDF: كيف تتعلم React', price: 40, image: '/book.jpg' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>سوق المنتجات الرقمية</title>
      </Head>
      <div style={{ padding: '2rem' }}>
        <h1>منتجات رقمية جاهزة للتحميل</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </div>
    </>
  );
}
