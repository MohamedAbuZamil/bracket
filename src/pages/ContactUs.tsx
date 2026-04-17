import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@bracket-egy.com',
    href: 'mailto:info@bracket-egy.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 123 456 789',
    href: 'tel:+20123456789',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: '#',
  },
];

/* Floating safety particles */
function SafetyParticles() {
  const items = [
    { icon: HardHat, x: '10%', y: '20%', delay: 0, size: 20 },
    { icon: ShieldCheck, x: '85%', y: '15%', delay: 1.5, size: 18 },
    { icon: HardHat, x: '75%', y: '70%', delay: 3, size: 16 },
    { icon: ShieldCheck, x: '15%', y: '75%', delay: 2, size: 22 },
    { icon: HardHat, x: '50%', y: '85%', delay: 4, size: 14 },
    { icon: ShieldCheck, x: '90%', y: '50%', delay: 0.8, size: 16 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.06, 0.12, 0.06],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.icon size={item.size} style={{ color: 'var(--petrol)' }} />
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build mailto link and open it
    const subject = encodeURIComponent(formState.subject || 'Contact from Website');
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\n${formState.message}`
    );
    window.location.href = `mailto:info@bracket-egy.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=2000&q=80)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Animated safety icons in background */}
        <div className="absolute inset-0 z-[1]">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute w-px"
              style={{
                left: `${15 + i * 18}%`,
                top: 0,
                height: '100%',
                background: 'linear-gradient(to bottom, transparent, rgba(13,115,119,0.08), transparent)',
              }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/15">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <HardHat size={32} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-5"
          >
            Get in
            <br />
            <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="max-w-xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed"
          >
            Let's discuss how Bracket can engineer your next project with safety, quality, and excellence.
          </motion.p>

          {/* Animated pulse ring */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 rounded-full border-2 border-white/20"
                animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white/15"
                animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <ChevronDown size={18} className="text-white/50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="relative -mt-16 sm:-mt-20 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group card rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-petrol to-petrol-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--accent-soft)' }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <info.icon size={22} style={{ color: 'var(--petrol)' }} />
              </motion.div>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--petrol)' }}>
                {info.label}
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <SafetyParticles />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={formRef} className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-2"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={formInView ? { width: '60px' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 rounded-full mb-6"
                style={{ background: 'var(--petrol)' }}
              />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-5 leading-snug" style={{ color: 'var(--text-primary)' }}>
                Send Us a{' '}
                <span className="text-gradient">Message</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Have a project in mind? Need a quote? Our team is ready to help you with any industrial engineering challenge. Fill out the form and we'll get back to you promptly.
              </p>

              {/* Safety animated badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="card rounded-2xl p-5 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-soft)' }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ShieldCheck size={22} style={{ color: 'var(--petrol)' }} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Safety-First Partner
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Every project starts with our commitment to HSSE standards. Your safety is our priority from the first contact.
                    </p>
                  </div>
                </div>

                {/* Animated progress bar */}
                <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--petrol)' }}
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {[
                  { label: 'Response Time', value: '< 24h' },
                  { label: 'Client Satisfaction', value: '100%' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="card rounded-xl p-4 text-center"
                  >
                    <p className="text-lg sm:text-xl font-black" style={{ color: 'var(--petrol)' }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-petrol to-transparent" />

                <div className="space-y-5">
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                        Your Name <span style={{ color: 'var(--petrol)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-300 focus:ring-2"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                          '--tw-ring-color': 'var(--petrol)',
                        } as React.CSSProperties}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                        Your Email <span style={{ color: 'var(--petrol)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-300 focus:ring-2"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                          '--tw-ring-color': 'var(--petrol)',
                        } as React.CSSProperties}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                        Phone <span style={{ color: 'var(--petrol)' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-300 focus:ring-2"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                          '--tw-ring-color': 'var(--petrol)',
                        } as React.CSSProperties}
                        placeholder="+20 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-300 focus:ring-2"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                          '--tw-ring-color': 'var(--petrol)',
                        } as React.CSSProperties}
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                      Your Message <span style={{ color: 'var(--petrol)' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-300 focus:ring-2 resize-none"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        '--tw-ring-color': 'var(--petrol)',
                      } as React.CSSProperties}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-2">
                    <motion.button
                      type="submit"
                      disabled={sending}
                      className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl btn-petrol text-sm sm:text-base w-full sm:w-auto relative overflow-hidden disabled:opacity-70"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {sending ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : sent ? (
                          <>
                            <CheckCircle2 size={18} />
                            Sent!
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </motion.button>

                    {sent && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xs font-medium"
                        style={{ color: 'var(--petrol)' }}
                      >
                        Your email client should open shortly
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Image Divider ─── */}
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
              Your next project starts with a{' '}
              <span className="text-gradient">conversation</span>
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
              Explore <span className="text-gradient">More</span>
            </h3>
            <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Learn more about our mission, safety standards, and quality commitment.
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
                <ShieldCheck size={16} style={{ color: 'var(--petrol)' }} />
                HSSE Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
