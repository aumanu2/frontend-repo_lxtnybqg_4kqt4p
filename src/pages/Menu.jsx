import { Link } from 'react-router-dom';
import { iceCreams } from '../data/icecreams';

export default function MenuPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-white">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Menu</h2>
        <p className="text-white/70 mt-2">Pick your favorite flavor. We have something for every mood.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {iceCreams.map((item) => (
          <Link
            key={item.id}
            to={`/menu/${item.slug}`}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-400/40 hover:bg-white/10 transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-white/70 line-clamp-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
