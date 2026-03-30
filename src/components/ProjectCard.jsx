import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import ProjectCoverImage from './ProjectCoverImage.jsx';

/** Fixed media height — matches .project-card-img (230px) */
const IMAGE_WRAP =
  'project-card-media relative h-[230px] w-full shrink-0 overflow-hidden rounded-t-2xl';

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, liveUrl, githubUrl } = project;

  const openLive = () => window.open(liveUrl, '_blank', 'noopener,noreferrer');

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
      role="link"
      tabIndex={0}
      aria-label={`Open ${title} live demo`}
      onClick={(e) => {
        if (e.target.closest('a')) return;
        openLive();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLive();
        }
      }}
      className="project-card group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/70 shadow-lg shadow-slate-900/5 outline-none backdrop-blur-sm transition-shadow duration-300 hover:border-violet-300/60 hover:shadow-xl hover:shadow-violet-500/10 focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-white/10 dark:bg-ink-800/50 dark:shadow-card dark:hover:border-violet-500/30 dark:hover:shadow-glow-sm dark:focus-visible:ring-violet-400"
    >
      <div className={IMAGE_WRAP}>
        <ProjectCoverImage project={project} alt={`${title} — screenshot`} />
        <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-t from-slate-900/85 via-slate-900/50 to-slate-900/20 opacity-50 transition-opacity duration-300 group-hover:opacity-95 dark:from-ink-950 dark:via-ink-950/70 dark:to-transparent dark:opacity-60 dark:group-hover:opacity-95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-lg transition-transform duration-300 group-hover:translate-y-0"
          >
            <HiExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex translate-y-3 items-center gap-2 rounded-full border border-white/50 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 delay-75 group-hover:translate-y-0 dark:border-white/40 dark:bg-white/10"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-slate-100 p-6 dark:border-white/5">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </motion.article>
  );
}
