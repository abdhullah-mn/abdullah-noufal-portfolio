import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

type ContactSectionProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
  success: string;
  isSubmitting: boolean;
};

const contactLinks = [
  {
    label: "LinkedIn",
    text: "Connect professionally",
    href: "https://www.linkedin.com/in/abdhullah-noufal-042408336",
  },
  { label: "GitHub", text: "Explore my work", href: "https://github.com/abdhullah-mn" },
  { label: "Phone", text: "075 297 7706", href: "tel:+94752977706" },
];

export function ContactSection({ onSubmit, error, success, isSubmitting }: ContactSectionProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText("abdnou076@gmail.com");
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    resetTimer.current = setTimeout(() => setCopyStatus("idle"), 2500);
  };

  return (
    <section
      id="contact"
      className="section-shell contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-layout">
        <div className="contact-editorial">
          <p className="mb-4 font-mono text-xs uppercase text-coral">// Contact</p>
          <h2 id="contact-heading" className="contact-heading">
            Let’s build something meaningful.
          </h2>
          <p className="contact-introduction">
            I&apos;m currently open to Software Engineering Internship opportunities and
            conversations about building useful software.
          </p>
          <p className="contact-availability">
            <span aria-hidden="true" />
            Open to Software Engineering Internships
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p className="contact-label">Email</p>
              <div className="contact-email-row">
                <a href="mailto:abdnou076@gmail.com" className="contact-value">
                  abdnou076@gmail.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="contact-copy"
                  aria-label="Copy email address"
                >
                  {copyStatus === "copied" ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <span className="sr-only" role="status">
                {copyStatus === "copied"
                  ? "Email address copied."
                  : copyStatus === "failed"
                    ? "Could not copy. Please select and copy the email address manually."
                    : ""}
              </span>
              {copyStatus === "failed" && (
                <p className="contact-copy-error">
                  Please select and copy the email address manually.
                </p>
              )}
            </div>
            {contactLinks.map((link) => (
              <div
                key={link.label}
                className={`contact-detail${link.label === "Phone" ? " contact-phone" : ""}`}
              >
                <p className="contact-label">{link.label}</p>
                <a
                  href={link.href}
                  className="contact-link"
                  target={link.href.startsWith("https:") ? "_blank" : undefined}
                  rel={link.href.startsWith("https:") ? "noreferrer" : undefined}
                >
                  <span>{link.text}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
          <p className="contact-location">Colombo, Sri Lanka</p>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-form"
          noValidate
          aria-labelledby="message-heading"
          aria-busy={isSubmitting}
        >
          <h3 id="message-heading" className="contact-form-heading">
            Send a message
          </h3>
          <div className="contact-fields-pair">
            <ContactField
              name="name"
              label="Name"
              placeholder="Your name"
              maxLength={100}
              autoComplete="name"
            />
            <ContactField
              name="email"
              label="Email"
              placeholder="you@example.com"
              maxLength={255}
              type="email"
              autoComplete="email"
            />
          </div>
          <ContactField
            name="subject"
            label="Subject"
            placeholder="What's this about?"
            maxLength={120}
          />
          <label className="contact-field">
            Message
            <textarea
              name="message"
              maxLength={1500}
              required
              rows={6}
              placeholder="Write your message..."
            />
          </label>
          {error && (
            <p role="alert" className="mt-4 text-xs text-coral">
              {error}
            </p>
          )}
          {success && (
            <p role="status" className="mt-4 text-sm text-foreground">
              {success}
            </p>
          )}
          <button type="submit" disabled={isSubmitting} className="contact-submit">
            {isSubmitting ? "Sending..." : "Send message"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <p className="contact-form-note">Your message is sent securely through Formspree.</p>
        </form>
      </div>
    </section>
  );
}

function ContactField({
  label,
  ...inputProps
}: {
  label: string;
  name: string;
  placeholder: string;
  maxLength: number;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="contact-field">
      {label}
      <input {...inputProps} required />
    </label>
  );
}
