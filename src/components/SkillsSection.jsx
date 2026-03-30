import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaDatabase } from 'react-icons/fa';
import { MdBrush } from 'react-icons/md';

const skills = [
  {
    icon: HiCode,
    title: 'Front-end',
    description: 'Semantic HTML, Tailwind-level styling discipline, React, and polished interactions.',
  },
  {
    icon: FaDatabase,
    title: 'Data',
    description: 'Exploring analysis workflows — summarizing trends and presenting insights clearly.',
  },
  {
    icon: MdBrush,
    title: 'UI / UX',
    description: 'Layout, hierarchy, and motion that feel intentional — not generic template filler.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Capabilities
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            What I focus on
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-400">
            Three pillars I keep sharpening — each backed by real projects and continuous practice.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {skills.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={item}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/70 p-8 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-shadow duration-300 hover:border-violet-300/70 hover:shadow-lg hover:shadow-violet-500/10 dark:border-white/10 dark:bg-ink-800/40 dark:shadow-none dark:hover:border-violet-500/40 dark:hover:shadow-glow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-sky-500/0 opacity-0 transition-opacity duration-300 group-hover:from-violet-600/[0.06] group-hover:to-sky-500/[0.06] group-hover:opacity-100 dark:group-hover:from-violet-600/10 dark:group-hover:to-sky-500/10" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-sky-100 text-violet-600 ring-1 ring-slate-200/80 transition-transform duration-300 group-hover:scale-110 dark:from-violet-600/30 dark:to-sky-500/20 dark:text-violet-300 dark:ring-white/10">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
