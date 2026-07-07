import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useContactModal } from '@/lib/ContactModalContext';

export function ContactModal() {
  const { isOpen, close } = useContactModal();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (overlay && panel) {
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      gsap.fromTo(
        panel,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
      );
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-dark1/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) close();
      }}
    >
      <div ref={panelRef} className="relative grid w-full max-w-3xl grid-cols-1 gap-8 rounded-card bg-white p-8 md:grid-cols-2 md:p-10">
        <button
          type="button"
          onClick={close}
          aria-label="Close contact form"
          className="absolute right-5 top-5 text-ink-muted transition-colors hover:text-ink-light"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col gap-6">
          <div>
            <h3 id="contact-modal-title" className="text-h2 !text-3xl text-ink-light">
              Get in Touch
            </h3>
            <p className="mt-3 text-body text-ink-muted">
              Have questions about how ValuXpert can optimize your specific workflow? Our team of experts is ready to
              help.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ContactRow icon={<Mail size={18} />} label="info@valuxpert.in" />
            <ContactRow icon={<Phone size={18} />} label="+91 877 092 4535" />
            <ContactRow icon={<MapPin size={18} />} label="A12 Takshila Parisar, 80 Feet Road, Ratlam, Madhya Pradesh 457001" />
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-start justify-center gap-3 rounded-cell bg-brand-500/10 p-6">
            <p className="text-h3 text-ink-light">Thank you — request received.</p>
            <p className="text-body text-ink-muted">A ValuXpert specialist will reach out within one business day.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name" name="name" placeholder="John Doe" />
              <Field label="Company Name" name="company" placeholder="Acme Valuations" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Email Address" name="email" type="email" placeholder="john@company.com" />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+91 99999 99999" />
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-eyebrow uppercase text-ink-muted">Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="rounded-cell border border-ink-light/10 bg-surface-light1 px-4 py-3 text-body text-ink-light outline-none focus:border-brand-500"
              />
            </label>
            <button type="submit" className="rounded-control bg-brand-500 px-6 py-3.5 text-nav font-semibold text-white transition-colors hover:bg-brand-600">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function ContactRow({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-cell bg-surface-light1 px-4 py-3 text-nav text-ink-light">
      <span className="text-brand-500">{icon}</span>
      {label}
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-eyebrow uppercase text-ink-muted">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded-cell border border-ink-light/10 bg-surface-light1 px-4 py-3 text-body text-ink-light outline-none focus:border-brand-500"
      />
    </label>
  );
}
