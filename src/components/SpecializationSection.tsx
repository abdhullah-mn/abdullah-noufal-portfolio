const capabilities = [
  {
    number: "01",
    title: "Frontend Engineering",
    description: "Responsive interfaces, component architecture, and accessible user experiences.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Systems",
    description:
      "REST APIs, authentication, business logic, and maintainable server-side applications.",
    technologies: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    number: "03",
    title: "Data & Persistence",
    description: "Practical data modeling across relational and document databases.",
    technologies: ["MongoDB", "MySQL", "MSSQL"],
  },
  {
    number: "04",
    title: "Delivery & Engineering Workflow",
    description: "Version control, containerized development, and CI/CD-oriented workflows.",
    technologies: ["Git", "Docker", "CI/CD"],
  },
];

export function SpecializationSection() {
  return (
    <section
      id="services"
      className="section-shell specialization-section"
      aria-labelledby="specialization-heading"
    >
      <header className="specialization-header">
        <p className="mb-4 font-mono text-xs uppercase text-coral">// Specialization</p>
        <h2 id="specialization-heading" className="text-3xl font-semibold sm:text-5xl">
          Engineering across the stack.
        </h2>
        <p className="specialization-introduction">
          I build across interface, backend, data, and delivery—focusing on software that is
          practical, maintainable, and easy to evolve.
        </p>
      </header>
      <div className="specialization-grid">
        {capabilities.map((capability) => (
          <article key={capability.number} className="specialization-capability">
            <span className="specialization-index font-mono" aria-hidden="true">
              {capability.number}
            </span>
            <div className="specialization-content">
              <h3>{capability.title}</h3>
              <p className="specialization-description">{capability.description}</p>
              <ul
                className="specialization-technologies"
                aria-label={`${capability.title} technologies`}
              >
                {capability.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
