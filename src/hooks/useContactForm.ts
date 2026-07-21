import { useCallback, useRef, useState } from "react";
import { sendContactEmail, type ContactFormPayload } from "@/lib/emailService";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

interface UseContactFormOptions {
  sourceForm: string;
}

interface FormValues {
  [key: string]: string;
}

function validate(values: FormValues) {
  const errors: Record<string, string> = {};

  if (!values.name?.trim()) errors.name = "Name is required.";

  if (!values.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (values.phone && !/^[+()\-\s\d]{7,}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  return errors;
}

export function useContactForm({ sourceForm }: UseContactFormOptions) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const submittingRef = useRef(false);

  const reset = useCallback(() => {
    setStatus("idle");
    setErrors({});
    setErrorMessage(null);
    submittingRef.current = false;
  }, []);

  const submit = useCallback(
    async (values: FormValues) => {
      // Prevent duplicate/rapid-fire submissions.
      if (submittingRef.current) return false;

      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setStatus("error");
        setErrorMessage("Please fix the highlighted fields and try again.");
        return false;
      }

      submittingRef.current = true;
      setStatus("loading");
      setErrorMessage(null);

      const payload: ContactFormPayload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        subject: values.subject,
        service: values.industry || values.service,
        message: values.message,
        sourceForm,
      };

      try {
        await sendContactEmail(payload);
        setStatus("success");
        return true;
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          "We couldn't send your request. Please try again, or email us directly."
        );
        return false;
      } finally {
        submittingRef.current = false;
      }
    },
    [sourceForm]
  );

  return { status, errors, errorMessage, submit, reset };
}
