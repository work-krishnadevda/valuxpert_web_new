import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { CheckCircle2, Loader2, Radio, ArrowDown } from 'lucide-react';

interface DeskStep {
  label: string;
  detail: string;
}

interface Desk {
  id: string;
  role: string;
  steps: DeskStep[];
  note: { title: string; body: string };
}

const desks: Desk[] = [
  {
    id: 'field-engineer',
    role: 'Field Engineer',
    steps: [
      { label: 'Locating via GNSS', detail: 'Awaiting satellite lock…' },
      { label: 'Geofence matched', detail: 'Aim camera at property boundary.' },
      { label: 'Watermarked site capture', detail: 'Photo stamped with coordinates + timestamp.' },
      { label: 'Geofence compliance check passed', detail: 'Location variance within tolerance.' },
      { label: 'Watermarked survey locked & encrypted', detail: 'Case file advances to Draft Manager.' },
    ],
    note: {
      title: 'Anti-Fraud Tamper Safeguard',
      body: 'ValuXpert enforces a strict hardware-level photogrammetry lock. Device album uploads are disabled inside the FE App — the site photo is stamped on the fly with geographic indices fetched directly from hardware GPS sensors, blocking mock image tampering.',
    },
  },
  {
    id: 'draft-manager',
    role: 'Draft Manager',
    steps: [
      { label: 'Field packet received', detail: 'GPS survey + photos synced from Field Engineer.' },
      { label: 'Guideline rate matched', detail: 'Cross-referencing district circle-rate tables.' },
      { label: 'Dimension calculations complete', detail: 'Built-up area reconciled against site photos.' },
      { label: 'Draft dossier compiled', detail: 'Case advances to Report Checker for QA.' },
    ],
    note: {
      title: 'Bank-Specific Formula Engine',
      body: 'Every calculation automatically applies the receiving bank\u2019s own valuation formula and formatting rules, so drafts never need manual reformatting per bank.',
    },
  },
  {
    id: 'lcto',
    role: 'LCTO',
    steps: [
      { label: 'Compliance queue opened', detail: 'Draft dossier received from Report Checker.' },
      { label: 'Legal value cross-check', detail: 'Historical boundary and title records verified.' },
      { label: 'GPS metrics audited', detail: 'Field coordinates re-validated against survey data.' },
      { label: 'Cryptographic sign-off applied', detail: 'Dossier sealed and routed to Bank Partner.' },
    ],
    note: {
      title: 'Immutable Audit Log',
      body: 'Every checkpoint the LCTO clears is written to a tamper-evident audit trail, visible to bank compliance teams on request.',
    },
  },
];

export function ActiveDeskSandbox() {
  const [activeDeskId, setActiveDeskId] = useState(desks[0].id);
  const [stepIndex, setStepIndex] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const desk = desks.find((d) => d.id === activeDeskId) ?? desks[0];

  useEffect(() => {
    setStepIndex(0);
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < desk.steps.length - 1 ? prev + 1 : prev));
    }, 1400);
    return () => clearInterval(interval);
  }, [activeDeskId, desk.steps.length]);

  // "Scroll down to test" hint: appears whenever a test/desk is selected,
  // and dismisses naturally the moment the visitor actually scrolls.
  useEffect(() => {
    setShowScrollHint(true);
    let startY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - startY) > 12) {
        setShowScrollHint(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    startY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timeout = setTimeout(() => setShowScrollHint(false), 4000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [activeDeskId]);

  const handleSelectDesk = (id: string) => {
    setActiveDeskId(id);
  };

  return (
    <section className="relative overflow-hidden bg-surface-dark1 section-pad">
      <div className="glow-orb-brand left-0 top-0 h-[360px] w-[480px] -translate-x-1/3 -translate-y-1/3" />
      <Container className="relative flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="eyebrow-dark w-fit">ValuXpert Multi-Terminal Sandbox</span>
            <h2 className="mt-4 text-h2 !text-3xl text-white">
              Active Desk: <span className="text-brand-400">{desk.role}</span>
            </h2>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-400">
            <Radio size={14} className="animate-pulse" /> Live Crypto Tunnel Secured (Port 3000)
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {desks.map((d) => (
            <button
              key={d.id}
              onClick={() => handleSelectDesk(d.id)}
              className={`rounded-control px-4 py-2 text-nav transition-colors ${
                d.id === activeDeskId ? 'bg-brand-500 text-white' : 'border border-white/15 text-ink-dark/70 hover:bg-white/5'
              }`}
            >
              {d.role}
            </button>
          ))}
        </div>

        {showScrollHint ? (
          <div
            role="status"
            className="pointer-events-none sticky top-24 z-20 flex w-fit items-center gap-2 self-center rounded-pill border border-white/15 bg-surface-dark2/95 px-4 py-2 text-xs font-semibold text-white shadow-nav backdrop-blur-sm animate-gentle-float"
          >
            Scroll down to test
            <ArrowDown size={14} className="text-brand-400" />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-card border border-white/10 bg-surface-dark2 p-6 md:p-8">
            <ul className="flex flex-col gap-4">
              {desk.steps.map((step, i) => {
                const done = i < stepIndex;
                const current = i === stepIndex;
                return (
                  <li key={step.label} className="flex items-start gap-3">
                    <span className="mt-0.5">
                      {done ? (
                        <CheckCircle2 size={18} className="text-brand-400" />
                      ) : current ? (
                        <Loader2 size={18} className="animate-spin text-accent-action" />
                      ) : (
                        <span className="block h-[18px] w-[18px] rounded-full border border-white/20" />
                      )}
                    </span>
                    <div>
                      <p className={`text-sm font-semibold ${done || current ? 'text-white' : 'text-ink-dark/40'}`}>
                        {step.label}
                      </p>
                      {current ? <p className="text-xs text-ink-dark/60">{step.detail}</p> : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-card border border-white/10 bg-surface-dark2 p-6 md:p-8">
            <p className="text-nav font-semibold text-brand-400">{desk.note.title}</p>
            <p className="text-sm leading-relaxed text-ink-dark/70">{desk.note.body}</p>
            {stepIndex === desk.steps.length - 1 ? (
              <div className="mt-2 rounded-cell border border-brand-500/30 bg-brand-500/10 p-4 text-xs text-brand-400">
                SOP Pipeline State: case file progressed to the next role in the chain.
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
