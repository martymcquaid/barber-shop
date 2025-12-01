import Layout from '../components/Layout'

export default function MyAccountStaff(){
  return (
    <Layout>
      <section aria-label="Staff Account" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">My Account</h1>
        <p className="text-slate-600 mb-4">Dashboard for staff: schedule, clients, and billing.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">Appointments</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Billing</div>
        </div>
      </section>
    </Layout>
  )
}
