export function AboutSection() {
  return (
    <section
      id="about"
      className="about-section section-rhythm border-y border-border"
      aria-labelledby="about-heading"
    >
      <div className="section-shell about-layout">
        <div className="about-editorial">
          <p className="mb-5 font-mono text-xs uppercase text-coral">// About</p>
          <h2 id="about-heading" className="about-heading">
            Building practical software,
            <br />
            one problem at a time.
          </h2>
          <div className="about-description">
            <p>
              I&apos;m an Information Technology undergraduate at the{" "}
              <strong>University of Moratuwa</strong>, focused on software engineering and
              full-stack development.
            </p>
            <p>
              I enjoy taking ideas from problem to implementation — designing APIs, building
              responsive interfaces, working with databases, and structuring applications so they
              remain clear and maintainable as they grow.
            </p>
            <p>
              Most of my learning happens through building. From MERN applications to Java and
              Spring Boot projects, I use each project to strengthen how I approach architecture,
              debugging, data, and software design.
            </p>
            <p>
              I&apos;m currently looking for a <strong>Software Engineering Internship</strong>{" "}
              where I can contribute to real products, work alongside experienced engineers, and
              continue growing as a developer.
            </p>
          </div>
          <ol className="about-focus" aria-label="Engineering focus">
            {["Full-Stack Development", "Backend Engineering", "Software Design"].map(
              (focus, index) => (
                <li key={focus}>
                  <span className="about-focus-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span>{focus}</span>
                </li>
              ),
            )}
          </ol>
        </div>
        <aside className="about-education" aria-labelledby="education-heading">
          <h3 id="education-heading" className="about-education-label">
            Education
          </h3>
          <ol className="about-academic-list">
            <li className="about-academic-entry">
              <div className="about-institution">
                <img
                  src="/university-of-moratuwa-logo.webp"
                  alt="University of Moratuwa logo"
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="about-logo"
                />
                <h4>University of Moratuwa</h4>
              </div>
              <p className="about-degree">
                B.Sc. (Hons) in
                <br />
                Information Technology
              </p>
              <p className="about-academic-dates">2024 — 2028</p>
              <span className="about-status">Currently studying</span>
              <p className="about-graduation">
                Expected graduation <time dateTime="2028-05">May 2028</time>
              </p>
            </li>
            <li className="about-academic-entry about-school">
              <div className="about-institution">
                <img
                  src="/zahira-college-logo.webp"
                  alt="Zahira College, Colombo logo"
                  width={204}
                  height={192}
                  loading="lazy"
                  decoding="async"
                  className="about-logo"
                />
                <h4>Zahira College, Colombo</h4>
              </div>
              <p className="about-school-degree">Secondary Education</p>
              <p className="about-academic-dates">2018 — 2021</p>
            </li>
          </ol>
        </aside>
      </div>
    </section>
  );
}
