import Layout from '../components/Layout'
import { useState } from 'react'

export default function LoginCustomer(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const strength = password.length > 8 ? 'strong' : password.length > 4 ? 'medium' : 'weak'
  return (
    <Layout>
      <section aria-label="Customer Login" className="py-8 max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Login / Sign Up</h1>
        <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="h-3 bg-gray-200 rounded">
            <div style={{width: strength==='strong' ? '100%' : strength==='medium' ? '60%' : '25%'}} className="h-full bg-green-500"></div>
          </div>
          <button className="bg-slate-800 text-white px-4 py-2 rounded">Submit</button>
        </form>
        <p className="text-sm text-slate-600 mt-2"><a href="#">Forgot password?</a></p>
      </section>
    </Layout>
  )
}
