import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const easeOut4: [number, number, number, number] = [0.23, 1, 0.32, 1];

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
    title: 'Fabrication & Construction',
    description: 'Skilled operatives using International Standards for Oil & Gas, Petrochemical, Power and Water Treatment facilities.',
    link: '/fabrication-construction',
    accent: '#FF8C00',
  },
  {
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=2000&q=80',
    title: 'Offshore & Marine',
    description: 'Pipeline inspections, diving support, topside fabrication, subsea manifolds and full ship repair services.',
    link: '/offshore-marine',
    accent: '#0D9488',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80',
    title: 'Cranes & Hoists',
    description: 'Design, engineering, fabrication and installation of overhead, jib, gantry and explosion-proof cranes.',
    link: '/cranes',
    accent: '#FF8C00',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80',
    title: 'Fire Fighting Systems',
    description: 'Complete fire extinguisher systems — powder, foam, gas, water, deluge, pre-action and wet-pipe solutions.',
    link: '/fire-fighting',
    accent: '#DC2626',
  },
];

/* ── Safety Hardhat SVG ── */
function HardhatIcon({ size = 20, color = '#FF8C00' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C9.5 2 5 4.5 5 10V14C5 14 5 16 7 17L6 21H18L17 17C19 16 19 14 19 14V10C19 4.5 14.5 2 12 2Z" fill={color} />
      <rect x="3" y="10" width="18" height="3.5" rx="1.5" fill={color} />
      <rect x="4" y="12.5" width="16" height="1.5" rx="0.5" fill={color} opacity="0.6" />
      <path d="M12 2C12 2 10 5 10 8H14C14 5 12 2 12 2Z" fill="white" opacity="0.25" />
    </svg>
  );
}

/* ── Typewriter hook ── */
function useTypewriter(text: string, speed: number, startTyping: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    if (!startTyping) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayed, done };
}

