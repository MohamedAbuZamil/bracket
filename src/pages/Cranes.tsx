import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpFromLine,
  ChevronDown,
  CheckCircle2,
  Layers,
  Move,
  RotateCcw,
  ShieldAlert,
  Grip,
  CircleDot,
} from 'lucide-react';

const craneTypes = [
  {
    icon: Layers,
    title: 'Overhead Cranes',
    subtitle: 'Single & Double Girder',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    sections: [
      {
        name: 'Single Girder',
        text: 'Single Girder Cranes have a single bridge beam supported by two end trucks that operate on parallel runways. For special applications the crane system may be provided with multiple end trucks and runways.',
      },
      {
        name: 'Double Girder',
        text: 'Double Girder Crane Systems may be provided with the same options as our Single Girder Cranes, including multiple end trucks and runways. It offers the ability to position the hoist much higher for better high hook elevation, and may span greater distances than a comparable single girder crane.',
      },
    ],
  },
  {
    icon: Move,
    title: 'Monorail Cranes',
    subtitle: 'Custom Engineered Solutions',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    sections: [
      {
        name: 'Custom Layouts',
        text: 'Bracket can provide the right combination that can be as simple as a traveling hoist on a straight monorail, or as complex as a custom engineered group of switches, curves, trolleys, drives, carriers and interlocking cranes to meet your exact layout requirements.',
      },
    ],
  },
  {
    icon: RotateCcw,
    title: 'Jib Cranes',
    subtitle: 'Column & Wall Mounted',
    image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=600&q=80',
    sections: [
      {
        name: 'Versatile Configurations',
        text: 'Jib Cranes are manually or electrically rotated, available in column or wall mounted versions. Types include top braced wall mounted, top braced free standing, under braced wall mounted and under braced free standing. These jib cranes are utilized as stand-alone structures or in conjunction with other jibs and monorails. Jib cranes can be sturdy enough to lift a ton or more of weight, or small enough to attach to a truck.',
      },
    ],
  },
  {
    icon: Grip,
    title: 'Gantry Cranes',
    subtitle: 'Outdoor Materials Handling',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=600&q=80',
    sections: [
      {
        name: 'Heavy-Duty Outdoor',
        text: 'Gantry cranes are designed for outdoor materials handling applications. Produced with or without a cantilever, our cantilevers provide the necessary support to carry materials loaded at the extreme end of the crane girder and along the runway length. Comprising two legged A-frames, the gantry is available in both single and double girders.',
      },
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Explosion Proof Cranes',
    subtitle: 'Zone 1 & Zone 2 Hazardous Areas',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
    sections: [
      {
        name: 'Hazardous Environment',
        text: 'We provide the complete explosion proof crane package including specialist explosion proof cranes, explosion proof ships cranes, jib cranes, spark resistant manual cranes, spark resistant manual hoists and specialist explosion proof materials handling equipment for zone 1 & zone 2 hazardous areas worldwide.',
      },
    ],
  },
];

const hoistTypes = [
  { label: 'Manual Chain Hoists / Trolley' },
  { label: 'Air Chain Hoists / Trolley' },
  { label: 'Electric Chain Hoists / Trolley' },
  { label: 'Electric Wire Rope Hoists / Trolley' },
];

export default function CranesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const hoistRef = useRef(null);
  const hoistInView = useInView(hoistRef, { once: true, margin: '-80px' });

  const typesRef = useRef(null);
  const typesInView = useInView(typesRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[75vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=80)' }}
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
              <ArrowUpFromLine size={14} />
              Heavy Lifting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Cranes &
            <br />
            <span className="text-gradient">Hoists</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Design, engineering, fabrication and installation of cranes with a wide range of capacities for every industrial need.
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial crane operations"
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
                    <ArrowUpFromLine size={20} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Industry</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>Leaders</p>
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
                Leaders in Crane{' '}
                <span className="text-gradient">Engineering</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket is one of the leaders in design, engineering, fabrication and installation of cranes with a wide range of capacities. We specialize in developing unique projects for overhead cranes, jib cranes, gantry cranes, workstation cranes and hoists.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="rounded-2xl p-6"
                style={{ background: 'var(--accent-soft)', borderLeft: '4px solid var(--petrol)' }}
              >
                <p className="text-sm sm:text-base font-medium italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  "Known in the industry for world class products, a driven sales focus and outstanding customer services that are unmatched in today's market."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Hoists Section ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={hoistRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={hoistInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
              >
                <CircleDot size={14} />
                Hoists
              </span>

              <h2 className="text-2xl sm:text-3xl font-black mb-5 leading-snug" style={{ color: 'var(--text-primary)' }}>
                All Types of <span className="text-gradient">Hoists</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={hoistInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket has the ability to deliver, erect and maintain all kinds of hoists. We are committed to do whatever it takes to satisfy our customers' needs.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hoistTypes.map((hoist, i) => (
                  <motion.div
                    key={hoist.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={hoistInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="card rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--petrol)' }} className="flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {hoist.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={hoistInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Industrial hoist system"
                className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Crane Types - Alternating ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={typesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Crane Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 px-4" style={{ color: 'var(--text-primary)' }}>
              Our Crane <span className="text-gradient">Range</span>
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {craneTypes.map((crane, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={crane.title}
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
                        src={crane.image}
                        alt={crane.title}
                        className="w-full h-[220px] sm:h-[280px] lg:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      <div
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                        style={{ background: 'var(--petrol)' }}
                      >
                        {crane.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'var(--accent-soft)' }}
                    >
                      <crane.icon size={22} style={{ color: 'var(--petrol)' }} />
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                      {crane.title}
                    </h3>

                    <div className="space-y-4">
                      {crane.sections.map((sec) => (
                        <div key={sec.name}>
                          <h4 className="text-sm font-bold mb-1.5 flex items-center gap-2" style={{ color: 'var(--petrol)' }}>
                            <CheckCircle2 size={14} />
                            {sec.name}
                          </h4>
                          <p className="text-sm leading-relaxed pl-6" style={{ color: 'var(--text-secondary)' }}>
                            {sec.text}
                          </p>
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
              World class products with{' '}
              <span className="text-gradient">outstanding service</span>
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
              Need a Crane <span className="text-gradient">Solution?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From overhead cranes to explosion proof systems — we engineer the right lifting solution for your operation.
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
