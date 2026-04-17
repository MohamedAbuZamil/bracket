import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Flame,
  Droplets,
  Wind,
  Cloudy,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Zap,
  Gauge,
  Snowflake,
  Timer,
  CloudRain,
} from 'lucide-react';

const systemTypes = [
  { icon: Cloudy, label: 'Powder Extinguishing Systems' },
  { icon: Droplets, label: 'Foam Extinguishing Systems' },
  { icon: Wind, label: 'Gas Extinguishing Systems' },
  { icon: Droplets, label: 'Water Extinguishing Systems' },
  { icon: CloudRain, label: 'Wet-Pipe Systems' },
  { icon: Snowflake, label: 'Anti-freeze Systems' },
  { icon: Gauge, label: 'Dry-Pipe Systems' },
  { icon: Timer, label: 'Pre-action Systems' },
  { icon: Zap, label: 'Deluge Systems' },
];

const detailedSystems = [
  {
    icon: Droplets,
    title: 'Water Extinguishing Systems',
    classification: 'Class A Fires',
    description: 'Water is mainly used for fighting fire classification A fires (glowing substances). The extinguishing effect of water is mainly based on its heat binding capability. The cooling effect of water disturbs the prerequisites of a thermal reaction and hinders further processing of inflammable substances, so that the formation of inflammable gases and vapors is interrupted. Thus, water extinguishes by cooling.',
    example: 'Deluge System — a high pressure type system consisting of spray cages with high velocity nozzles, pneumatic actuator system, deluge valve sets and water pressure tank.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Cloudy,
    title: 'Foam Extinguishing Systems',
    classification: 'Class A & B Fires',
    description: 'Extinguishing foam is a highly effective mixture of water, foaming agent and air. The air foam utilizes different extinguishing effects: cooling, suffocating, separating, covering, restraining and displacing — each one alone or together with others they provide a quick extinguishing success.',
    example: 'Film forming foam compounds (AFFF) achieve high extinguishing efficiency with the combination of cooling effect of water and a thin sliding film on burning liquid, protecting the combustion area from further oxygen supply.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Wind,
    title: 'Gas Extinguishing Systems',
    classification: 'Suffocation Effect',
    description: 'The extinguishing effect of argon, nitrogen and carbon dioxide is achieved by displacing atmospheric oxygen. This is called the suffocation effect, which occurs if the value necessary for combustion falls below the specific limit value.',
    example: 'Ideal for enclosed spaces where water or foam would cause damage to sensitive equipment such as server rooms, control panels and electrical installations.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Flame,
    title: 'Powder Extinguishing Systems',
    classification: 'Multi-Class Fires',
    description: 'Extinguishing powders are highly effective and fast extinguishants. The sudden extinguishing effect of the powder cloud is caused by the suffocation effect and the autocatalytic effect — a chemical intervention into the combustion process.',
    example: 'The formation of melting layers on glowing incendiary matters prevents the diffusion of atmospheric oxygen. Re-inflammations are not possible. Powders mainly consist of non-poisonous inorganic salts mixed with waterproofing and pouring agents.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
];

export default function FireFighting() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const systemsRef = useRef(null);
  const systemsInView = useInView(systemsRef, { once: true, margin: '-80px' });

  const detailRef = useRef(null);
  const detailInView = useInView(detailRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[75vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Animated ember particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${15 + i * 18}%`,
                bottom: '20%',
                background: 'rgba(255,120,50,0.6)',
                boxShadow: '0 0 6px rgba(255,120,50,0.4)',
              }}
              animate={{
                y: [0, -200, -400],
                x: [0, (i % 2 === 0 ? 30 : -30), 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.3],
              }}
              transition={{ duration: 4 + i, delay: i * 0.8, repeat: Infinity, ease: 'easeOut' }}
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
              <Flame size={14} />
              Fire Protection
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Fire
            <br />
            <span className="text-gradient">Fighting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Complete fire protection systems — design, supply, installation, inspection, service, testing and repair.
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Fire protection system installation"
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
                    <ShieldCheck size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Certified</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>Fire Safety</p>
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
                Complete Fire{' '}
                <span className="text-gradient">Protection</span> Solutions
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                We inspect, service, test and repair all manufacturers and classifications of fire extinguishers and are also equipped to meet your entire exit and egress lighting needs.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Our team is capable of working with different fire extinguisher systems across all fire classifications.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Systems We Handle ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={systemsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={systemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Systems We <span className="text-gradient">Handle</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {systemTypes.map((sys, i) => (
              <motion.div
                key={sys.label}
                initial={{ opacity: 0, y: 20 }}
                animate={systemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="group card rounded-xl p-4 sm:p-5 flex items-center gap-3 cursor-default"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <sys.icon size={18} style={{ color: 'var(--petrol)' }} />
                </div>
                <span className="text-xs sm:text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {sys.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Detailed Systems - Alternating ─── */}
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
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 px-4" style={{ color: 'var(--text-primary)' }}>
              How Each System <span className="text-gradient">Works</span>
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {detailedSystems.map((sys, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={sys.title}
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
                        src={sys.image}
                        alt={sys.title}
                        className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Classification badge */}
                      <div
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                        style={{ background: 'var(--petrol)' }}
                      >
                        {sys.classification}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'var(--accent-soft)' }}
                    >
                      <sys.icon size={22} style={{ color: 'var(--petrol)' }} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
                      {sys.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {sys.description}
                    </p>

                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'var(--accent-soft)', borderLeft: '3px solid var(--petrol)' }}
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--petrol)' }} />
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                          {sys.example}
                        </p>
                      </div>
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
              Protecting lives and assets with{' '}
              <span className="text-gradient">advanced fire systems</span>
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
              Need Fire <span className="text-gradient">Protection?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From design to installation — we deliver complete fire suppression solutions for any industrial environment.
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
