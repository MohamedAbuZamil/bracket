import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Droplets,
  Cylinder,
  Zap,
  Flame,
  Wrench,
  Settings,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const specialtyServices = [
  {
    icon: Droplets,
    title: 'Leak Sealing',
    description: 'Bracket provides a wide range of sealing components and safe procedures, with technology that allows stopping various types of fluids\' leakages such as: Steam, Water, Hydrocarbons and by-products, and Acids and chemicals.',
    highlights: ['Steam & Water', 'Hydrocarbons & By-products', 'Acids & Chemicals'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Cylinder,
    title: 'Tank Cleaning',
    description: 'Bracket offers an array of services that can be utilized in every phase of a tank cleaning project, from initial assessment to final disposal. Although we specialize in large aboveground storage tanks, our team will guarantee you a clean, gas-free tank regardless of the size of the tank, the type of service, or the amount of remaining sludge.',
    highlights: ['Initial Assessment to Final Disposal', 'Large Aboveground Storage Tanks', 'Gas-Free Guarantee'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Zap,
    title: 'Live Line Insulator Washing',
    description: 'Bracket designed the LLIW (Live Line Insulator Washing) systems to meet system equipment requirements up to 500KV switchyard by arranging the spray rings in washing zones.',
    highlights: ['Up to 500KV Switchyard', 'Spray Ring Systems', 'Custom Washing Zones'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Flame,
    title: 'Hot Tapping',
    description: 'Bracket provides standard design off-the-shelf equipment to perform Hot Taps for a wide range of pipe diameters and Line Stops. A comprehensive range of optional fittings is available, including corporation cocks, ferrules, sample points and various types of valves.',
    highlights: ['Wide Range of Pipe Diameters', 'Line Stops', 'Corporation Cocks & Ferrules'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Wrench,
    title: 'Bolt Tensioning / Torque',
    description: 'Bracket provides a wide range of hydraulic torque wrenches to cover wide range of stud sizes as well as heavy hex size sockets & low clearance link tools. We offer stud tensioning equipment in all sizes and ultrasonic stress measuring for critical flange documentation. We can supply hands-on labor & equipment, or technical support to assist your craft in using the equipment.',
    highlights: ['Hydraulic Torque Wrenches', 'Ultrasonic Stress Measuring', 'All Stud Sizes'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Settings,
    title: 'Flange Management',
    description: 'Bracket applies the Flange Management System to installations through applying procedures, recordings and qualifications that make it possible to raise the quality of flange joints. Bracket understands different manners for assembling flange joints to gain the correct pressure on each point of the gasket.',
    highlights: ['Flange Management System', 'Quality Assurance Procedures', 'Correct Gasket Pressure'],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80',
  },
];

const serviceLabels = [
  { icon: Droplets, label: 'Leak Sealing' },
  { icon: Cylinder, label: 'Tank Cleaning' },
  { icon: Zap, label: 'Live Line Insulator Washing' },
  { icon: Flame, label: 'Hot Tapping' },
  { icon: Wrench, label: 'Bolt Tensioning / Torque' },
  { icon: Settings, label: 'Flange Management' },
];

export default function SpecialJobs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const detailRef = useRef(null);
  const detailInView = useInView(detailRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[75vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=2000&q=80)' }}
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
              <Sparkles size={14} />
              Specialty Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Special
            <br />
            <span className="text-gradient">Jobs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            A global array of specialty industrial services including repair and maintenance services unmatched in this industry.
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

      {/* ─── Services Overview ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Specialty <span className="text-gradient">Industrial Services</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              Bracket provides a global array of specialty industrial services including repair and maintenance that is unmatched in this industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {serviceLabels.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="group card rounded-xl p-4 sm:p-5 flex items-center gap-3 cursor-default"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <svc.icon size={18} style={{ color: 'var(--petrol)' }} />
                </div>
                <span className="text-xs sm:text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {svc.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Detailed Services - Alternating ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={detailRef}
            initial={{ opacity: 0, y: 30 }}
            animate={detailInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              In Detail
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black px-4" style={{ color: 'var(--text-primary)' }}>
              Service <span className="text-gradient">Breakdown</span>
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {specialtyServices.map((svc, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                  {/* Image */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Step badge */}
                      <div
                        className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                        style={{ background: 'var(--petrol)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'var(--accent-soft)' }}
                    >
                      <svc.icon size={22} style={{ color: 'var(--petrol)' }} />
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
                      {svc.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                      {svc.description}
                    </p>

                    <div className="space-y-2">
                      {svc.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2.5">
                          <CheckCircle2 size={14} style={{ color: 'var(--petrol)' }} className="flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Parallax Divider ─── */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80)' }}
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
              Specialty solutions{' '}
              <span className="text-gradient">unmatched</span>{' '}
              in the industry
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
              Need a <span className="text-gradient">Special Job?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From leak sealing to flange management — we handle the toughest industrial challenges.
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
