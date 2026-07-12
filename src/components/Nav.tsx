import { useEffect, useState } from 'react';
import { Landmark, Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { navLinks } from '@/data/content';
import { useContactModal } from '@/lib/ContactModalContext';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <Container className="!px-0">
        <div
          className={`flex h-16 items-center justify-between rounded-pill px-4 pl-5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? 'border border-ink-light/10 bg-white/85 shadow-nav backdrop-blur-md'
              : 'border border-transparent bg-white/60 backdrop-blur-md'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 text-h3 !text-lg text-ink-light">
            <Landmark size={22} className="text-brand-500" aria-hidden="true" />
            ValuXpert
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-nav text-ink-muted transition-colors hover:text-ink-light">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button type="button" onClick={open} className="btn-primary !px-6 !py-2.5">
              Request a Demo
            </button>
          </div>

          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-2 rounded-card border border-ink-light/10 bg-white shadow-nav lg:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-nav text-ink-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  open();
                }}
                className="btn-primary mt-2"
              >
                Request a Demo
              </button>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
