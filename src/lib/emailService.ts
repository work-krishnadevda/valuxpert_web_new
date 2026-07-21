import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;

let initialized = false;

function ensureInitialized() {
  if (initialized || !PUBLIC_KEY) return;
  emailjs.init({ publicKey: PUBLIC_KEY });
  initialized = true;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  service?: string;
  message?: string;
  sourceForm: string;
  sourcePage?: string;
}

export class EmailConfigError extends Error {}

/**
 * Sends a contact / demo-request submission via EmailJS.
 * Every field the template can use is populated, including context that
 * helps sales triage the lead (page, referrer, browser, timestamp).
 */
export async function sendContactEmail(payload: ContactFormPayload) {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new EmailConfigError(
      "EmailJS is not configured. Set VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID."
    );
  }

  ensureInitialized();

  const templateParams = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone || "Not provided",
    company: payload.company || "Not provided",
    subject: payload.subject || "New website enquiry",
    service: payload.service || "Not specified",
    message: payload.message || "Not provided",
    sent_at: new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
    source_form: payload.sourceForm,
    source_page:
      payload.sourcePage ||
      (typeof window !== "undefined" ? window.location.href : "unknown"),
    browser: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
    referrer:
      typeof document !== "undefined" && document.referrer
        ? document.referrer
        : "Direct",
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
