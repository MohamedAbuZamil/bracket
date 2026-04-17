import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Flame, Wrench, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Partner {
  name: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  url: string;
}

const partners: Partner[] = [
  {
    name: 'Matrix',
    subtitle: 'Engineering & Management',
    description: 'Strategic engineering and project management consultancy serving major industrial clients.',
    icon: Building2,
    url: '#',
  },
  {
    name: 'MFP',
    subtitle: 'Middle East Fire Protection',
    description: 'Specialized fire protection systems for industrial, commercial, and residential applications.',
    icon: Flame,
    url: '#',
  },
  {
    name: 'Plant Maint',
    subtitle: 'Repair & Maintenance',
    description: 'Comprehensive plant maintenance, repair services, and operational support solutions.',
    icon: Wrench,
    url: 'http://plantmaint-eg.com/',
  },
];

function PartnerCard({ partner, index, inView }: { partner: Partner; index: number; inView: boolean }) {
  return (
    <motion.a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      className="group card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
      whileHover={{ y: -6 }}
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'var(--accent-soft)' }}
        >
          <partner.icon size={22} style={{ color: 'var(--petrol)' }} />
        </div>
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{ color: 'var(--text-muted)' }} />
      </div>

      <h3 className="text-xl sm:text-2xl font-black mb-1 tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {partner.name}
      </h3>
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--petrol)' }}>
        {partner.subtitle}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {partner.description}
      </p>
    </motion.a>
  );
}

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
            style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
          >
            Bracket Groups
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 px-4" style={{ color: 'var(--text-primary)' }}>
            Our <span className="text-gradient">Group Companies</span>
          </h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base px-4" style={{ color: 'var(--text-secondary)' }}>
            A network of specialized companies delivering comprehensive industrial solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
