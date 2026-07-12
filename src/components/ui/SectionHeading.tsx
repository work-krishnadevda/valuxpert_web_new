interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink-light';
  const descColor = tone === 'dark' ? 'text-ink-dark/70' : 'text-ink-muted';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`} data-reveal="heading">
      <span className={tone === 'dark' ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
      <h2 className={`text-h2 text-balance ${titleColor}`}>{title}</h2>
      {description ? <p className={`text-body ${descColor}`}>{description}</p> : null}
    </div>
  );
}
