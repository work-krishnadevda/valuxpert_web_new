import { Container } from '@/components/ui/Container';
import { useBookingModal } from '@/lib/BookingModalContext';

interface InlineCTAProps {
  title: string;
  description: string;
  buttonLabel?: string;
}

export function InlineCTA({ title, description, buttonLabel = 'Request Demo Presentation' }: InlineCTAProps) {
  const { open } = useBookingModal();
  return (
    <Container>
      <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-surface-light2 p-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h3 className="text-h3 !text-xl text-ink-light">{title}</h3>
          <p className="mt-2 text-body text-ink-muted">{description}</p>
        </div>
        <button type="button" onClick={open} className="btn-primary whitespace-nowrap">
          {buttonLabel} →
        </button>
      </div>
    </Container>
  );
}
