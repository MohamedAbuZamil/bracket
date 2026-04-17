import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Anchor,
  Ship,
  Waves,
  Wrench,
  ChevronDown,
  CheckCircle2,
  Pipette,
  Eye,
  HardHat,
  Compass,
  Hammer,
  Zap,
  Paintbrush,
  Settings,
} from 'lucide-react';

const offshoreCapabilities = [
  'Pipeline Inspections',
  'General and Close Visual Inspection',
  'Diving Support Operations',
  'Geotechnical Soil Survey',
  'General Survey & Pipeline Survey',
  'Rig Moves & Drill Support',
  'Rubber Fender, Raiser Guard & Mounted Anodes',
  'Navigation Aids & Concrete Mattresses',
  'Pipeline Free-Spans Correction & Grouting',
];

const fabricationServices = [
  { icon: Hammer, label: 'Topside Structure Fabrication' },
  { icon: Pipette, label: 'Topside Piping Spools Fabrication, Testing & Installation' },
  { icon: Settings, label: 'Subsea Manifolds Fabrication' },
  { icon: Anchor, label: 'Structure Legs, Cans, Special Joints & Bridges' },
  { icon: Wrench, label: 'Riser Pipe, Riser Guards, J-Tube & Padeyes' },
  { icon: Zap, label: 'E&I, Coating and Insulation Contracting' },
  { icon: Compass, label: 'Mooring Buoys Fabrication' },
  { icon: Paintbrush, label: 'Subsea Maintenance & Corrosion Monitoring' },
];

const shipRepairServices = [
  { icon: Hammer, title: 'Structural Steel & Pipe', description: 'Structural steel and pipe fabrication for all vessel types.' },
  { icon: Settings, title: 'Pressure Vessels & Tanks', description: 'Alloy pressure vessels, bins, tanks and specialized containers.' },
  { icon: Zap, title: 'Electrical Systems', description: 'Electrical troubleshooting, diesel engine installation and mechanical equipment.' },
  { icon: Wrench, title: 'Pumps & Instrumentation', description: 'Pumps, valves, instrumentation and full mechanical overhaul.' },
];

export default function OffshoreMarine() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const offshoreRef = useRef(null);
  const offshoreInView = useInView(offshoreRef, { once: true, margin: '-80px' });

  const fabRef = useRef(null);
  const fabInView = useInView(fabRef, { once: true, margin: '-80px' });

  const shipRef = useRef(null);
  const shipInView = useInView(shipRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[75vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=2000&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Animated wave lines */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[1] overflow-hidden pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                bottom: `${i * 8 + 4}px`,
                background: 'linear-gradient(90deg, transparent, rgba(13,115,119,0.3), transparent)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/80 hover:text-white text-sm font-medium transition-all duration-300"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 bg-white/10 text-white/90 backdrop-blur-sm border border-white/15">
              <Anchor size={14} />
              Marine Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Offshore
            <br />
            <span className="text-gradient">& Marine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Engineering, steel fabrication and construction for oil & gas and mining companies — from the seabed to the topside.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-white/40"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Discover</span>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={introRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80"
                  alt="Offshore oil platform"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={introInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 rounded-xl p-4 shadow-xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                    <Ship size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Full Service</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>Marine Ops</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -inset-3 rounded-2xl border-2 -z-10" style={{ borderColor: 'var(--border)' }} />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={introInView ? { width: '60px' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 rounded-full mb-6"
                style={{ background: 'var(--petrol)' }}
              />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 leading-snug" style={{ color: 'var(--text-primary)' }}>
                From Ship Repair to{' '}
                <span className="text-gradient">Offshore Platforms</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket started in the ship repair and offshore services business, expanding its operations in engineering, steel fabrication and construction for various industrial oil & gas companies and mining companies in Egypt.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="rounded-2xl p-6"
                style={{ background: 'var(--accent-soft)', borderLeft: '4px solid var(--petrol)' }}
              >
                <p className="text-sm sm:text-base font-medium italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  "Wherever your work — at land or on the sea — you will be ready to take the quality with our experienced staff safely."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Offshore Section ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={offshoreRef}
            initial={{ opacity: 0, y: 30 }}
            animate={offshoreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              <Waves size={14} />
              Offshore Operations
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Subsea & Platform <span className="text-gradient">Expertise</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              Our experienced team manages the full range of offshore operations — from pipeline inspections to platform fabrication.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Capabilities list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={offshoreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Eye size={18} style={{ color: 'var(--petrol)' }} />
                Inspection & Survey
              </h3>
              <div className="space-y-3">
                {offshoreCapabilities.map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ opacity: 0, x: -20 }}
                    animate={offshoreInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 size={16} style={{ color: 'var(--petrol)' }} />
                    </div>
                    <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-200" style={{ color: 'var(--text-secondary)' }}>
                      {cap}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={offshoreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80"
                alt="Offshore platform operations"
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
                  style={{ background: 'rgba(13,115,119,0.8)', backdropFilter: 'blur(8px)' }}
                >
                  <HardHat size={14} />
                  Experienced Offshore Team
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Fabrication & Installation ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={fabRef}
            initial={{ opacity: 0, y: 30 }}
            animate={fabInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              <Hammer size={14} />
              Fabrication & Installation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Platform <span className="text-gradient">Fabrication</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              Fabrication and installation for manifolds, legs, cans, bridges, boat-landing, and piping at our fabrication yard facility in Egypt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {fabricationServices.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 30 }}
                animate={fabInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="group card rounded-2xl p-5 relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <svc.icon size={18} style={{ color: 'var(--petrol)' }} />
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {svc.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Parallax Divider ─── */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827291-bce4a5e25b68?auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug">
              Renowned for{' '}
              <span className="text-gradient">efficiency & versatility</span>{' '}
              on land and at sea
            </p>
            <div className="w-12 h-1 rounded-full mx-auto mt-6" style={{ background: 'var(--petrol)' }} />
          </motion.div>
        </div>
      </section>

      {/* ─── Ship Repair Section ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={shipRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={shipInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
              >
                <Ship size={14} />
                Ship Repair
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-5 leading-snug" style={{ color: 'var(--text-primary)' }}>
                Full-Line <span className="text-gradient">Ship Repair</span> Services
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={shipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-sm sm:text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket offers a full line of ship repair services, in port or offshore, including structural steel and pipe fabrication, alloy pressure vessels, bins, tanks and electrical troubleshooting, and installs diesel engines and other mechanical equipment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={shipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                We provide skilled craftsmen and technicians from all aspects of the marine industry including shipwrights, metal fabricators, engineers, and electricians — using the best materials available, we give you the ship to be proud of.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shipRepairServices.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={shipInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="card rounded-xl p-4 flex items-start gap-3"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-soft)' }}
                    >
                      <svc.icon size={16} style={{ color: 'var(--petrol)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>{svc.title}</p>
                      <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>{svc.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={shipInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80"
                  alt="Ship repair and maintenance"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={shipInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 rounded-xl p-4 shadow-xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                    <Wrench size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>On Time</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>On Budget</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -inset-3 rounded-2xl border-2 -z-10" style={{ borderColor: 'var(--border)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-3xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Set <span className="text-gradient">Sail?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From offshore platforms to ship repair — let Bracket handle your marine engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl btn-petrol text-sm sm:text-base"
              >
                Get a Quote
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
