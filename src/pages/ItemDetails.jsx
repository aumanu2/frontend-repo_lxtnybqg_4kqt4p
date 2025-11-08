import { useParams, Link } from 'react-router-dom';
import { iceCreams } from '../data/icecreams';
import { Star } from 'lucide-react';

export default function ItemDetails() {
  const { slug } = useParams();
  const item = iceCreams.find((i) => i.slug === slug);

  if (!item) {
    return (
      <main className="max-w-4xl mx-auto px-4 pt-24 text-white">
        <p>Item not found.</p>
        <Link to="/menu" className="underline text-pink-300">Back to menu</Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-white grid md:grid-cols-2 gap-10 items-start">
      <div className="rounded-3xl overflow-hidden ring-1 ring-white/20">
        <img src={item.image} alt={item.name} className="w-full h-[460px] object-cover" />
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold">{item.name}</h1>
        <p className="mt-3 text-white/80">{item.description}</p>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-1 text-yellow-300">
            <Star className="w-5 h-5 fill-yellow-300" />
            <span className="font-semibold">{item.rating}</span>
          </div>
          <span className="text-white/60">•</span>
          <span className="text-white/90 font-semibold">${item.price.toFixed(2)}</span>
        </div>

        <button className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:opacity-90 transition">
          Buy Now
        </button>

        <div className="mt-6">
          <Link to="/menu" className="text-white/70 hover:text-white underline">Back to Menu</Link>
        </div>
      </div>
    </main>
  );
}
