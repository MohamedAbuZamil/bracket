import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nubaria Power Station I & II',
    description: 'Live Line Washing System & Fire Protection System for Power Transformer.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80',
    category: 'Fire Protection',
  },
  {
    title: 'Sidi Krir Power Station',
    description: 'Fabrication and Erection for Turbine Ventilation System.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    category: 'Fabrication',
  },
  {
    title: 'Eagle Chemicals',
    description: 'Complete Fire Protection Systems for chemical processing facility.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
    category: 'Fire Protection',
  },
  {
    title: 'Offshore Platform Services',
    description: 'Comprehensive offshore maintenance and modification works for marine structures.',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80',
    category: 'Offshore & Marine',
  },
  {
    title: 'Industrial Storage Tanks',
    description: 'Engineering, fabrication, and erection of petroleum and chemical storage tanks.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    category: 'Storage Tanks',
  },
  {
    title: 'Steel Structure Fabrication',
    description: 'Large-scale steel structure fabrication and erection for industrial complexes.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    category: 'Construction',
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group card rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6 }}
    >
      <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={14} className="text-white" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium mb-2 uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-36" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
            style={{ background: 'var(--accent-soft)', color: 'var(--petrol)' }}
          >
            Our Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 px-4" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-lg px-4" style={{ color: 'var(--text-secondary)' }}>
            Landmark projects showcasing our capability to deliver excellence
            across diverse industrial sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
