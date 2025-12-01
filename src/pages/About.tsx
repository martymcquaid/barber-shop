import Layout from '../components/Layout'


export default function About() {
  const team = [
    { name: 'Alex Carter', role: 'Founder / Master Barber', bio: 'Over 15 years crafting classic and modern looks.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Jamie Lin', role: 'Senior Barber', bio: 'Specializes in precision fades and styling.', image: 'https://images.unsplash.com/photo-1494790108377-be9f14058e36?q=80&w=1200&auto=format&fit=crop' },
  ]

  const milestones = [
    'Established in 2010',
    'Moved to online platform 2020',
    'Expanded to 3 stylist locations 2023',
  ]

  return (
    <Layout>
      <section aria-label="Introduction" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">About Barbershop Online</h1>
        <p className="text-slate-700">We blend traditional barber craft with modern online services to offer flexible scheduling, personalized styling, and a welcoming experience.</p>
      </section>
      <section aria-label="Team" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((t, idx) => (
            <div key={idx} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-600">{t.role}</div>
                <p className="text-sm text-gray-500 mt-1">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section aria-label="History" className="py-8">
        <h2 className="text-2xl font-semibold mb-2">History & Milestones</h2>
        <ul className="list-disc ml-6 space-y-2">
          {milestones.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </section>
      <section aria-label="Vision" className="py-8 mb-12">
        <h2 className="text-2xl font-semibold mb-2">Vision & Goals</h2>
        <p className="text-slate-700">To deliver exceptional grooming experiences with accessible online tools and a community-driven service model.</p>
      </section>
    </Layout>
  )
}
