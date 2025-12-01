export default function ServiceCard({ title, description, price, image }: { title: string; description: string; price: string; image: string; }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="font-semibold text-xl">${price}</div>
      </div>
    </div>
  );
 }

