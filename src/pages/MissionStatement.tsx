import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Target,
  Shield,
  Award,
  Globe,
  Users,
  Lightbulb,
  ChevronDown,
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Highest Quality',
    description: 'Committed to delivering the highest quality product possible for all industrial sectors.',
  },
  {
    icon: Globe,
    title: 'Worldwide Reach',
    description: 'Serving projects across the Middle East region and worldwide with excellence.',
  },
  {
    icon: Lightbulb,
    title: 'Technical Knowledge',
    description: 'Proud of our high level of technical knowledge that drives innovative solutions.',
  },
  {
    icon: Shield,
    title: 'Industry Leadership',
    description: 'State of the art fabrication facilities placing us in a position of leadership.',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Ensuring satisfaction in all areas including timeliness, attention to detail and service.',
  },
  {
    icon: Award,
    title: 'Production Proficiency',
    description: 'Our production proficiency sets the standard for the fabrication industry.',
  },
];

export default function MissionStatement() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });

  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero Section ─── */}
      <section ref={heroRef} className="relative h-[85vh] sm:h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Back button */}
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

        {/* Hero Content */}
        <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 bg-white/10 text-white/90 backdrop-blur-sm border border-white/15">
              <Target size={14} />
              Our Purpose
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Mission
            <br />
            <span className="text-gradient">Statement</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Driving industrial excellence through commitment, innovation, and unwavering quality standards since 2002.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
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

      {/* ─── Main Statement Section ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* Decorative side elements */}
        <div className="absolute left-0 top-1/4 w-1 h-40 rounded-full" style={{ background: 'var(--petrol)', opacity: 0.15 }} />
        <div className="absolute right-0 top-1/2 w-1 h-32 rounded-full" style={{ background: 'var(--petrol)', opacity: 0.1 }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={storyRef} className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Left - Large statement text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={storyInView ? { width: '60px' } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 rounded-full mb-6"
                  style={{ background: 'var(--petrol)' }}
                />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-snug mb-8" style={{ color: 'var(--text-primary)' }}>
                  Committed to Providing the{' '}
                  <span className="text-gradient">Highest Quality</span>{' '}
                  Product Possible
                </h2>
              </div>

              <div className="space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Bracket for Manufacturing Engineering and Contracting, through our employees, will continue to be committed to provide the highest quality product possible for all Industrial sectors Projects in the Middle East region and Worldwide.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55, duration: 0.7 }}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  We are proud from our high level of technical knowledge, our state of the art fabrication facilities and our production proficiency which have placed us in a position of leadership in the fabrication industry.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="relative rounded-2xl p-6 mt-8"
                  style={{ background: 'var(--accent-soft)', borderLeft: '4px solid var(--petrol)' }}
                >
                  <p className="text-sm sm:text-base font-medium italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    "We promise to ensure customer satisfaction in all areas including timeliness, attention to detail and service-minded attitudes."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Image composition */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-2 relative"
            >
              <div className="relative">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
                    alt="Engineering excellence"
                    className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>

                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute -bottom-6 -left-4 sm:-left-8 rounded-xl p-4 sm:p-5 shadow-xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                      <Award size={20} style={{ color: 'var(--petrol)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Since</p>
                      <p className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>2002</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative border */}
                <div className="absolute -inset-3 rounded-2xl border-2 -z-10" style={{ borderColor: 'var(--border)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values Grid ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-18"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              What Drives Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="group card rounded-2xl p-6 relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <v.icon size={22} style={{ color: 'var(--petrol)' }} />
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Full-width Image Divider ─── */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            ref={quoteRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug">
              A position of{' '}
              <span className="text-gradient">leadership</span>{' '}
              in the fabrication industry
            </p>
            <div className="w-12 h-1 rounded-full mx-auto mt-6" style={{ background: 'var(--petrol)' }} />
          </motion.div>
        </div>
      </section>

      {/* ─── CTA back to home ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-3xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Build <span className="text-gradient">Together?</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss how Bracket can deliver excellence for your next industrial project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl btn-petrol text-sm sm:text-base"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
              <a
                href="mailto:info@bracket-egy.com"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
