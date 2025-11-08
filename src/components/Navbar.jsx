import { Link, NavLink } from 'react-router-dom';
import { IceCream, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-sky-500 shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
            <IceCream className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-wide">Frost & Bloom</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white/80 hover:text-white transition ${isActive ? 'text-white' : ''}`
            }
          >
            Home
          </NavLink>
          <a href="#about" className="text-white/80 hover:text-white transition">
            About
          </a>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-white/80 hover:text-white transition ${isActive ? 'text-white' : ''}`
            }
          >
            Menu
          </NavLink>
        </div>

        <Link
          to="/signin"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Sign In</span>
        </Link>
      </nav>
    </header>
  );
}
