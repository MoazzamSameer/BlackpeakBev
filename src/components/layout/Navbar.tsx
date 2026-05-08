import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, ShoppingBag } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Range', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Stockists', path: '/find' },
    { name: 'Find Us', path: '/find' },
  ];

  return (
    <>
      <nav className="hidden md:flex justify-between items-center px-margin-edge h-20 w-full fixed top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/10 transition-opacity duration-300">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter uppercase">
          BLACKPEAK
        </Link>
        <div className="flex gap-gutter items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            // To match the exact design active states which differ slightly per page, 
            // we apply specific active border bottoms.
            return (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "font-body-md text-body-md uppercase tracking-widest font-medium transition-colors duration-500",
                  isActive
                    ? "text-primary font-bold border-b border-primary pb-1"
                    : "text-on-surface/70 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface hover:text-primary transition-colors duration-500">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <button className="text-on-surface hover:text-primary transition-colors duration-500">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden flex justify-between items-center px-6 h-20 w-full fixed top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/10">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">
          BLACKPEAK
        </Link>
        <button className="text-on-surface">
          <Menu size={24} />
        </button>
      </header>
    </>
  );
}
