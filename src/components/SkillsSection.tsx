const coreStack = ["TypeScript", "React", "Node.js", "Express.js", "MongoDB", "Spring Boot"];

const skillsData = [
  {
    number: "01",
    title: "Languages",
    description: "Core programming languages used across web and software projects.",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C", "PHP"],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Building responsive interfaces and modern user experiences.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Backend",
    description: "Developing APIs, server-side logic, and maintainable application structure.",
    skills: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    number: "04",
    title: "Databases & Tools",
    description:
      "Working with data storage, version control, containerization, and development workflows.",
    skills: ["MongoDB", "MySQL", "MSSQL", "Git", "Docker"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell skills-section" aria-labelledby="skills-heading">
      <header className="skills-header">
        <p className="mb-4 font-mono text-xs uppercase text-coral">// Technical foundation</p>
        <h2 id="skills-heading" className="text-3xl font-semibold sm:text-5xl">
          Tools for the full stack.
        </h2>
        <p className="skills-introduction">
          A practical engineering toolkit built through hands-on work across frontend, backend, and
          data-driven applications.
        </p>
      </header>
      <div className="skills-core" aria-labelledby="core-stack-heading">
        <h3 id="core-stack-heading" className="skills-core-label">
          Core Stack
        </h3>
        <ul className="skills-tags skills-core-tags">
          {coreStack.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skills-categories">
        {skillsData.map((category) => (
          <article key={category.number} className="skills-category">
            <div className="skills-category-heading">
              <span className="skills-index font-mono" aria-hidden="true">
                {category.number}
              </span>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <p className="skills-description">{category.description}</p>
            <ul className="skills-tags" aria-label={`${category.title} technologies`}>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
