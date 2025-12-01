import Layout from '../components/Layout'

export default function MyAccountCustomer(){
  return (
    <Layout>
      <section aria-label="My Account" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">My Account</h1>
        <p className="text-slate-600 mb-4">Dashboard showing your orders, payments, and profile.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Orders</h3>
            <p className="text-sm text-slate-600">No recent orders.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Payments</h3>
            <p className="text-sm text-slate-600">Payment status will appear here.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
