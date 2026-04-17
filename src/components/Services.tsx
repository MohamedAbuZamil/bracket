import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Anchor,
  Flame,
  HardHat,
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  CheckCircle2,
  ArrowUpFromLine,
  Briefcase,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Hammer, title: 'Fabrication & Construction', description: 'Piping, steel structure, plate work, and pressure vessel fabrication with full-scale construction.' },
  { icon: Anchor, title: 'Offshore & Marine', description: 'Comprehensive offshore platform services including installation, maintenance, and modification.' },
  { icon: Flame, title: 'Fire Fighting', description: 'Design, supply, and installation of advanced fire protection and suppression systems.' },
  { icon: ArrowUpFromLine, title: 'Cranes', description: 'Supply, installation, and maintenance of industrial crane systems for heavy lifting.' },
  { icon: Wrench, title: 'Mechanical', description: 'Precision mechanical installation, piping, HVAC, and rotating equipment services.' },
  { icon: Briefcase, title: 'Special Jobs', description: 'Specialized engineering solutions for unique industrial challenges and custom execution.' },
  { icon: HardHat, title: 'Civil', description: 'Civil works including foundations, concrete structures, roads, and infrastructure.' },
  { icon: Zap, title: 'Electrical & Instrumentation', description: 'Power distribution, instrumentation, control systems, and automation solutions.' },
  { icon: Paintbrush, title: 'Coating & Insulation', description: 'Industrial coating, painting, and insulation for corrosion protection and thermal management.' },
  { icon: CheckCircle2, title: 'Commissioning', description: 'Systematic commissioning and startup ensuring all systems operate to design specifications.' },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className="group card rounded-2xl p-6 sm:p-7 cursor-pointer relative overflow-hidden"
      whileHover={{ y: -6 }}
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Number watermark */}
      <span className="absolute top-4 right-5 text-5xl font-black select-none leading-none transition-colors duration-500"
        style={{ color: 'var(--border)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: 'var(--accent-soft)' }}
      >
        <service.icon size={22} style={{ color: 'var(--petrol)' }} />
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
            style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
          >
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 px-4" style={{ color: 'var(--text-primary)' }}>
            Comprehensive Industrial <span className="text-gradient">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-lg px-4" style={{ color: 'var(--text-secondary)' }}>
            From concept to commissioning — end-to-end engineering services
            tailored to the most demanding industrial environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
