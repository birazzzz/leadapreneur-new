import { projects } from '../../data/content.mjs';
import { finalCta, projectCard } from '../components.mjs';
import { breadcrumb, pageHeroArt, sectionHeading } from '../templates.mjs';

export function projectsPage() {
  const filters = ['All', ...new Set(projects.map((project) => project.theme))];
  return `
    <section class="page-hero page-hero--projects">
      ${pageHeroArt('projects')}
      <div class="shell">
        ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects/' }])}
        <div class="page-hero__grid"><div><p class="kicker">Evidence library</p><h1>Real projects from leadapreneurs.</h1></div><p class="page-hero__lede">Real problems, real solutions and manager-verified valuations. Client details are anonymised where needed; project evidence is not.</p></div>
      </div>
    </section>
    <section class="section project-library" aria-labelledby="project-library-title">
      <div class="shell">
        ${sectionHeading('Browse the work', '<span id="project-library-title">Built around live business pain.</span>', 'Filter by the kind of value being created. Every project remains visible when JavaScript is unavailable.')}
        <div class="filter-bar" aria-label="Filter projects" data-filter-group data-filter-target="#project-grid">
          ${filters.map((filter, index) => `<button type="button" aria-pressed="${index === 0}" data-filter="${filter === 'All' ? 'all' : filter.toLowerCase().replaceAll(' ', '-')}">${filter}</button>`).join('')}
        </div>
        <div class="project-grid" id="project-grid">${projects.map(projectCard).join('')}</div>
        <p class="project-disclaimer">Project visuals and descriptions protect client confidentiality. Status and value labels preserve the wording published by Leadapreneur.</p>
      </div>
    </section>
    ${finalCta()}`;
}
