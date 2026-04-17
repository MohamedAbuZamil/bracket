import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Wrench,
  ChevronDown,
  CheckCircle2,
  Settings,
  Cog,
  Gauge,
  Vibrate,
  Component,
  Fan,
  Thermometer,
  RotateCcw,
} from 'lucide-react';

const capabilities = [
  'Equipment Installation & Fixation',
  'Leveling & Alignment',
  'Commissioning & Start-up',
  'Single Machinery to Turnkey Facility',
  'Light to Heavy Equipment Handling',
  'Vendor Proposal & Document Review',
];

const rotatingEquipment = [
  { icon: Fan, label: 'Pumps & Compressors' },
  { icon: RotateCcw, label: 'Blowers & Turbines' },
  { icon: Cog, label: 'Electric Motors' },
  { icon: Fan, label: 'Centrifugal Fans' },
  { icon: Thermometer, label: 'Chillers & Cooling Towers' },
  { icon: Component, label: 'Heat Exchangers' },
  { icon: Gauge, label: 'Pressure Vessels' },
  { icon: Settings, label: 'Gear Units & Couplings' },
  { icon: Vibrate, label: 'Vibration & Rotor Dynamics' },
  { icon: Cog, label: 'Seals, Packing & Filters' },
];

const basebenefits = [
  'Reduce vibration amplitude',
  'Provide attachment of vibration isolators',
  'Prevent differential movement between driving and driven members',
  'Reduce rocking by lowering equipment center of gravity',
  'Reduce motion during start-up and shut-down',
  'Reduce reaction movement due to operating loads',
  'Act as a partial noise barrier',
];

export default function MechanicalPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const equipRef = useRef(null);
  const equipInView = useInView(equipRef, { once: true, margin: '-80px' });

  const baseRef = useRef(null);
  const baseInView = useInView(baseRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[75vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

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
              <Wrench size={14} />
              Precision Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Mechanical
            <br />
            <span className="text-gradient">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Equipment installation, fixation, leveling, alignment, commissioning and start-up — from a single piece to turnkey facilities.
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
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80"
                  alt="Mechanical equipment installation"
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
                    <Settings size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Full</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>Turnkey</p>
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
                Precision <span className="text-gradient">Mechanical</span> Installation
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket expands its mechanical work to equipment installation, fixation, leveling, alignment, commissioning, start-up and more. We can install a single piece of machinery or provide turnkey services for an entire facility.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                We work with different types of equipment across industrial sectors, capable of handling pieces from a few grams to hundreds of kilos through suitable procedures.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ opacity: 0, x: -15 }}
                    animate={introInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.06 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} style={{ color: 'var(--petrol)' }} className="flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Equipment Types ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={equipRef}
            initial={{ opacity: 0, y: 30 }}
            animate={equipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Equipment Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Fixed & <span className="text-gradient">Rotating Equipment</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              Experience in evaluation, vendor proposal review, and hands-on installation of all types of industrial equipment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Equipment grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {rotatingEquipment.map((eq, i) => (
                <motion.div
                  key={eq.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={equipInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="group card rounded-xl p-4 flex items-center gap-3 cursor-default"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--accent-soft)' }}
                  >
                    <eq.icon size={16} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {eq.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={equipInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                  alt="Rotating equipment"
                  className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
                    style={{ background: 'rgba(13,115,119,0.8)', backdropFilter: 'blur(8px)' }}
                  >
                    <RotateCcw size={14} />
                    Rotating & Fixed Equipment
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Equipment Bases ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={baseRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={baseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Equipment base installation"
                className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={baseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-1"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
              >
                <Vibrate size={14} />
                Equipment Bases
              </span>

              <h2 className="text-2xl sm:text-3xl font-black mb-5 leading-snug" style={{ color: 'var(--text-primary)' }}>
                Engineered <span className="text-gradient">Foundations</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={baseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket uses bases to support mechanical equipment with precision engineering for optimal performance and longevity:
              </motion.p>

              <div className="space-y-2.5">
                {basebenefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -15 }}
                    animate={baseInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--petrol)' }} />
                    <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-200" style={{ color: 'var(--text-secondary)' }}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Quote Divider ─── */}
      <section className="relative py-16 sm:py-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-petrol to-transparent" />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'var(--accent-soft)' }}>
              <Wrench size={26} style={{ color: 'var(--petrol)' }} />
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-medium italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              "Bracket has a unique integration of technical knowledge and strategic recommendation that makes a broad service parcel possible. We can always approach new questions which defy us to bring our knowledge and talent to the highest level."
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 rounded-full mx-auto mt-6"
              style={{ background: 'var(--petrol)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-3xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Need Mechanical <span className="text-gradient">Installation?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From a single piece of machinery to complete facility turnkey — we deliver precision mechanical services.
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
