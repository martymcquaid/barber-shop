import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-display font-semibold tracking-tight">Barbershop Online</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-semibold text-slate-800">
          <Link to="/" className="hover:text-brand-600">Home</Link>
          <Link to="/services" className="hover:text-brand-600">Services</Link>
          <Link to="/about" className="hover:text-brand-600">About</Link>
          <Link to="/blog" className="hover:text-brand-600">Blog</Link>
          <Link to="/faqs" className="hover:text-brand-600">FAQs</Link>
          <Link to="/contact" className="hover:text-brand-600">Contact</Link>
          <Link to="/account/customer" className="hover:text-brand-600">My Account</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg shadow">Book Now</Link>
        </div>
        <button aria-label="Open menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-slate-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-slate-900"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200">
          <nav className="flex flex-col p-4 space-y-2">
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
