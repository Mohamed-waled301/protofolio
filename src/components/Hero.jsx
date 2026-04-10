import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage.jsx';
import { PROFILE_FALLBACK_SRC, PROFILE_IMAGE_SRC } from '../constants/assets.js';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageMotion = {
  hidden: { opacity: 0, x: 36, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
      {/* Hero-local gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-600/[0.07] via-transparent to-sky-500/[0.05] dark:from-violet-600/15 dark:to-sky-500/10"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px] dark:bg-violet-600/25" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-400/15 blur-[90px] dark:bg-sky-500/20" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column — first on mobile */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 flex flex-col justify-center text-center lg:order-1 lg:max-w-xl lg:text-left"
          >
            <motion.p
              variants={item}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400"
            >
              Portfolio
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[3.5rem] dark:text-white"
            >
              Mohamed Waled
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-4 text-lg font-medium text-slate-600 sm:text-xl dark:text-slate-300"
            >
              Front-end Developer <span className="text-slate-400 dark:text-slate-500">·</span> Data Analyst
            </motion.p>
            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0 dark:text-slate-400"
            >
              I build modern, responsive web apps with attention to UI detail. Currently strengthening data analysis
              and UX craft — shipping real projects you can explore below.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-9 flex justify-center lg:justify-start"
            >
              <Link
                to="/projects"
                className="inline-flex min-h-[2.75rem] min-w-[11rem] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-violet-500/35 dark:shadow-violet-500/20"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile column */}
          <motion.div
            variants={imageMotion}
            initial="hidden"
            animate="show"
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute inset-0 -m-3 rounded-full opacity-60 blur-2xl dark:opacity-80"
                style={{
                  background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(14,165,233,0.2) 60%, transparent 70%)',
                }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div
                  className="rounded-full p-[3px] shadow-xl shadow-violet-500/20 dark:shadow-glow"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #0ea5e9, #a78bfa)',
                  }}
                >
                  <div className="rounded-full bg-slate-100 p-1 dark:bg-ink-900">
                    <SafeImage
                      src={PROFILE_IMAGE_SRC}
                      fallback={PROFILE_FALLBACK_SRC}
                      alt="Mohamed Waled — front-end developer and data analyst, portrait photo"
                      width={576}
                      height={576}
                      className="h-56 w-56 rounded-full object-cover object-center sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
