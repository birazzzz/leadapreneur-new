const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const header = $('[data-header]');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', scrollY > 12);
  updateHeader();
  addEventListener('scroll', updateHeader, { passive: true });
}

const menuToggle = $('[data-menu-toggle]');
const nav = $('[data-nav]');
if (menuToggle && nav) {
  const closeMenu = (restoreFocus = false) => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    if (restoreFocus) menuToggle.focus();
  };
  menuToggle.addEventListener('click', () => {
    const nextOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(nextOpen));
    nav.classList.toggle('is-open', nextOpen);
    document.body.classList.toggle('menu-open', nextOpen);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true);
  });
}

const navGroups = $$('.nav-group');
navGroups.forEach((group) => {
  group.addEventListener('toggle', () => {
    if (!group.open) return;
    navGroups.filter((other) => other !== group).forEach((other) => other.removeAttribute('open'));
  });
});
document.addEventListener('click', (event) => {
  if (event.target.closest('.nav-group')) return;
  navGroups.forEach((group) => group.removeAttribute('open'));
});
addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const open = navGroups.find((group) => group.open);
  if (!open) return;
  open.removeAttribute('open');
  $('summary', open)?.focus();
});

const solutionDialog = $('[data-solution-dialog]');
const solutionTriggers = $$('.solution-trigger');
if (solutionDialog && typeof solutionDialog.showModal === 'function') {
  let lastSolutionTrigger = null;
  solutionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      lastSolutionTrigger = trigger;
      if (nav?.classList.contains('is-open')) {
        menuToggle?.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
      document.body.classList.remove('menu-open');
      document.body.classList.add('modal-open');
      if (!solutionDialog.open) solutionDialog.showModal();
    });
  });
  solutionDialog.addEventListener('click', (event) => {
    if (event.target === solutionDialog) solutionDialog.close();
  });
  solutionDialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    lastSolutionTrigger?.focus();
  });
  $$('.solution-plan a', solutionDialog).forEach((link) => {
    link.addEventListener('click', () => solutionDialog.close());
  });
}

const reveals = $$('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((element) => observer.observe(element));
}

$$('[data-role-reveal]').forEach((button) => {
  button.addEventListener('click', () => {
    const region = document.getElementById(button.getAttribute('aria-controls'));
    if (!region) return;
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    region.hidden = open;
    button.closest('[data-role-card]')?.classList.toggle('is-revealed', !open);
  });
});

const carousel = $('[data-role-carousel]');
const controls = $('[data-carousel-controls]');
if (carousel && controls) {
  const cards = $$('[data-role-card]', carousel);
  const position = $('[data-carousel-position]', controls);
  let active = 0;
  const updatePosition = () => {
    const carouselMiddle = carousel.scrollLeft + carousel.clientWidth / 2;
    active = cards.reduce(
      (best, card, index) => {
        const middle = card.offsetLeft + card.offsetWidth / 2;
        return Math.abs(middle - carouselMiddle) < best.distance
          ? { index, distance: Math.abs(middle - carouselMiddle) }
          : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;
    if (position) position.textContent = String(active + 1);
  };
  const go = (delta) => {
    active = Math.max(0, Math.min(cards.length - 1, active + delta));
    cards[active].scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    if (position) position.textContent = String(active + 1);
  };
  $('[data-carousel-prev]', controls)?.addEventListener('click', () => go(-1));
  $('[data-carousel-next]', controls)?.addEventListener('click', () => go(1));
  let frame;
  carousel.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updatePosition);
    },
    { passive: true },
  );
}

if (!reducedMotion && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const composition = $('[data-hero-depth]');
  if (composition) {
    let frame;
    composition.addEventListener('pointermove', (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = composition.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        composition.style.setProperty('--pointer-x', x.toFixed(3));
        composition.style.setProperty('--pointer-y', y.toFixed(3));
      });
    });
    composition.addEventListener('pointerleave', () => {
      composition.style.removeProperty('--pointer-x');
      composition.style.removeProperty('--pointer-y');
    });
  }
}

$$('[data-filter-group]').forEach((group) => {
  const target = $(group.dataset.filterTarget);
  if (!target) return;
  const items = $$('[data-tag]', target);
  $$('button[data-filter]', group).forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      $$('button[data-filter]', group).forEach((candidate) =>
        candidate.setAttribute('aria-pressed', String(candidate === button)),
      );
      items.forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.tag !== filter;
      });
    });
  });
});
