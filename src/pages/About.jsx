import { motion } from 'framer-motion';
import SafeImage from '../components/SafeImage.jsx';
import { PROFILE_FALLBACK_SRC, PROFILE_IMAGE_SRC } from '../constants/assets.js';

export default function About() {
  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            About
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Mohamed Waled
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Student developer focused on front-end craft, measurable UI quality, and the bridge between design and
            data.
          </p>
        </motion.header>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/70 shadow-lg dark:border-white/10 dark:bg-ink-800/40 dark:shadow-card"
          >
            <SafeImage
              src={PROFILE_IMAGE_SRC}
              fallback={PROFILE_FALLBACK_SRC}
              alt="Mohamed Waled — front-end developer and data analyst, portrait photo"
              width={960}
              height={720}
              className="aspect-[4/3] w-full object-cover object-center"
              loading="eager"
            />
            <div className="border-t border-slate-100 p-6 dark:border-white/5">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Front-end &amp; data-focused student developer
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                Building in public — shipped projects linked in the portfolio section.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-slate-600 dark:text-slate-400"
          >
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Background</h2>
            <p className="leading-relaxed">
              I enjoy turning ideas into interfaces that feel fast and obvious — semantic structure, responsive layouts,
              and small motion details that add polish without getting in the way.
            </p>
            <p className="leading-relaxed">
              Alongside front-end work, I&apos;m deepening skills in data analysis: cleaning datasets, summarizing
              trends, and communicating results in a way non-technical readers can trust.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, I&apos;m usually iterating on side projects, studying UI patterns, or refining
              this portfolio — because the product is the proof.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
