import { ContactSection } from "../components/ContactSection";
import { SpecializationSection } from "../components/SpecializationSection";
import { SkillsSection } from "../components/SkillsSection";
import { AboutSection } from "../components/AboutSection";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  ServerCog,
  ShieldCheck,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdhullah Noufal | Aspiring Software Engineer" },
      {
        name: "description",
        content:
          "Full-stack developer and University of Moratuwa IT undergraduate seeking a Software Engineering Internship.",
      },
      { property: "og:title", content: "Abdhullah Noufal | Aspiring Software Engineer" },
      {
        property: "og:description",
        content:
          "Explore Abdhullah's full-stack projects, technical skills, and software engineering journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"];
const projects = [
  {
    number: "01",
    title: "Auto Matrix",
    kicker: "Second Year Software Project",
    role: "Full-Stack Developer",
    description:
      "A MERN multi-vendor marketplace for vehicle parts, designed around part compatibility, role-aware workflows, and automated order management.",
    features: [
      "Multi-vendor architecture",
      "Vehicle-specific compatibility",
      "Role-based access",
      "REST API architecture",
      "Docker deployment",
      "GitHub Actions / CI/CD",
    ],
    stack: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB", "Docker"],
    featured: true,
  },
  {
    number: "02",
    title: "Social Media Post Automation",
    kicker: "Individual Project",
    role: "Under development",
    description:
      "A MERN application for scheduling posts across social accounts. The current build covers post creation, account selection, and scheduling interfaces.",
    features: ["Post creation interface", "Account selection", "Scheduling management"],
    stack: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB"],
    featured: false,
  },
  {
    number: "03",
    title: "Green Cart",
    kicker: "Grocery E-Commerce · Individual Project",
    role: "Backend Developer",
    description:
      "The backend for a grocery e-commerce platform, covering products, users, orders, and inventory through RESTful APIs and database integration.",
    features: ["Product management", "User management", "Order management", "Inventory operations"],
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript"],
    featured: false,
  },
];

function Logo() {
  return (
    <a
      href="#home"
      className="font-display text-lg font-bold text-foreground"
      aria-label="Abdhullah Noufal, home"
    >
      AN<span className="text-coral">.</span>
    </a>
  );
}
function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-heading-spacing grid gap-4 md:grid-cols-2 md:items-end">
      <div>
        <p className="mb-3 font-mono text-xs uppercase text-coral">// {eyebrow}</p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-5xl">{title}</h2>
      </div>
      {body && (
        <p className="max-w-xl text-sm leading-7 text-muted-foreground md:justify-self-end">
          {body}
        </p>
      )}
    </div>
  );
}

const heroRoles = ["Software Engineer", "Full-Stack Developer", "Backend Developer"] as const;

