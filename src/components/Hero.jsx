import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24">
      {/* Background gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute top-40 -left-20 h-96 w-96 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Scoop into Happiness
          </h1>
          <p className="mt-4 text-white/80 max-w-prose">
            Artisan ice creams crafted in small batches with colorful swirls, creamy textures, and flavors that sparkle.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:opacity-90 transition"
            >
              Explore Menu
            </Link>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition">
              About Us
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1200&auto=format&fit=crop"
            alt="Ice cream scoops"
            className="w-full h-[420px] object-cover rounded-3xl ring-1 ring-white/20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
