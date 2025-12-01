import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <button aria-label="Open menu" className="md:hidden mr-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          <span className="text-xl font-semibold">Barbershop Online</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account/customer">My Account</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-3">
          <button aria-label="Notifications" className="relative p-2 rounded-full bg-slate-700 hover:bg-slate-600">
            <span>🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-slate-800 p-4">
          <nav className="flex flex-col space-y-2">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/account/customer" onClick={() => setMenuOpen(false)}>My Account</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
