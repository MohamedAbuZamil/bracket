import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  MessageSquare,
  Target,
  Microscope,
  BadgeCheck,
  ShieldCheck,
  Globe,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

const qcPillars = [
  {
    icon: Globe,
    title: 'International Standards',
    description: 'All services comply with international quality standards and project specifications.',
  },
  {
    icon: ClipboardCheck,
    title: 'QC Department',
    description: 'A dedicated QC Department plays a crucial role in achieving our quality commitment.',
  },
  {
    icon: GraduationCap,
    title: 'Coaching & Training',
    description: 'Continuous staff development through structured coaching and training programs.',
  },
  {
    icon: MessageSquare,
    title: 'Monthly Reviews',
    description: 'Sharing concerns relating to work on projects in monthly meetings attended by all QC staff.',
  },
];

const standards = [
  { icon: FileCheck2, label: 'ISO 9001', description: 'Quality Management System' },
  { icon: ShieldCheck, label: 'ISO 14001', description: 'Environmental Management' },
  { icon: BadgeCheck, label: 'OHSAS 18001', description: 'Occupational Health & Safety' },
  { icon: Award, label: 'ASME', description: 'Pressure Vessel Standards' },
  { icon: Microscope, label: 'NDT', description: 'Non-Destructive Testing' },
  { icon: Target, label: 'AWS', description: 'Welding Standards' },
];

const processes = [
  {
    step: '01',
    title: 'Planning & Documentation',
    description: 'Developing comprehensive Inspection and Test Plans (ITP) aligned with project specifications and international codes.',
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: 'In-Process Inspection',
    description: 'Continuous monitoring and verification during fabrication and construction to ensure compliance at every stage.',
    icon: Microscope,
  },
  {
    step: '03',
    title: 'Testing & Verification',
    description: 'Rigorous testing including NDT, hydrostatic, pneumatic, and functional tests to validate quality requirements.',
    icon: FileCheck2,
  },
  {
    step: '04',
    title: 'Final Certification',
    description: 'Complete documentation packages and final inspection reports ensuring full traceability and project handover readiness.',
    icon: BadgeCheck,
  },
];

export default function QualityAssurance() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-80px' });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-80px' });

  const standardsRef = useRef(null);
  const standardsInView = useInView(standardsRef, { once: true, margin: '-80px' });

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
              <Award size={14} />
              Excellence in Quality
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            Quality Assurance
            <br />
            <span className="text-gradient">& Control</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Committed to delivering services that comply with international quality standards and project specifications.
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
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Quality inspection in fabrication"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={introInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 rounded-xl p-4 shadow-xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                    <Award size={24} style={{ color: 'var(--petrol)' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--petrol)' }}>Certified</p>
                    <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>QA/QC</p>
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
                Delivering <span className="text-gradient">Quality</span> at Every Stage
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary)' }}
              >
                Bracket is committed to delivering services to its customers that comply with international quality standards and project specifications. The QC Department plays a crucial role helping to achieve this commitment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                The QC Department also develops its staff through coaching and training programs, and by sharing concerns relating to work on projects in monthly meetings attended by all QC staff.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="rounded-2xl p-6"
                style={{ background: 'var(--accent-soft)', borderLeft: '4px solid var(--petrol)' }}
              >
                <p className="text-sm sm:text-base font-medium italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  "Quality is not an act, it is a habit — embedded in every process, every project, every person at Bracket."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Four Pillars ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={pillarsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              QA/QC <span className="text-gradient">Framework</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {qcPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group card rounded-2xl p-6 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <pillar.icon size={22} style={{ color: 'var(--petrol)' }} />
                </div>

                <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QC Process Steps ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Our Process
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 px-4" style={{ color: 'var(--text-primary)' }}>
              Quality Control <span className="text-gradient">Workflow</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg px-4" style={{ color: 'var(--text-secondary)' }}>
              A systematic approach ensuring quality at every phase of project execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {processes.map((proc, i) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="group card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Step number watermark */}
                <span
                  className="absolute top-4 right-5 text-6xl sm:text-7xl font-black select-none leading-none"
                  style={{ color: 'var(--border)' }}
                >
                  {proc.step}
                </span>

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--accent-soft)' }}
                  >
                    <proc.icon size={22} style={{ color: 'var(--petrol)' }} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
                    {proc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {proc.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4" style={{ color: 'var(--petrol)' }}>
                    <CheckCircle2 size={14} />
                    <span className="text-xs font-semibold">Verified & documented</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Standards & Certifications ─── */}
      <section className="relative py-20 sm:py-28" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={standardsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={standardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              Certifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Standards We <span className="text-gradient">Follow</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {standards.map((std, i) => (
              <motion.div
                key={std.label}
                initial={{ opacity: 0, y: 20 }}
                animate={standardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="group card rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent-soft)' }}
                >
                  <std.icon size={24} style={{ color: 'var(--petrol)' }} />
                </div>
                <h4 className="text-base sm:text-lg font-black mb-1" style={{ color: 'var(--text-primary)' }}>
                  {std.label}
                </h4>
                <p className="text-[11px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
                  {std.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Image Divider ─── */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=2000&q=80)' }}
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
              Quality is built into every{' '}
              <span className="text-gradient">weld, bolt & connection</span>
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
              Quality You Can <span className="text-gradient">Trust</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Partner with a company where quality assurance is woven into every step of the process.
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
                to="/hsse"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                HSSE Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
