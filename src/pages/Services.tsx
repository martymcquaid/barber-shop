import Layout from '../components/Layout'
import ServiceCard from '../components/ServiceCard'
import React from 'react'

const services = [
  {
    title: 'Classic Haircut',
    description: 'A timeless cut tailored to your hair type and face shape.',
    price: '25',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Style & Color',
    description: 'Bold color with precise shaping and finish.',
    price: '60',
    image: 'https://images.unsplash.com/photo-1525973454080-7f0f1d1b8eca?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Scalp Treatment',
    description: 'Revitalizing scalp massage and cleansing.',
    price: '30',
    image: 'https://images.unsplash.com/photo-1499951360447-b190f3a4d4d0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Beard Trim',
    description: 'Neat beard shaping and grooming.',
    price: '20',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <Layout>
      <section aria-label="Services" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">Our Services</h1>
        <p className="text-slate-600 mb-6">List of services with brief explanations and pricing.</p>
        <div className="md:grid md:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <ServiceCard key={idx} title={s.title} description={s.description} price={s.price} image={s.image} />
          ))}
        </div>
      </section>
      <aside aria-label="Categories" className="hidden md:block md:col-span-1"></aside>
    </Layout>
  )
}
