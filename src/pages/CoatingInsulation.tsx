import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Paintbrush,
  ChevronDown,
  CheckCircle2,
  Shield,
  Flame,
  Thermometer,
  Snowflake,
  Layers,
  Factory,
  Droplets,
  Anchor,
} from 'lucide-react';

const insulationMaterials = [
  'Rockwool',
  'Calcium Silicate',
  'Ceramic Fiber',
  'Cellular Glass',
  'Fiber Glass',
  'Elastomeric Rubber',
  'Polyurethane',
];

const jacketingMaterials = [
  'Aluminum',
  'Alloy Metal',
  'Stainless Steel',
];

const applications = [
  { icon: Flame, label: 'Fire Rated Insulation for Bulkheads / Deck Heads on Jack Up Rigs' },
  { icon: Factory, label: 'Engine Exhaust Pipes for Oil Rigs' },
  { icon: Thermometer, label: 'Chemical Reactors, Boilers and Associated Pipes' },
  { icon: Factory, label: 'Refineries, Petrochemical Plants, Power & Desalination Plants' },
  { icon: Anchor, label: 'Oil & Gas Upstream — Offshore and Onshore Applications' },
  { icon: Anchor, label: 'Mooring Buoy' },
  { icon: Snowflake, label: 'Liquefied Natural Gas Tanks, Associated Pipes & Vessels' },
  { icon: Droplets, label: 'Storage Tanks and Reactors' },
];

const refractoryTypes = [
  'Hot Resistance',
  'Acid Resistance',
  'Abrasion Resistance',
  'Fire Resistance',
  'Fire Bricks',
  'New Installation & Repair',
];

export default function CoatingInsulation() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const appRef = useRef(null);
  const appInView = useInView(appRef, { once: true, margin: '-80px' });

  const blastRef = useRef(null);
  const blastInView = useInView(blastRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[75vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80)' }}
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
              <Paintbrush size={14} />
              Protection & Insulation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Coating &
            <br />
            <span className="text-gradient">Insulation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Professional insulation, refractory and coating services for industrial and commercial applications.
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

      {/* ─── Introduction & Materials ─── */}
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
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial coating and insulation"
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
                    <Shield size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Certified</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>Materials</p>
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
                Professional <span className="text-gradient">Insulation</span> Services
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket is a professional contractor for all types of insulation projects for industrial and commercial sectors. We provide all kinds of refractory services and specialize in applying all types of insulation material for hot or cold/cryogenic insulation using certified material.
              </motion.p>

              {/* Materials row */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--petrol)' }}>Insulation Materials</h4>
                <div className="flex flex-wrap gap-2">
                  {insulationMaterials.map((mat, i) => (
                    <motion.span
                      key={mat}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={introInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
                    >
                      {mat}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--petrol)' }}>Jacketing Materials</h4>
                <div className="flex flex-wrap gap-2">
                  {jacketingMaterials.map((mat, i) => (
                    <motion.span
                      key={mat}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={introInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                    >
                      {mat}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Applications ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={appRef}
            initial={{ opacity: 0, y: 30 }}
            animate={appInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              <Layers size={14} />
              Applications
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Insulation & Cladding <span className="text-gradient">Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              We execute insulation and cladding projects for a wide range of temperatures across these applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {applications.map((app, i) => (
              <motion.div
                key={app.label}
                initial={{ opacity: 0, y: 30 }}
                animate={appInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="group card rounded-2xl p-5 relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <app.icon size={20} style={{ color: 'var(--petrol)' }} />
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {app.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Refractory & Blasting ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={blastRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Refractory */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={blastInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
              >
                <Flame size={14} />
                Refractory Services
              </span>

              <h2 className="text-2xl sm:text-3xl font-black mb-5 leading-snug" style={{ color: 'var(--text-primary)' }}>
                Refractory & <span className="text-gradient">Coating</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={blastInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                We provide all kind of refractory — high quality new installation and repair services:
              </motion.p>

              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {refractoryTypes.map((type, i) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, x: -15 }}
                    animate={blastInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} style={{ color: 'var(--petrol)' }} className="flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{type}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={blastInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="rounded-2xl p-6"
                style={{ background: 'var(--accent-soft)', borderLeft: '4px solid var(--petrol)' }}
              >
                <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--petrol)' }}>Blasting & Painting</h4>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  Bracket can blast and paint small and large jobs including aerospace, commercial, and home items. We work with our customers to specify the best blasting and coating system for the application and environment with extensive experience at fair and competitive prices.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={blastInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial coating and painting"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
                    style={{ background: 'rgba(13,115,119,0.8)', backdropFilter: 'blur(8px)' }}
                  >
                    <Paintbrush size={14} />
                    High Quality Finishes
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={blastInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 rounded-xl p-4 shadow-xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                    <Thermometer size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Hot & Cold</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>Insulation</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -inset-3 rounded-2xl border-2 -z-10" style={{ borderColor: 'var(--border)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Parallax Divider ─── */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)' }}
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
              Timeliness, attention to detail and{' '}
              <span className="text-gradient">service-minded attitudes</span>
            </p>
            <div className="w-12 h-1 rounded-full mx-auto mt-6" style={{ background: 'var(--petrol)' }} />
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
              Need Coating or <span className="text-gradient">Insulation?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From refractory to cryogenic insulation — we protect your assets with certified materials and expert application.
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
