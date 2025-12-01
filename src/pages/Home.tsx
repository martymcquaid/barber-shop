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
      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Barbershop Online</h1>
          <p className="text-slate-700 mb-4">Convenient scheduling, customizable styles, and live chat support — all in one place.</p>
          <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded">Book a Visit</button>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200&auto=format&fit=crop" alt="Barber at work" className="w-full rounded-lg shadow" />
        </div>
      </section>

      <section className="py-8">
        <Carousel images={carouselImages} />
      </section>

      <section id="about" className="py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">About Barbershop Online</h2>
          <p className="text-slate-600">We bring the traditional barbershop experience online with easy scheduling, tailored styles, and real-time support.</p>
        </div>
      </section>
    </Layout>
  )
}
