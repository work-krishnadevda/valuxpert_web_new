import { Landmark, Globe, Mail, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { footerLinks } from '@/data/content';

export function Footer() {
  return (
    <footer id="contact" className="bg-surface-light1 pt-16 text-ink-muted">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-ink-light/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-h3 !text-lg text-ink-light">
              <Landmark size={22} className="text-brand-500" />
              ValuXpert
            </div>
            <p className="mt-4 max-w-xs text-sm">
              Empowering valuation professionals with industrial-grade, secure tools. Built by industry veterans.
            </p>
          </div>

          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Company" links={footerLinks.company} />

          <div>
            <p className="text-eyebrow uppercase text-brand-600">Connect</p>
            <p className="mt-4 text-sm">
              Support:{' '}
              <a href="mailto:info@valuxpert.in" className="text-ink-light underline-offset-2 hover:underline">
                info@valuxpert.in
              </a>
            </p>
            <div className="mt-4 flex gap-4 text-ink-muted">
              <Globe size={18} />
              <Mail size={18} />
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} ValuXpert Enterprise Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-ink-light">
              Privacy Policy
            </a>
            <a href="#sla" className="hover:text-ink-light">
              SLA Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-eyebrow uppercase text-brand-600">{title}</p>
      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-ink-light">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
