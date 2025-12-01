import Layout from '../components/Layout'


const posts = [
  { title: '5 Tips for Healthy Hair', description: 'Simple routines to keep hair strong and shiny.', image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd89?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Choosing the Right Shampoo', description: 'What to look for based on your hair type.', image: 'https://images.unsplash.com/photo-1523419407402-1a8510a4c39c?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Summer Grooming Essentials', description: 'Stay fresh and stylish in hot weather.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop' },
]

export default function Blog() {
  return (
    <Layout>
      <section aria-label="Blog" className="py-8">
        <h1 className="text-3xl font-semibold mb-2">Latest Posts</h1>
        <p className="text-slate-600 mb-6">Hair care and grooming tips, trends, and tutorials.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
