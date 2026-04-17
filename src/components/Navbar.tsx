import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

interface NavChild {
  name: string;
  href: string;
  isRoute?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  isRoute?: boolean;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { name: 'Home', href: '#home' },
  {
    name: 'About',
    href: '#about',
    children: [
      { name: 'Mission Statement', href: '/mission-statement', isRoute: true },
      { name: 'Objectives', href: '/objectives', isRoute: true },
    ],
  },
  {
    name: 'Services',
    href: '#services',
    children: [
      { name: 'Fabrication & Construction', href: '/fabrication-construction', isRoute: true },
      { name: 'Offshore & Marine', href: '/offshore-marine', isRoute: true },
      { name: 'Fire Fighting', href: '/fire-fighting', isRoute: true },
      { name: 'Cranes', href: '/cranes', isRoute: true },
      { name: 'Mechanical', href: '/mechanical', isRoute: true },
      { name: 'Special Jobs', href: '/special-jobs', isRoute: true },
      { name: 'Civil', href: '/civil', isRoute: true },
      { name: 'Electrical & Instrumentation', href: '/electrical-instrumentation', isRoute: true },
      { name: 'Coating & Insulation', href: '/coating-insulation', isRoute: true },
      { name: 'Commissioning', href: '/commissioning', isRoute: true },
    ],
  },
  {
    name: 'Operations',
    href: '#operations',
    children: [
      { name: 'HSSE', href: '/hsse', isRoute: true },
      { name: 'Quality Assurance & Control', href: '/quality-assurance', isRoute: true },
    ],
  },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '/contact-us', isRoute: true },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => { if (timeout.current) clearTimeout(timeout.current); setOpen(true); }}
      onMouseLeave={() => { timeout.current = setTimeout(() => setOpen(false), 200); }}
    >
      <button
        className="relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors duration-300 uppercase tracking-wider"
        style={{ color: 'var(--text-secondary)' }}
      >
        {item.name}
        <ChevronDown size={12} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ background: 'var(--petrol)' }}
          initial={false}
          animate={{ width: open ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
        />
      </button>
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 py-2 rounded-2xl overflow-hidden"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}
          >
            {item.children.map((child, i) =>
              child.isRoute ? (
                <motion.div
                  key={child.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.025 }}
                >
                  <Link
                    to={child.href}
                    className="block px-5 py-2.5 text-sm transition-all duration-200 hover:pl-7"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {child.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={child.name}
                  href={child.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.025 }}
                  className="block px-5 py-2.5 text-sm transition-all duration-200 hover:pl-7"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {child.name}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <motion.a href="#home" className="flex items-center gap-2.5 group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <img src={logo} alt="Bracket Logo" className="h-16 sm:h-20 w-auto object-contain drop-shadow-lg" />
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown key={link.name} item={link} />
                ) : link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative px-3 py-2 text-[13px] font-medium transition-colors duration-300 uppercase tracking-wider group"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full group-hover:w-full transition-all duration-300" style={{ background: 'var(--petrol)' }} />
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 text-[13px] font-medium transition-colors duration-300 uppercase tracking-wider group"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full group-hover:w-full transition-all duration-300" style={{ background: 'var(--petrol)' }} />
                  </a>
                )
              )}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="ml-2 w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon size={16} />
                    </motion.div>
                  ) : (
                    <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.div
                className="ml-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact-us"
                  className="flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-xl btn-petrol uppercase tracking-wider relative overflow-hidden group"
                >
                  <Phone size={14} />
                  Get a Quote
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </motion.button>
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl"
                style={{ background: 'var(--accent-soft)', color: 'var(--text-primary)' }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-80 overflow-y-auto pt-20"
              style={{ background: 'var(--bg)', borderLeft: '1px solid var(--border)' }}
            >
              <div className="px-6 py-8 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setExpandedMobile(expandedMobile === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {link.name}
                          <motion.div animate={{ rotate: expandedMobile === link.name ? 180 : 0 }}>
                            <ChevronDown size={16} style={{ color: 'var(--petrol)' }} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedMobile === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-1 ml-4" style={{ borderLeft: '2px solid var(--petrol)', opacity: 0.4 }}>
                                {link.children.map((child) =>
                                  child.isRoute ? (
                                    <Link
                                      key={child.name}
                                      to={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-4 py-2.5 text-sm"
                                      style={{ color: 'var(--text-secondary)' }}
                                    >
                                      {child.name}
                                    </Link>
                                  ) : (
                                    <a
                                      key={child.name}
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-4 py-2.5 text-sm"
                                      style={{ color: 'var(--text-secondary)' }}
                                    >
                                      {child.name}
                                    </a>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 rounded-xl text-base font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 rounded-xl text-base font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/contact-us"
                    onClick={() => setMobileOpen(false)}
                    className="block mt-4 px-4 py-3.5 text-center rounded-xl btn-petrol"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
