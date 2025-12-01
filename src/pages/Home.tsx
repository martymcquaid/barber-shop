import Layout from '../components/Layout'
import Carousel from '../components/Carousel.tsx'

export default function Home() {
  const carouselImages = [
    'https://images.unsplash.com/photo-1555498068-7d7a3a3a5fbd?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521572267360-ee0c2f9a2b2a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520813792240-797c65a48f9f?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <Layout>
      <section className="grid md:grid-cols-2 gap-8 items-center py-12 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">Premium Grooming Online</h1>
          <p className="text-slate-100 mb-6">Scheduling, styling, and live support with a concierge feel—designed for a premium experience.</p>
          <div className="flex space-x-4">
            <button className="bg-brand-500 hover:bg-brand-600 text-white py-3 px-5 rounded-lg shadow">Get Started</button>
            <button className="bg-white/20 border border-white text-white py-3 px-5 rounded-lg">Learn More</button>
          </div>
        </div>
        <div className="p-6 hidden md:block">
          <img src="https://images.unsplash.com/photo-1524502083-dc5a60f91a5f?q=80&w=1200&auto=format&fit=crop" alt="Premium barber" className="w-full rounded-lg shadow" />
        </div>
      </section>

      <section className="py-8">
        <Carousel images={carouselImages} />
      </section>

      <section id="about" className="py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">About Barbershop Online</h2>
          <p className="text-slate-700">We blend traditional barber craft with modern online services to offer flexible scheduling, personalized styling, and a welcoming experience.</p>
        </div>
      </section>
    </Layout>
  )
}
