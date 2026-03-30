import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsGrid({ limit }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Portfolio
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              My Projects
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Explore a selection of my recent projects, showcasing modern design, clean code, and user-focused
              experiences. Each project reflects my passion for building responsive and visually engaging web
              applications.
            </p>
          </div>
          {limit ? (
            <Link
              to="/projects"
              className="shrink-0 rounded-full border border-slate-300 bg-white/80 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-violet-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10"
            >
              View all →
            </Link>
          ) : null}
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
