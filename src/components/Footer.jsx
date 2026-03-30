import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/60 py-10 backdrop-blur-sm dark:border-white/5 dark:bg-ink-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 dark:text-slate-500">
          © {year} Mohamed Waled. Crafted with React & Tailwind.
        </p>
        <div className="flex gap-4 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/Mohamed-waled301"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-violet-600 dark:hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-violet-600 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
        <Link
          to="/contact"
          className="text-sm text-slate-500 transition-colors hover:text-violet-600 dark:hover:text-violet-400"
        >
          Get in touch →
        </Link>
      </div>
    </footer>
  );
}
