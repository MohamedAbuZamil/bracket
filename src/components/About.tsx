import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ClipboardList,
  Cog,
  ShoppingCart,
  Factory,
  Building2,
  CheckCircle2,
  Paintbrush,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Capability {
  icon: LucideIcon;
  label: string;
  step: number;
}

const capabilities: Capability[] = [
  { icon: ClipboardList, label: 'Project Management', step: 1 },
  { icon: Cog, label: 'Engineering', step: 2 },
  { icon: ShoppingCart, label: 'Procurement', step: 3 },
  { icon: Factory, label: 'Fabrication', step: 4 },
  { icon: Paintbrush, label: 'Coating & Insulation', step: 5 },
  { icon: Building2, label: 'Construction', step: 6 },
  { icon: CheckCircle2, label: 'Commissioning', step: 7 },
];

function CapabilityFlow({ inView }: { inView: boolean }) {
  return (
    <div className="mt-12 sm:mt-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 text-center"
        style={{ color: 'var(--petrol)' }}
      >
        End-to-End Delivery
      </motion.p>

      {/* Desktop/Tablet: horizontal flow - centered, responsive spacing */}
      <div className="hidden sm:flex items-center justify-center flex-wrap gap-y-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              className="group relative flex flex-col items-center cursor-default"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {/* Step number */}
              <motion.span
                className="text-[10px] font-bold mb-1.5 tabular-nums"
                style={{ color: 'var(--petrol)' }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 500 }}
              >
                {String(cap.step).padStart(2, '0')}
              </motion.span>

              {/* Icon */}
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
                style={{ background: 'var(--accent-soft)' }}
              >
                <cap.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--petrol)' }} />
              </div>

              {/* Label */}
              <span
                className="mt-1.5 text-[9px] sm:text-[10px] lg:text-xs font-medium text-center max-w-[70px] sm:max-w-[80px] leading-tight"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cap.label}
              </span>
            </motion.div>

            {/* Connector */}
            {i < capabilities.length - 1 && (
              <motion.div
                className="mx-1 sm:mx-1.5 lg:mx-3 flex items-center"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                style={{ originX: 0 }}
              >
                <div className="w-4 sm:w-6 lg:w-10 h-px" style={{ background: 'var(--border-hover)' }} />
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: 'var(--petrol)', opacity: 0.5 }} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: 2-column grid instead of vertical timeline */}
      <div className="sm:hidden grid grid-cols-2 gap-3">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            className="card rounded-xl p-3 flex items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--accent-soft)' }}
            >
              <cap.icon size={16} style={{ color: 'var(--petrol)' }} />
            </div>
            <div>
              <span className="text-[9px] font-bold tabular-nums block" style={{ color: 'var(--petrol)' }}>
                {String(cap.step).padStart(2, '0')}
              </span>
              <p className="text-xs font-medium leading-tight" style={{ color: 'var(--text-primary)' }}>
                {cap.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Infinite scrolling marquee */
function Marquee() {
  const items = [...capabilities, ...capabilities];

  return (
    <div className="relative overflow-hidden py-8 sm:py-12" style={{ background: 'var(--bg-secondary)' }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((cap, i) => (
          <div
            key={`${cap.label}-${i}`}
            className="inline-flex items-center gap-2.5 mx-4 sm:mx-6 px-5 py-3 rounded-xl flex-shrink-0"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--accent-soft)' }}
            >
              <cap.icon size={16} style={{ color: 'var(--petrol)' }} />
            </div>
            <span className="text-sm font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
              {cap.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <section id="about" className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column: image + text */}
          <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial engineering"
                  className="w-full h-[240px] sm:h-[340px] lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-xl"
                  style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', border: '1px solid var(--glass-border)' }}
                >
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Since 2002</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-5"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
              >
                About Bracket
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Building the Future of
                <br />
                <span className="text-gradient">Industrial Engineering</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                Bracket is an electromechanical company registered in Egypt, established in{' '}
                <strong style={{ color: 'var(--text-primary)' }}>April 2002</strong>. We deliver world-class
                industrial solutions across multiple sectors.
              </p>

              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                We provide integrated services covering every phase of project
                delivery — ensuring quality, safety, and efficiency from inception
                to handover.
              </p>
            </motion.div>
          </div>

          {/* Capability Flow - full width below grid */}
          <CapabilityFlow inView={inView} />
        </div>
      </section>

      {/* Full-width scrolling marquee showcase */}
      <Marquee />
    </>
  );
}
