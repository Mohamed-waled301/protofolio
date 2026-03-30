/**
 * Portfolio site — shared behavior: theme, navigation, scroll, forms, animations.
 * Replace SOCIAL_LINKS below with your real profiles.
 */

(function () {
	'use strict';

	/** @type {{ github: string, linkedin: string }} — update for production */
	const SOCIAL_LINKS = {
		github: 'https://github.com/Mohamed-waled301',
		linkedin: 'https://www.linkedin.com/in/your-profile'
	};

	/* ---------- Dark / Light mode ---------- */
	(function initTheme() {
		const body = document.body;
		const toggleBtn = document.getElementById('themeToggle');
		const stored = localStorage.getItem('portfolio-theme');
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		function applyTheme(mode) {
			if (mode === 'light') {
				body.classList.add('light-mode');
			} else {
				body.classList.remove('light-mode');
			}
			if (toggleBtn) {
				const isLight = body.classList.contains('light-mode');
				toggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
				toggleBtn.innerHTML = isLight
					? '<i class="fa-solid fa-moon" aria-hidden="true"></i>'
					: '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
			}
		}

		if (stored === 'light' || stored === 'dark') {
			applyTheme(stored);
		} else {
			applyTheme(prefersDark ? 'dark' : 'light');
		}

		if (toggleBtn) {
			toggleBtn.addEventListener('click', function () {
				const next = body.classList.contains('light-mode') ? 'dark' : 'light';
				localStorage.setItem('portfolio-theme', next);
				applyTheme(next);
			});
		}
	})();

	/* ---------- AOS (Animate On Scroll) ---------- */
	if (window.AOS) {
		AOS.init({
			once: true,
			offset: 80,
			duration: 700,
			easing: 'ease-out-cubic'
		});
	}

	/* ---------- Smooth scroll for same-page anchors ---------- */
	document.addEventListener('click', function (e) {
		const target = e.target.closest('a[href^="#"]');
		if (!target) return;
		const id = target.getAttribute('href');
		if (id.length <= 1) return;
		const el = document.querySelector(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});

	/* ---------- Back to top ---------- */
	(function () {
		const btn = document.getElementById('backToTop');
		if (!btn) return;
		function onScroll() {
			if (window.scrollY > 320) {
				btn.classList.add('show');
			} else {
				btn.classList.remove('show');
			}
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		btn.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	})();

	/* ---------- Footer year + social hrefs ---------- */
	(function () {
		const year = document.getElementById('year');
		if (year) year.textContent = String(new Date().getFullYear());

		document.querySelectorAll('[data-social="github"]').forEach(function (a) {
			a.href = SOCIAL_LINKS.github;
		});
		document.querySelectorAll('[data-social="linkedin"]').forEach(function (a) {
			a.href = SOCIAL_LINKS.linkedin;
		});
	})();

	/* ---------- Page loader ---------- */
	(function () {
		const loader = document.getElementById('loader');
		if (!loader) return;
		window.addEventListener('load', function () {
			requestAnimationFrame(function () {
				loader.classList.add('hidden');
			});
		});
	})();

	/* ---------- Close mobile navbar after link click ---------- */
	(function () {
		const nav = document.getElementById('navMain');
		if (!nav || typeof bootstrap === 'undefined') return;
		nav.addEventListener('click', function (e) {
			if (!e.target.matches('.nav-link')) return;
			const toggler = document.querySelector('.navbar-toggler');
			if (!toggler || window.getComputedStyle(toggler).display === 'none') return;
			const inst = bootstrap.Collapse.getInstance(nav);
			if (inst) inst.hide();
		});
	})();

	/* ---------- Contact form validation (interactive feature) ---------- */
	(function () {
		const form = document.getElementById('contactForm');
		if (!form) return;
		const alertBox = document.getElementById('formAlert');

		function validateEmail(email) {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		}
		function setValidity(input, valid) {
			input.classList.toggle('is-invalid', !valid);
		}

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			const name = document.getElementById('name');
			const email = document.getElementById('email');
			const message = document.getElementById('message');
			if (!name || !email || !message) return;

			const okName = name.value.trim().length >= 2;
			const okEmail = validateEmail(email.value.trim());
			const okMsg = message.value.trim().length >= 10;

			setValidity(name, okName);
			setValidity(email, okEmail);
			setValidity(message, okMsg);

			if (okName && okEmail && okMsg) {
				if (alertBox) {
					alertBox.classList.remove('d-none');
					alertBox.focus();
					setTimeout(function () {
						alertBox.classList.add('d-none');
					}, 4000);
				}
				form.reset();
				name.classList.remove('is-invalid');
				email.classList.remove('is-invalid');
				message.classList.remove('is-invalid');
			}
		});
	})();

	/* ---------- Hero typing effect (interactive feature) ---------- */
	(function () {
		const el = document.getElementById('typed');
		if (!el) return;
		const phrases = [
			'Web Developer',
			'Data Analyst (Student)',
			'Building clean UIs'
		];
		let pi = 0;
		let ci = 0;
		let deleting = false;

		function tick() {
			const current = phrases[pi];
			if (!deleting) {
				ci += 1;
				el.textContent = current.slice(0, ci) + '\u258B';
				if (ci === current.length) {
					deleting = true;
					setTimeout(tick, 1400);
					return;
				}
			} else {
				ci -= 1;
				el.textContent = current.slice(0, ci) + '\u258B';
				if (ci === 0) {
					deleting = false;
					pi = (pi + 1) % phrases.length;
				}
			}
			setTimeout(tick, deleting ? 45 : 85);
		}
		tick();
	})();

	/* ---------- Skill bars animate when visible (About page) ---------- */
	(function () {
		const bars = document.querySelectorAll('.skill-bar');
		if (!bars.length) return;
		const io = new IntersectionObserver(
			function (entries, obs) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					const bar = entry.target;
					const val = parseInt(bar.getAttribute('data-skill') || '0', 10);
					bar.style.transition = 'width 1s cubic-bezier(0.22, 1, 0.36, 1)';
					requestAnimationFrame(function () {
						bar.style.width = val + '%';
					});
					obs.unobserve(bar);
				});
			},
			{ threshold: 0.35 }
		);
		bars.forEach(function (b) {
			io.observe(b);
		});
	})();

	/* ---------- Project category filter (Projects page) ---------- */
	(function () {
		const container = document.getElementById('projectsGrid');
		const buttons = document.querySelectorAll('.filter-btn');
		if (!container || !buttons.length) return;
		const cards = container.querySelectorAll('[data-category]');
		buttons.forEach(function (btn) {
			btn.addEventListener('click', function () {
				buttons.forEach(function (b) {
					b.classList.remove('active');
				});
				btn.classList.add('active');
				const filter = btn.getAttribute('data-filter');
				cards.forEach(function (card) {
					const cat = card.getAttribute('data-category');
					const show = filter === 'all' || cat === filter;
					card.classList.toggle('d-none', !show);
				});
			});
		});
	})();

	/* ---------- Project cards: click anywhere (except inner links) opens live demo ---------- */
	(function () {
		const cards = document.querySelectorAll('.project-card[data-demo-url]');
		if (!cards.length) return;
		cards.forEach(function (card) {
			card.setAttribute('tabindex', '0');
			card.setAttribute('role', 'link');
			card.setAttribute(
				'aria-label',
				card.getAttribute('data-project-label') || 'Open project live demo'
			);
			card.style.cursor = 'pointer';
			card.addEventListener('click', function (e) {
				if (e.target.closest('a')) return;
				var url = card.getAttribute('data-demo-url');
				if (url) window.open(url, '_blank', 'noopener,noreferrer');
			});
			card.addEventListener('keydown', function (e) {
				if (e.key !== 'Enter' && e.key !== ' ') return;
				if (e.target.closest('a')) return;
				e.preventDefault();
				var url = card.getAttribute('data-demo-url');
				if (url) window.open(url, '_blank', 'noopener,noreferrer');
			});
		});
	})();

	/* ---------- Subtle parallax on hero decorative layers ---------- */
	(function () {
		const blob = document.querySelector('.hero-blob');
		const gradient = document.querySelector('.animated-gradient');
		if (!blob && !gradient) return;
		window.addEventListener(
			'scroll',
			function () {
				const y = window.scrollY || 0;
				if (blob) blob.style.transform = 'translateY(' + y * 0.06 + 'px)';
				if (gradient) gradient.style.transform = 'translateY(' + y * 0.02 + 'px)';
			},
			{ passive: true }
		);
	})();
})();
