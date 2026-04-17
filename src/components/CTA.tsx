import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden card"
        >
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Content */}
          <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
              style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--petrol)' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--petrol)' }} />
              </span>
              Let's Work Together
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2" style={{ color: 'var(--text-primary)' }}>
              Ready to Start Your
              <br />
              <span className="text-gradient">Next Project?</span>
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-lg mb-8 sm:mb-12 leading-relaxed px-4" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss how Bracket can deliver excellence for your next
              industrial project. Our team is ready to engineer your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="mailto:info@bracket-egy.com"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl btn-petrol text-sm sm:text-base relative overflow-hidden"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={18} />
                  Contact Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.a>
              <motion.a
                href="tel:+20123456789"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Phone size={16} style={{ color: 'var(--petrol)' }} />
                Call Us Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
