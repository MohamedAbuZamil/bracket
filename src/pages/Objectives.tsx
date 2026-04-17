import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Target,
  CheckCircle2,
  Gauge,
  Award,
  Globe2,
  Users,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Clock,
  Gem,
  Brain,
  Languages,
  Cpu,
  Lock,
  DollarSign,
  ChevronDown,
} from 'lucide-react';

const objectives = [
  {
    icon: Award,
    title: 'High Quality Products & Services',
    description: 'Providing products / services with a high quality that are satisfying the requirements, needs and expectations of the customers.',
  },
  {
    icon: ShieldCheck,
    title: 'Standards & Compliance',
    description: 'Applying the specifications and legalizations to ensure the quality of products.',
  },
  {
    icon: Gauge,
    title: 'Resource Optimization',
    description: 'Best utilization of resources for continually improving the business activities.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    description: 'Establishing a long term and open relationships with our customers.',
  },
  {
    icon: Users,
    title: 'Teamwork & Delivery',
    description: 'Institution of team work concept to ensure pre-service quality and on time delivery.',
  },
  {
    icon: GraduationCap,
    title: 'Staff Development',
    description: 'Providing staff training for development of skills.',
  },
  {
    icon: Target,
    title: 'Measurable Objectives',
    description: 'Bracket has derived quality objectives, measurable and consistent with this policy which will be reviewed continually to ensure their suitability and effectiveness.',
  },
  {
    icon: Globe2,
    title: 'Organization-Wide Policy',
    description: 'The quality policy shall be communicated and understood by all employees within the organization.',
  },
];

const qualityMetrics = [
  { icon: Clock, label: 'Speed' },
  { icon: Gem, label: 'Quality' },
  { icon: Brain, label: 'Expertise' },
  { icon: Languages, label: 'Language Capabilities' },
  { icon: Cpu, label: 'Technical Capabilities' },
  { icon: ShieldCheck, label: 'Reliability' },
  { icon: Lock, label: 'Security' },
  { icon: DollarSign, label: 'Price' },
];

export default function Objectives() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const objRef = useRef(null);
  const objInView = useInView(objRef, { once: true, margin: '-80px' });

  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: '-80px' });

  const policyRef = useRef(null);
  const policyInView = useInView(policyRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero Section ─── */}
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

        <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 bg-white/10 text-white/90 backdrop-blur-sm border border-white/15">
              <CheckCircle2 size={14} />
              Our Commitment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Our
            <br />
            <span className="text-gradient">Objectives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Driving continuous improvement through measurable quality objectives and unwavering commitment to excellence.
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

      {/* ─── Objectives Grid ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={objRef}
            initial={{ opacity: 0, y: 30 }}
            animate={objInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Quality Policy
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 px-4" style={{ color: 'var(--text-primary)' }}>
              What We <span className="text-gradient">Strive For</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg px-4" style={{ color: 'var(--text-secondary)' }}>
              Our objectives are built on a foundation of quality, continuous improvement, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {objectives.map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 40 }}
                animate={objInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="group card rounded-2xl p-6 relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Step number */}
                <span
                  className="absolute top-4 right-5 text-4xl font-black select-none leading-none transition-colors duration-500"
                  style={{ color: 'var(--border)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <obj.icon size={22} style={{ color: 'var(--petrol)' }} />
                </div>

                <h3 className="text-sm sm:text-base font-bold mb-2 pr-8" style={{ color: 'var(--text-primary)' }}>
                  {obj.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {obj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Image Divider with Quote ─── */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80)' }}
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
              Continually improving to ensure{' '}
              <span className="text-gradient">suitability & effectiveness</span>
            </p>
            <div className="w-12 h-1 rounded-full mx-auto mt-6" style={{ background: 'var(--petrol)' }} />
          </motion.div>
        </div>
      </section>

      {/* ─── Quality Metrics Section ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={metricsRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={metricsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80"
                  alt="Quality assurance in engineering"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl border-2 -z-10" style={{ borderColor: 'var(--border)' }} />
            </motion.div>

            {/* Right - Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={metricsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
              >
                What Sets Us Apart
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Our Quality <span className="text-gradient">Metrics</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                We measure our success across key performance indicators that define excellence in the industrial sector.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {qualityMetrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    className="group card rounded-xl px-4 py-3 flex items-center gap-3 cursor-default"
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'var(--accent-soft)' }}
                    >
                      <metric.icon size={16} style={{ color: 'var(--petrol)' }} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {metric.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Policy Statement ─── */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={policyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={policyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Our Promise
            </span>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={policyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="card rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-petrol to-transparent" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--accent-soft)' }}>
                  <ShieldCheck size={30} style={{ color: 'var(--petrol)' }} />
                </div>

                <h3 className="text-xl sm:text-2xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                  Quality Policy <span className="text-gradient">Commitment</span>
                </h3>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Bracket has derived quality objectives, measurable and consistent with this policy which will be reviewed continually to ensure their suitability and effectiveness.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  The quality policy shall be communicated and understood by all employees within the organization.
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={policyInView ? { width: '80px' } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="h-1 rounded-full mx-auto mt-8"
                  style={{ background: 'var(--petrol)' }}
                />
              </div>
            </motion.div>
          </motion.div>
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
              Experience Our <span className="text-gradient">Commitment</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              See how our objectives translate into real results for your industrial projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl btn-petrol text-sm sm:text-base"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
              <Link
                to="/mission-statement"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                Mission Statement
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
