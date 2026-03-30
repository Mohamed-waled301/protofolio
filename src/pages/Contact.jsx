import { useState } from 'react';
import { motion } from 'framer-motion';

const initial = { name: '', email: '', message: '' };

function validEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter at least 2 characters.';
    if (!validEmail(form.email.trim())) next.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
    setForm(initial);
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-slate-900 dark:text-white">Let&apos;s talk</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Drop a note — this form validates in the browser (wire it to a backend when you deploy).
          </p>
        </motion.header>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          onSubmit={onSubmit}
          className="rounded-2xl border border-slate-200/90 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-ink-800/40 dark:shadow-card sm:p-10"
          noValidate
        >
          {sent && (
            <div
              className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200"
              role="status"
            >
              Thanks — your message looks good. Connect Formspree or an API to deliver it for real.
            </div>
          )}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-shadow focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-ink-900/80 dark:text-white dark:focus:border-violet-500/50 dark:focus:ring-violet-500/30"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-ink-900/80 dark:text-white dark:focus:border-violet-500/50 dark:focus:ring-violet-500/30"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-ink-900/80 dark:text-white dark:focus:border-violet-500/50 dark:focus:ring-violet-500/30"
                placeholder="What would you like to build or discuss?"
              />
              {errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 hover:scale-[1.01] sm:w-auto sm:px-10"
            >
              Send message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
