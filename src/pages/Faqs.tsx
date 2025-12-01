import Layout from '../components/Layout'

export default function FAQs() {
  const faqs = [
    { q: 'How long does a haircut take?', a: 'Typically 30–45 minutes depending on style.' },
    { q: 'Where are services located?', a: 'We operate in a single shop with flexible booking.' },
    { q: 'What styles are available?', a: 'Classic, modern, and custom grooming options.' },
  ]
  return (
    <Layout>
      <section aria-label="FAQs" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">Frequently Asked Questions</h1>
        <p className="text-slate-600 mb-6">Answers to common questions about our barbershop services.</p>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-semibold">{f.q}</div>
              <div className="text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
