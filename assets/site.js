/* ==========================================================================
   Leadapreneur — shared behaviour
   Same motion language as the AI role quiz: everything is progressive,
   nothing is required for the page to be readable.
   ========================================================================== */
(function () {
    'use strict';

    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- sticky header ---------- */
    const bar = $('.topbar');
    if (bar) {
        const onScroll = () => bar.classList.toggle('stuck', window.scrollY > 8);
        onScroll();
        addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---------- mobile menu ---------- */
    const burger = $('.burger'), nav = $('.nav');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            const open = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!open));
            nav.classList.toggle('open', !open);
        });
        nav.addEventListener('click', e => {
            if (e.target.closest('a')) {
                burger.setAttribute('aria-expanded', 'false');
                nav.classList.remove('open');
            }
        });
        addEventListener('keydown', e => {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                burger.setAttribute('aria-expanded', 'false');
                nav.classList.remove('open');
                burger.focus();
            }
        });
    }

    /* ---------- mark the current page in the nav ---------- */
    const here = location.pathname.split('/').pop() || 'index.html';
    $$('.nav a[href]').forEach(a => {
        const target = a.getAttribute('href').split('/').pop();
        if (target === here) a.setAttribute('aria-current', 'page');
    });

    /* ---------- reveal on scroll ---------- */
    const reveals = $$('.reveal');
    if (reveals.length) {
        if (reduced || !('IntersectionObserver' in window)) {
            reveals.forEach(el => el.classList.add('in'));
        } else {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(en => {
                    if (!en.isIntersecting) return;
                    en.target.classList.add('in');
                    obs.unobserve(en.target);
                });
            }, { rootMargin: '0px 0px -12% 0px', threshold: .12 });
            reveals.forEach(el => io.observe(el));
        }
    }

    /* ---------- count-up stats ---------- */
    // Reads data-to (number) and keeps whatever prefix/suffix the markup declares.
    const counters = $$('[data-to]');
    if (counters.length) {
        const run = el => {
            const to = parseFloat(el.dataset.to);
            const pre = el.dataset.pre || '';
            const post = el.dataset.post || '';
            const dp = (el.dataset.dp | 0);
            if (reduced) { el.textContent = pre + to.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp }) + post; return; }
            const dur = 1500, t0 = performance.now();
            const tick = now => {
                const p = Math.min(1, (now - t0) / dur);
                const eased = 1 - Math.pow(1 - p, 3);
                const v = to * eased;
                el.textContent = pre + v.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp }) + post;
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        if (!('IntersectionObserver' in window)) counters.forEach(run);
        else {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(en => {
                    if (!en.isIntersecting) return;
                    run(en.target);
                    obs.unobserve(en.target);
                });
            }, { threshold: .5 });
            counters.forEach(el => io.observe(el));
        }
    }

    /* ---------- logo marquee: clone the track so the loop is seamless ---------- */
    $$('.marquee__track').forEach(track => {
        track.innerHTML += track.innerHTML;
        track.querySelectorAll(':scope > *').forEach((el, i, all) => {
            if (i >= all.length / 2) el.setAttribute('aria-hidden', 'true');
        });
    });

    /* ---------- testimonial carousel ---------- */
    $$('[data-carousel]').forEach(rail => {
        const slides = $$(':scope > *', rail);
        const nav = $('#' + rail.dataset.carousel);
        if (!nav || slides.length < 2) return;
        nav.innerHTML = slides.map((_, i) =>
            `<button type="button" aria-label="Go to testimonial ${i + 1}" aria-current="${i === 0}"></button>`).join('');
        const dots = $$('button', nav);
        dots.forEach((d, i) => d.addEventListener('click', () =>
            slides[i].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' })));

        let raf;
        rail.addEventListener('scroll', () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const mid = rail.scrollLeft + rail.clientWidth / 2;
                let best = 0, bestD = Infinity;
                slides.forEach((s, i) => {
                    const c = s.offsetLeft + s.offsetWidth / 2;
                    const d = Math.abs(c - mid);
                    if (d < bestD) { bestD = d; best = i; }
                });
                dots.forEach((d, i) => d.setAttribute('aria-current', String(i === best)));
            });
        }, { passive: true });
    });

    /* ---------- accordion ---------- */
    $$('.acc').forEach(acc => {
        const items = $$('.acc__item', acc);
        items.forEach(item => {
            const head = $('.acc__head', item);
            const body = $('.acc__body', item);
            if (!head || !body) return;
            const id = body.id || ('acc-' + Math.random().toString(36).slice(2, 8));
            body.id = id;
            head.setAttribute('aria-controls', id);
            head.setAttribute('aria-expanded', item.dataset.open === 'true' ? 'true' : 'false');
            head.addEventListener('click', () => {
                const open = item.dataset.open === 'true';
                if (acc.dataset.single !== 'false') {
                    items.forEach(o => {
                        o.dataset.open = 'false';
                        const h = $('.acc__head', o);
                        if (h) h.setAttribute('aria-expanded', 'false');
                    });
                }
                item.dataset.open = String(!open);
                head.setAttribute('aria-expanded', String(!open));
            });
        });
    });

    /* ---------- filter chips ---------- */
    $$('[data-filter-group]').forEach(group => {
        const targets = $$('[data-tag]', document.querySelector(group.dataset.filterTarget) || document);
        $$('.chip', group).forEach(chip => chip.addEventListener('click', () => {
            const tag = chip.dataset.value;
            $$('.chip', group).forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
            targets.forEach(t => {
                const show = tag === 'all' || t.dataset.tag.split(' ').includes(tag);
                t.hidden = !show;
            });
        }));
    });

    /* ---------- pointer tilt ---------- */
    if (!reduced && matchMedia('(hover: hover) and (pointer: fine)').matches) {
        $$('[data-tilt]').forEach(el => {
            const deg = parseFloat(el.dataset.tilt) || 5;
            el.addEventListener('pointermove', e => {
                const r = el.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - .5;
                const y = (e.clientY - r.top) / r.height - .5;
                el.style.transform = `perspective(1100px) rotateX(${-y * deg}deg) rotateY(${x * deg}deg) translateY(-4px)`;
            });
            el.addEventListener('pointerleave', () => { el.style.transform = ''; });
        });
    }

    /* ---------- newsletter: this is a static build, so say so ---------- */
    $$('form[data-newsletter]').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const note = $('[data-note]', form);
            if (note) note.textContent = 'Not wired up yet — connect this form to your mailing list.';
        });
    });

    /* ---------- footer year ---------- */
    $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
