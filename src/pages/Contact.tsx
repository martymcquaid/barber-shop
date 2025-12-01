import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      <section aria-label="Contact" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
        <p className="text-slate-600 mb-4">Phone: (555) 123-4567 | Email: hello@barbershop.example</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Our Location</h3>
            <p>123 Barber Street, Hairville</p>
          </div>
          <form className="space-y-4" aria-label="Contact Form" onSubmit={(e)=>e.preventDefault()}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full border rounded px-3 py-2" rows={4}></textarea>
            </div>
            <button className="bg-slate-800 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </div>
        <div className="mt-6">
          <a href="https://twitter.com" className="mr-4">Twitter</a>
          <a href="https://facebook.com" className="mr-4">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </section>
    </Layout>
  )
}