/* ── Ember sparks that float upward ── */
function EmberParticles() {
  const embers = useMemo(
    () => Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 60 + Math.random() * 40,
      size: 1 + Math.random() * 4,
      dur: 5 + Math.random() * 10,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 80,
    })),
    []
  );
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.x}%`,
            bottom: `${100 - e.y}%`,
            width: e.size,
            height: e.size,
            background: `radial-gradient(circle, #FF8C00, #FF4500)`,
            boxShadow: `0 0 ${e.size * 4}px #FF8C0080, 0 0 ${e.size * 8}px #FF450040`,
          }}
          animate={{
            y: [0, -(150 + Math.random() * 250)],
            x: [0, e.drift],
            opacity: [0, 0.9, 0.7, 0],
            scale: [0.5, 1.2, 0.8, 0],
          }}
          transition={{
            duration: e.dur,
            repeat: Infinity,
            delay: e.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Animated blueprint grid ── */
function BlueprintGrid() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* Horizontal scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,140,0,0.15), transparent)' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      {/* Vertical scanning line */}
      <motion.div
        className="absolute top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255,140,0,0.1), transparent)' }}
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      {/* Corner brackets */}
      {(['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'] as const).map((pos, i) => (
        <motion.div
          key={pos}
          className={`absolute ${pos} w-8 h-8 sm:w-12 sm:h-12 pointer-events-none`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
        >
          <div
            className="w-full h-full"
            style={{
              borderColor: '#FF8C00',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderRadius: '2px',
              ...(i === 0 ? { borderRight: 'none', borderBottom: 'none' } :
                i === 1 ? { borderLeft: 'none', borderBottom: 'none' } :
                i === 2 ? { borderRight: 'none', borderTop: 'none' } :
                { borderLeft: 'none', borderTop: 'none' }),
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Glitch flash on transition ── */
function GlitchFlash({ trigger }: { trigger: number }) {
  return (
    <AnimatePresence>
      <motion.div
        key={`glitch-${trigger}`}
        className="absolute inset-0 z-[15] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.8, 0, 0.4, 0, 0.2, 0],
        }}
        transition={{ duration: 0.4, ease: 'linear' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(transparent 33%, rgba(255,140,0,0.05) 33%, rgba(255,140,0,0.05) 66%, transparent 66%)' }} />
        <motion.div
          className="absolute inset-0"
          animate={{ x: [0, -4, 3, -1, 0] }}
          transition={{ duration: 0.15 }}
          style={{ background: 'rgba(255,140,0,0.03)', mixBlendMode: 'screen' }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Cinematic letterbox bars ── */
function CinematicBars() {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 right-0 z-[4] pointer-events-none"
        style={{ background: 'black' }}
        initial={{ height: '100%' }}
        animate={{ height: '0%' }}
        transition={{ duration: 1.4, ease: easeOut4, delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[4] pointer-events-none"
        style={{ background: 'black' }}
        initial={{ height: '100%' }}
        animate={{ height: '0%' }}
        transition={{ duration: 1.4, ease: easeOut4, delay: 0.1 }}
      />
    </>
  );
}

/* ── Staggered letter component ── */
function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
          initial={{ opacity: 0, y: 40, rotateX: -90, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.03,
            ease: easeOut4,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ════════════════════════════════════════════════════ */
/*                   MAIN COMPONENT                   */
/* ════════════════════════════════════════════════════ */
export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [titleReady, setTitleReady] = useState(false);
  const [phase, setPhase] = useState<'title' | 'desc' | 'done'>('title');

  const slide = slides[current];

  const { displayed: descText } = useTypewriter(
    slide.description,
    25,
    phase === 'desc' || phase === 'done'
  );

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setTitleReady(false);
      setPhase('title');
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setTitleReady(false);
    setPhase('title');
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setTitleReady(false);
    setPhase('title');
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // Phase 1: Title split-text starts after image lands
  useEffect(() => {
    const t = setTimeout(() => { setTitleReady(true); }, 800);
    return () => clearTimeout(t);
  }, [current]);

  // Phase 2: Description typewriter starts after title animation
  useEffect(() => {
    if (!titleReady) return;
    const dur = slide.title.length * 30 + 600;
    const t = setTimeout(() => setPhase('desc'), dur);
    return () => clearTimeout(t);
  }, [titleReady, slide.title.length]);

  // Mark done
  useEffect(() => {
    if (phase === 'desc' && descText === slide.description) setPhase('done');
  }, [descText, slide.description, phase]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [next]);

  const imageVariants = {
    enter: (d: number) => ({
      clipPath: d > 0
        ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
        : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      scale: 1.2,
      filter: 'brightness(1.3) saturate(0)',
    }),
    center: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scale: 1,
      filter: 'brightness(1) saturate(1)',
      transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    },
    exit: (d: number) => ({
      clipPath: d > 0
        ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      scale: 1.1,
      filter: 'brightness(0.5) saturate(0)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    }),
  };

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden select-none" style={{ perspective: '1200px' }}>

      {/* Cinematic reveal bars (first mount) */}
      <CinematicBars />

      {/* Glitch flash on every transition */}
      <GlitchFlash trigger={current} />

      {/* Background images with clip-path + desaturation reveal */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Ken Burns with slight rotation */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.12], rotate: [0, 0.5] }}
            transition={{ duration: 9, ease: 'linear' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </motion.div>
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
          {/* Color tint */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            transition={{ duration: 2, delay: 1 }}
            style={{ background: slide.accent, mixBlendMode: 'color' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Ember sparks */}
      <EmberParticles />

      {/* Blueprint grid + scanning lines + corners */}
      <BlueprintGrid />

      {/* Animated accent lines */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`vline-${current}`}
          className="absolute z-[3] pointer-events-none"
          style={{ top: 0, right: '18%', width: '1px', height: '100%', transformOrigin: 'top' }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}30, transparent)` }} />
          {/* Glowing dot traveling down the line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{ background: slide.accent, boxShadow: `0 0 12px ${slide.accent}` }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Giant watermark number with 3D rotate */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`num-${current}`}
          className="absolute z-[3] right-6 sm:right-16 top-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
          style={{
            fontSize: 'clamp(140px, 22vw, 320px)',
            color: 'transparent',
            WebkitTextStroke: `2px rgba(255,140,0,0.06)`,
            lineHeight: 1,
          }}
          initial={{ opacity: 0, rotateY: -60, x: 100 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          exit={{ opacity: 0, rotateY: 60, x: -80 }}
          transition={{ duration: 1, ease: easeOut4 }}
        >
          {String(current + 1).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>

      {/* ═══ Content ═══ */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-14 sm:pb-20 lg:pb-24 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">

        {/* Service badge with rotating hardhat */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: easeOut4 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest"
              style={{ background: 'rgba(255,140,0,0.12)', color: '#FF8C00', border: '1px solid rgba(255,140,0,0.2)', backdropFilter: 'blur(16px)' }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <HardhatIcon size={14} color="#FF8C00" />
              </motion.span>
              Service {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Title — staggered 3D letter reveal */}
        <div className="mb-3 min-h-[2.5em] sm:min-h-[3.5em] lg:min-h-[4em]">
          <AnimatePresence mode="wait">
            {titleReady && (
              <motion.h2
                key={`title-${current}`}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
                exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                transition={{ duration: 0.3 }}
              >
                <SplitText text={slide.title} delay={0.1} />
                {phase === 'title' && (
                  <motion.span
                    className="inline-block ml-2 align-middle"
                    animate={{ opacity: [1, 0.15], y: [0, -2, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <HardhatIcon size={36} color="#FF8C00" />
                  </motion.span>
                )}
              </motion.h2>
            )}
          </AnimatePresence>

          {/* Underline with glow */}
          {(phase === 'desc' || phase === 'done') && (
            <motion.div className="relative mt-3" initial={{ width: 0 }} animate={{ width: '140px' }} transition={{ duration: 0.8, ease: easeOut4 }}>
              <div className="h-[3px] rounded-full w-full" style={{ background: `linear-gradient(90deg, ${slide.accent}, transparent)` }} />
              <div className="absolute inset-0 h-[3px] rounded-full blur-sm" style={{ background: `linear-gradient(90deg, ${slide.accent}80, transparent)` }} />
            </motion.div>
          )}
        </div>

        {/* Description with typewriter + bouncing hardhat cursor */}
        <div className="mb-6 min-h-[3.5em] sm:min-h-[3em] max-w-2xl">
          <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
            {descText}
            {phase === 'desc' && (
              <motion.span
                className="inline-block ml-1 align-middle"
                animate={{
                  opacity: [1, 0.15],
                  y: [0, -3, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
              >
                <HardhatIcon size={18} color="#FF8C00" />
              </motion.span>
            )}
          </p>
        </div>

        {/* CTA — blur-in with shine */}
        <AnimatePresence mode="wait">
          {(phase === 'desc' || phase === 'done') && (
            <motion.div
              key={`cta-${current}`}
              initial={{ opacity: 0, y: 25, scale: 0.9, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: easeOut4 }}
            >
              <Link
                to={slide.link}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-white overflow-hidden transition-all duration-500 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${slide.accent}20, ${slide.accent}08)`,
                  border: `1px solid ${slide.accent}40`,
                  backdropFilter: 'blur(16px)',
                  boxShadow: `0 0 30px ${slide.accent}10`,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Service
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
                {/* Shine sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                />
                {/* Glow ring on hover */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 20px ${slide.accent}30, 0 0 20px ${slide.accent}20` }}
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation — Hardhat buttons with ring pulse */}
      <div className="absolute z-20 right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {[prev, next].map((fn, idx) => (
          <motion.button
            key={idx}
            onClick={fn}
            className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(255,140,0,0.08)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,140,0,0.15)' }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.88, rotate: idx === 0 ? -15 : 15 }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ border: '1px solid rgba(255,140,0,0.3)' }}
              animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              whileHover={{ rotate: idx === 0 ? -15 : 15, scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <HardhatIcon size={22} color="#FF8C00" />
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Petroleum pipe indicators at bottom */}
      <div className="absolute z-20 bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative"
            style={{ width: i === current ? '100px' : '44px', transition: 'width 0.5s cubic-bezier(0.23,1,0.32,1)' }}
          >
            {/* Pipe body */}
            <div
              className="relative h-4 sm:h-5 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(60,60,60,0.8) 0%, rgba(35,35,35,0.9) 40%, rgba(50,50,50,0.85) 60%, rgba(40,40,40,0.8) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), inset 0 -1px 2px rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {/* Metallic highlight stripe */}
              <div
                className="absolute top-[2px] left-2 right-2 h-[2px] rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
              />

              {/* Fluid fill */}
              {i < current ? (
                <div
                  className="absolute inset-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(180deg, ${s.accent}CC, ${s.accent}90, ${s.accent}AA)`,
                    boxShadow: `inset 0 1px 3px rgba(255,255,255,0.2), 0 0 8px ${s.accent}40`,
                  }}
                />
              ) : i === current ? (
                <motion.div
                  className="absolute inset-[2px] rounded-full origin-left"
                  style={{
                    background: `linear-gradient(180deg, ${s.accent}DD, ${s.accent}90, ${s.accent}BB)`,
                    boxShadow: `inset 0 1px 3px rgba(255,255,255,0.25), 0 0 10px ${s.accent}50`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 9, ease: 'linear' }}
                  key={`pipe-${current}`}
                >
                  {/* Bubble / flow shimmer */}
                  <motion.div
                    className="absolute top-0 bottom-0 w-3 rounded-full"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Leading glow edge */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-2"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${s.accent})`,
                      boxShadow: `2px 0 8px ${s.accent}, 4px 0 16px ${s.accent}60`,
                      borderRadius: '0 999px 999px 0',
                    }}
                  />
                </motion.div>
              ) : null}

              {/* Pipe joint caps (left & right) */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(80,80,80,0.9), rgba(50,50,50,0.9), rgba(70,70,70,0.9))',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-[4px] rounded-r-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(80,80,80,0.9), rgba(50,50,50,0.9), rgba(70,70,70,0.9))',
                  borderLeft: '1px solid rgba(255,255,255,0.06)',
                }}
              />
            </div>

            {/* Connector bolts between pipes */}
            {i < slides.length - 1 && (
              <div className="absolute -right-1 sm:-right-1.5 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(100,100,100,1), rgba(60,60,60,1))',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-[5] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />
    </section>
  );
}
