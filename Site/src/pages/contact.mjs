import { site } from '../../data/content.mjs';
import { breadcrumb, link } from '../templates.mjs';

export function contactPage() {
  return `
    <section class="contact-page"><div class="shell">${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])}<div class="contact-grid"><div><p class="kicker">Start here</p><h1>What could your people build next?</h1><p>Tell us where AI adoption, talent or innovation is stuck. We will help you identify the right first move.</p><div class="button-row">${link(site.whatsapp, 'Discuss your goals on WhatsApp', 'button button--cyan', true)}${link('/future-proof-assessment/', 'Take the future-proof assessment', 'button button--outline')}</div></div><aside><p class="kicker">Leadapreneur Sdn. Bhd.</p><address>${site.address.join('<br>')}</address><div><p><b>Best for</b></p><ul><li>AI adoption and capability building</li><li>AI × Talent Accelerator</li><li>Greatness Games</li><li>Stratecution and project delivery</li></ul></div><p class="small muted">We do not publish a contact form here because no approved form-processing or consent workflow is present in the source repository.</p></aside></div></div></section>`;
}
