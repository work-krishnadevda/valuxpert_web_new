import { Globe, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "@/data/content";
import Logo from "@/components/common/Logo/Logo";
import { useState } from "react";
import { useContactModal } from "@/lib/ContactModalContext";

export function Footer() {
  const { open } = useContactModal();
  const [modal, setModal] = useState<{
    title: string;
    content: string;
  } | null>(null);
  return (
    <footer id="contact" className="bg-surface-light1 pt-16 text-ink-muted">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-ink-light/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-h3 !text-lg text-ink-light">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm">
              Empowering valuation professionals with industrial-grade, secure
              tools. Built by industry veterans.
            </p>
          </div>

          <FooterColumn
            title="Solutions"
            links={footerLinks.solutions}
            onOpen={setModal}
          />

          <FooterColumn
            title="Company"
            links={footerLinks.company}
            onOpen={setModal}
          />

          <div>
            <p className="text-eyebrow uppercase text-brand-600">Connect</p>
            <p className="mt-4 text-sm">
              Support:{" "}
              <a
                href="mailto:info@valuxpert.in"
                className="text-ink-light underline-offset-2 hover:underline"
              >
                info@valuxpert.in
              </a>
            </p>

            <p className="mt-1 text-sm">
              Phone:{" "}
              <a
                href="tel:+918770924535"
                className="text-ink-light underline-offset-2 hover:underline"
              >
                +91 87709 24535
              </a>
            </p>
            <div className="mt-4 flex gap-4 text-ink-muted">
              <a href="#hero" aria-label="ValuXpert — go to homepage">
                <Globe size={18} />
              </a>
              <button onClick={open}>
                <Mail size={18} />
              </button>
              <a href="#hero" aria-label="ValuXpert — go to homepage">
                <ShieldCheck size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} ValuXpert Enterprise Systems. All
            rights reserved.
          </p>
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
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {modal.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              {modal.content}
            </p>

            <button
              onClick={() => setModal(null)}
              className="mt-6 rounded-lg bg-brand-600 px-5 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

type FooterLink = {
  label: string;
  href?: string;
  modalContent?: string;
};

function FooterColumn({
  title,
  links,
  onOpen,
}: {
  title: string;
  links: FooterLink[];
  onOpen: (modal: { title: string; content: string }) => void;
}) {
  return (
    <div>
      <p className="text-eyebrow uppercase text-brand-600">{title}</p>

      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.modalContent ? (
              <button
                onClick={() =>
                  onOpen({
                    title: link.label,
                    content: link.modalContent!,
                  })
                }
                className="text-left transition-colors hover:text-ink-light"
              >
                {link.label}
              </button>
            ) : (
              <a
                href={link.href}
                className="transition-colors hover:text-ink-light"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
