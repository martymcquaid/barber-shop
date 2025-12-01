import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: any = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!email.includes('@')) errs.email = 'Please enter a valid email';
    if (!message.trim()) errs.message = 'Please enter a message';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Message sent');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    }
  }

  return (
    <Layout>
      <section aria-label="Contact" className="py-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg mb-6 p-6">
        <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
        <p className="text-slate-100 mb-2">Questions, quotes, or bookings? We’re here to help.</p>
      </section>
      <section aria-label="Contact" className="py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Our Location</h3>
            <p>123 Barber Street, Hairville</p>
          </div>
          <form className="space-y-4" aria-label="Contact Form" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} className="w-full border rounded px-3 py-2" />
              {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="w-full border rounded px-3 py-2" />
              {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
            </div>
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input value={subject} onChange={e=>setSubject(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea value={message} onChange={e=>setMessage(e.target.value)} className="w-full border rounded px-3 py-2" rows={4}></textarea>
              {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
            </div>
            <button type="submit" className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700">Send Message</button>
          </form>
        </div>
        <div className="mt-6 flex gap-4">
          <a href="https://twitter.com" className="text-slate-200 hover:text-white">Twitter</a>
          <a href="https://facebook.com" className="text-slate-200 hover:text-white">Facebook</a>
          <a href="https://instagram.com" className="text-slate-200 hover:text-white">Instagram</a>
        </div>
      </section>
    </Layout>
  )
}