function HeroRole() {
  const [text, setText] = useState<string>(heroRoles[0]);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let roleIndex = 0;
    let characterCount = heroRoles[0].length;
    let deleting = true;

    const tick = () => {
      const phrase = heroRoles[roleIndex] ?? heroRoles[0];
      characterCount += deleting ? -1 : 1;
      setText(phrase.slice(0, characterCount));

      let delay = deleting ? 40 : 75;
      if (deleting && characterCount === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % heroRoles.length;
        delay = 400;
      } else if (!deleting && characterCount === phrase.length) {
        deleting = true;
        delay = 1600;
      }
      timeout = setTimeout(tick, delay);
    };

    const restart = () => {
      clearTimeout(timeout);
      roleIndex = 0;
      characterCount = heroRoles[0].length;
      deleting = true;
      setText(heroRoles[0]);
      if (!motionPreference.matches) timeout = setTimeout(tick, 1600);
    };

    restart();
    motionPreference.addEventListener("change", restart);
    return () => {
      clearTimeout(timeout);
      motionPreference.removeEventListener("change", restart);
    };
  }, []);

  return (
    <p className="mt-6 text-lg font-semibold sm:text-xl">
      <span className="sr-only">Software Engineer, Full-Stack Developer, Backend Developer</span>
      <span className="hero-role" aria-hidden="true">
        <span className="hero-role-spacer">Full-Stack Developer<span className="hero-role-cursor">|</span></span>
        <span className="hero-role-text">{text}<span className="hero-role-cursor">|</span></span>
      </span>
    </p>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const shouldUseLightMode = savedTheme === "light";
    setLightMode(shouldUseLightMode);
    document.documentElement.classList.toggle("light", shouldUseLightMode);
  }, []);
  const toggleTheme = () => {
    const nextLightMode = !lightMode;
    setLightMode(nextLightMode);
    document.documentElement.classList.toggle("light", nextLightMode);
    window.localStorage.setItem("portfolio-theme", nextLightMode ? "light" : "dark");
  };
  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    setFormError("");
    setFormSuccess("");
    if (
      !name ||
      name.length > 100 ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      email.length > 255 ||
      !subject ||
      subject.length > 120 ||
      !message ||
      message.length > 1500
    ) {
      setFormError(
        "Please complete every field with a valid email and keep the message under 1,500 characters.",
      );
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xnpqkjyv", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      setFormSuccess("Thanks for your message. I will get back to you soon.");
      formElement.reset();
    } catch {
      setFormError("Your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav
          className="section-shell flex h-18 items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo />
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
              aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"}
              title={lightMode ? "Switch to dark theme" : "Switch to light theme"}
            >
              {lightMode ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
          </div>
          <a
            href="/Abdhullah-Noufal-CV.pdf"
            download
            className="hidden items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-semibold hover:border-coral hover:text-coral md:flex"
          >
            <Download className="size-4" /> Download CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-10 place-items-center rounded-md border border-border md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background px-4 py-5 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 text-sm font-semibold"
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex w-full items-center gap-2 border-b border-border py-3 text-left text-sm font-semibold text-cyan"
              aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"}
            >
              {lightMode ? <Moon className="size-4" /> : <Sun className="size-4" />}
              {lightMode ? "Dark theme" : "Light theme"}
            </button>
            <a
              href="/Abdhullah-Noufal-CV.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-sm font-semibold text-coral"
            >
              <Download className="size-4" /> Download CV
            </a>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="hero-section"
        >
          <div className="section-shell hero-layout">
          <div className="hero-copy relative z-10">
            <div className="hero-availability mb-6 inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1.5 text-xs font-semibold text-coral">
              <span className="hero-status-dot size-1.5 rounded-full bg-coral" /> Seeking a Software Engineering
              Internship
            </div>
            <p className="mb-3 font-mono text-sm text-muted-foreground">Hello, I&apos;m</p>
            <h1 className="hero-name font-bold">
              <span className="hero-name-line">Abdullah</span>
              <span className="hero-name-line text-coral">Noufal.</span>
            </h1>
            <HeroRole />
            <p className="hero-description mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Information Technology undergraduate at the University of Moratuwa, focused on
              building reliable software and growing through practical engineering projects.
            </p>
            <div className="hero-actions mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hero-button"
              >
                View my projects <ArrowDownRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-5 py-3 text-sm font-bold hero-button"
              >
                Contact me <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="hero-socials mt-7 flex flex-wrap items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/abdhullah-mn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hero-social-link"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdhullah-noufal-042408336"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hero-social-link"
              >
                <Linkedin className="size-5" />
              </a>
              <a href="mailto:abdnou076@gmail.com" aria-label="Email" className="hero-social-link">
                <Mail className="size-5" />
              </a>
              <span className="h-px w-12 bg-border" />
              <span className="font-mono text-[11px]">Colombo, Sri Lanka</span>
            </div>
          </div>
          <div className="hero-portrait">
              <img
                src="/portrait-cutout.png"
                alt="Abdullah Noufal wearing a suit"
                width={1254}
                height={1254}
                fetchPriority="high"
                decoding="async"
                className="hero-portrait-image"
              />
          </div>
          </div>
        </section>

        <AboutSection />

        <SkillsSection />

        <section id="projects" className="section-rhythm border-y border-border bg-surface/40">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects that show the work."
              body="Practical applications spanning full-stack architecture, frontend product thinking, backend APIs, databases, and delivery workflows."
            />
            <div className="space-y-5">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`hover-lift group rounded-lg border bg-card p-6 sm:p-9 ${project.featured ? "border-coral/50" : "border-border"}`}
                >
                  <div className="grid gap-8 lg:grid-cols-[.8fr_1.4fr_.8fr]">
                    <div>
                      <p className="font-mono text-xs text-coral">
                        {project.number} / {project.kicker}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold">{project.title}</h3>
                      <p className="mt-3 inline-flex rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase text-muted-foreground">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {project.description}
                      </p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs">
                            <CheckCircle2 className="size-3.5 text-cyan" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between gap-7">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground group-hover:text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://github.com/abdhullah-mn"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between border-t border-border pt-4 text-xs font-bold hover:text-cyan"
                      >
                        View GitHub profile <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SpecializationSection />

        <section className="section-rhythm border-y border-border bg-card">
          <div className="section-shell grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div className="flex items-center gap-4">
              <Terminal className="size-7 text-cyan" />
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Engineering philosophy
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold sm:text-6xl">
                Build. <span className="text-coral">Learn.</span> Improve.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                I aim to build reliable software, apply sound engineering principles, solve
                meaningful problems, and refine my practice through clean architecture and SOLID
                thinking.
              </p>
            </div>
          </div>
        </section>

        <ContactSection
          onSubmit={submitContact}
          error={formError}
          success={formSuccess}
          isSubmitting={isSubmitting}
        />
      </main>
      <footer className="border-t border-border bg-card">
        <div className="footer-rhythm section-shell flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-muted-foreground">
              B.Sc. (Hons) in IT Student · Aspiring Software Engineer · Full-Stack Developer
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-4 text-muted-foreground">
              <a href="https://github.com/abdhullah-mn" aria-label="GitHub">
                <Github className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdhullah-noufal-042408336"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a href="mailto:abdnou076@gmail.com" aria-label="Email">
                <Mail className="size-4" />
              </a>
              <a href="tel:+94752977706" aria-label="Phone">
                <Phone className="size-4" />
              </a>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">
              © 2026 Abdhullah Noufal. Built with purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  maxLength,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  maxLength: number;
  type?: string;
}) {
  return (
    <label className="mt-5 block text-xs font-semibold first:mt-0 sm:first:mt-5">
      {label}
      <input
        name={name}
        type={type}
        maxLength={maxLength}
        required
        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-hidden focus:border-cyan"
        placeholder={placeholder}
      />
    </label>
  );
}
