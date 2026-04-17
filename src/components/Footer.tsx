import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Mission Statement', href: '#about' },
    { name: 'Objectives', href: '#about' },
    { name: 'Profile', href: '#projects' },
  ],
  services: [
    { name: 'Fabrication & Construction', href: '#services' },
    { name: 'Offshore & Marine', href: '#services' },
    { name: 'Fire Fighting', href: '#services' },
    { name: 'Mechanical', href: '#services' },
    { name: 'Electrical & Instrumentation', href: '#services' },
    { name: 'Coating & Insulation', href: '#services' },
  ],
};

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/bracket.company',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/Bracket_Company',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC-srbRciONzV8H0FCXEzyhw',
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z',
  },
  {
    label: 'LinkedIn',
    href: 'http://www.linkedin.com/profile/view?id=349904643',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-1"
          >
            <a href="#home" className="flex items-center gap-2.5 mb-4 group">
              <img src={logo} alt="Bracket Logo" className="h-14 sm:h-16 w-auto object-contain" />
            </a>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              An electromechanical company registered in Egypt, established in
              April 2002 delivering world-class industrial solutions.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'var(--accent-soft)', color: 'var(--text-muted)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5" style={{ color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <span className="w-0 group-hover:w-2 h-px transition-all duration-300" style={{ background: 'var(--petrol)' }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5" style={{ color: 'var(--text-primary)' }}>
              Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <span className="w-0 group-hover:w-2 h-px transition-all duration-300" style={{ background: 'var(--petrol)' }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5" style={{ color: 'var(--text-primary)' }}>
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="group flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'var(--accent-soft)' }}>
                    <MapPin size={14} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <span className="text-xs sm:text-sm mt-1.5" style={{ color: 'var(--text-secondary)' }}>Alexandria, Egypt</span>
                </a>
              </li>
              <li>
                <a href="tel:+201001459563" className="group flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'var(--accent-soft)' }}>
                    <Phone size={14} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <span className="text-xs sm:text-sm mt-1.5" style={{ color: 'var(--text-secondary)' }}>+20 10 01459563</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bracket-egy.com" className="group flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'var(--accent-soft)' }}>
                    <Mail size={14} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <span className="text-xs sm:text-sm mt-1.5" style={{ color: 'var(--text-secondary)' }}>info@bracket-egy.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[11px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Bracket. All Rights Reserved.
          </p>
          <motion.a
            href="#home"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs transition-colors group"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            whileHover={{ y: -2 }}
          >
            Back to Top
            <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Developer Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 pt-4 flex flex-col items-center gap-2"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            Developed by{' '}
            <a
              href="mailto:abozamil4204251@gmail.com"
              className="font-bold transition-colors duration-300"
              style={{ color: 'var(--petrol)' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Mohamed Abu Zamil
            </a>
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="mailto:abozamil4204251@gmail.com"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] transition-colors duration-300"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <Mail size={10} />
              abozamil4204251@gmail.com
            </a>
            <a
              href="tel:+2001036622885"
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px] transition-colors duration-300"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--petrol)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <Phone size={10} />
              01036622885
            </a>
            <span
              className="flex items-center gap-1.5 text-[10px] sm:text-[11px]"
              style={{ color: 'var(--text-muted)' }}
            >
              <MapPin size={10} />
              Alexandria, Egypt
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
