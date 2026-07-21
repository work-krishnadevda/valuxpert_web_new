import {
  useEffect,
  useRef,
  type FormEvent,
  type ReactNode,
} from "react";
import { X, Mail, Phone, MapPin, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { useContactModal } from "@/lib/ContactModalContext";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactModal() {
  const { isOpen, close } = useContactModal();

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { status, errors, errorMessage, submit, reset } = useContactForm({
    sourceForm: "Demo Request Modal",
  });

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const formEl = formRef.current;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      modalRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
      },
    );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);

      // Modal fully closed — clear status/errors so reopening starts fresh.
      reset();
      formEl?.reset();
    };
  }, [isOpen, close, reset]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      industry: String(data.get("industry") || ""),
      team: String(data.get("team") || ""),
      software: String(data.get("software") || ""),
      message: String(data.get("message") || ""),
    };

    const ok = await submit(values);
    if (ok) form.reset();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md p-4 lg:p-8"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) close();
      }}
    >
      <div className="flex h-full items-center justify-center">
        <div
          ref={modalRef}
          className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_rgba(15,23,42,.22)]"
        >
          <button
            onClick={close}
            aria-label="Close contact form"
            className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <div
  ref={scrollRef}
  data-lenis-prevent
  className="max-h-[calc(100vh-40px)] overflow-y-auto premium-scroll"
>
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
              {/* LEFT PANEL */}

              <div className="relative overflow-hidden bg-gradient-to-br from-[#6D5EF6] via-[#7567FF] to-[#5443F5] p-8 text-white lg:p-12">
                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-6 inline-flex w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
                    Contact Sales
                  </span>

                  <h2 className="text-4xl font-bold leading-tight">
                    Let's transform your valuation workflow.
                  </h2>

                  <p className="mt-5 text-white/85 leading-7">
                    Talk to our product specialists to discover how ValuXpert
                    streamlines inspections, report generation, field
                    operations, HRMS and valuation management.
                  </p>

                  <div className="mt-10 space-y-4">
                    <Feature text="Live product walkthrough" />
                    <Feature text="Implementation guidance" />
                    <Feature text="Dedicated onboarding support" />
                  </div>

                  <div className="mt-12 space-y-4">
                    <ContactCard
                      icon={<Mail size={18} />}
                      title="Email"
                      value="info@valuxpert.in"
                    />

                    <ContactCard
                      icon={<Phone size={18} />}
                      title="Phone"
                      value="+91 87709 24535"
                    />

                    <ContactCard
                      icon={<MapPin size={18} />}
                      title="Office"
                      value="Ratlam, Madhya Pradesh"
                    />
                  </div>

                  <div className="mt-auto pt-12 text-sm text-white/80">
                    Trusted by valuation companies across India.
                  </div>
                </div>

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              </div>

              {/* RIGHT PANEL */}

              <div className="bg-[#F8FAFC] p-6 sm:p-8 lg:p-12">
                {status === "success" ? (
                  <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                    <CheckCircle2 size={72} className="text-green-500" aria-hidden="true" />

                    <h3 className="mt-8 text-3xl font-bold text-slate-900">
                      Thank You!
                    </h3>

                    <p className="mt-4 max-w-md text-slate-600 leading-7">
                      Your request has been received successfully. A ValuXpert
                      consultant will contact you shortly to schedule your
                      personalized demo.
                    </p>

                    <button
                      onClick={close}
                      className="mt-10 rounded-xl bg-[#6D5EF6] px-8 py-4 font-semibold text-white transition hover:bg-[#5D4EF0]"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">
                        Request a Live Demo
                      </h3>

                      <p className="mt-3 text-slate-600">
                        Fill out the form and our team will reach out within one
                        business day.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      {" "}
                      <Field
                        label="Full Name"
                        name="name"
                        placeholder="John Doe"
                        required
                        error={errors.name}
                      />
                      <Field
                        label="Company"
                        name="company"
                        placeholder="ABC Valuations"
                        required
                      />
                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        error={errors.email}
                      />
                      <Field
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        error={errors.phone}
                      />
                      <SelectField label="Industry" name="industry">
                        <option value="">Select Industry</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Mortgage</option>
                        <option>NBFC</option>
                        <option>Banking</option>
                        <option>Government</option>
                        <option>Others</option>
                      </SelectField>
                      <SelectField label="Team Size" name="team">
                        <option value="">Select Team Size</option>
                        <option>1–10</option>
                        <option>10–50</option>
                        <option>50–100</option>
                        <option>100–500</option>
                        <option>500+</option>
                      </SelectField>
                    </div>

                    <Field
                      label="Current Software"
                      name="software"
                      placeholder="Excel, Custom ERP, etc."
                    />

                    <label className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Message
                      </span>

                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Tell us about your valuation workflow..."
                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition focus:border-[#6D5EF6] focus:ring-4 focus:ring-[#6D5EF6]/10 resize-none"
                      />
                    </label>

                    <label className="flex items-start gap-3 text-sm text-slate-600">
                      <input
                        required
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-[#6D5EF6]"
                      />

                      <span>
                        I agree to be contacted by ValuXpert regarding my
                        enquiry.
                      </span>
                    </label>

                    {status === "error" && errorMessage && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
                      >
                        <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      aria-busy={status === "loading"}
                      className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#6D5EF6] text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#5B4BF1] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        "Request Live Demo →"
                      )}
                    </button>

                    <p className="text-center text-sm text-slate-500">
                      No spam. We'll reply within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={18} className="text-green-300" />

      <span className="text-white/90">{text}</span>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
          {icon}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-white/70">
            {title}
          </p>

          <p className="mt-1 text-sm font-medium text-white break-words">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={AUTOCOMPLETE_MAP[name] ?? "on"}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`h-14 rounded-2xl border bg-white px-5 text-slate-700 outline-none transition focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-100"
            : "border-slate-200 focus:border-[#6D5EF6] focus:ring-[#6D5EF6]/10"
        }`}
      />
      {error && (
        <span id={errorId} className="text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>

      <select
        name={name}
        className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-slate-700 outline-none transition focus:border-[#6D5EF6] focus:ring-4 focus:ring-[#6D5EF6]/10"
      >
        {children}
      </select>
    </label>
  );
}

const AUTOCOMPLETE_MAP: Record<string, string> = {
  name: "name",
  company: "organization",
  email: "email",
  phone: "tel",
};
