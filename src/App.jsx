import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Transport ERP",
    category: "ERP / Business Management",
    description:
      "A centralized ERP solution designed to manage transportation operations, business data, and day-to-day workflows.",
    tags: ["Python", "Django","Rest","React","MySql"],
  },
  {
    number: "02",
    title: "Bank Management System",
    category: "Financial Management",
    description:
      "A structured banking application for managing customers, accounts, and transaction-related operations.",
    tags: ["ASP.NET Core","Api","Swagger","Docker","React.js", "C#", "PostgreSql"],
  },
  {
    number: "03",
    title: "Petrol Pump Management",
    category: "Business Management",
    description:
      "A custom management application designed to organize petrol pump operations and business records.",
    tags: ["Python", "Django","Rest","React", "Database","MySql"],
  },
  {
    number: "04",
    title: "Agency Website",
    category: "Business Website",
    description:
      "A modern website designed to present an agency's services, information, and digital presence.",
    tags: ["React", "JavaScript", "CSS","html"],
  },
  {
    number: "05",
    title: "Revo Polymers",
    category: "Industrial Website",
    description:
      "A professional business website designed to present an industrial company's products and information.",
    tags: ["Web Development", "Responsive UI","React.js"],
  },
  {
    number: "06",
    title: "GTU Affiliated Project",
    category: "Web Application",
    description:
      "A complete application developed as part of a GTU-affiliated project.",
    tags: ["Full-Stack", "Database", "API",],
  },
];

const services = [
  {
    icon: "01",
    title: "Custom Software",
    description:
      "Custom web applications designed around your business requirements and workflows.",
  },
  {
    icon: "02",
    title: "ERP & Management",
    description:
      "Business management and ERP solutions that organize operations and data.",
  },
  {
    icon: "03",
    title: "Full-Stack Development",
    description:
      "Complete application development across frontend, backend, APIs and databases.",
  },
  {
    icon: "04",
    title: "API Development",
    description:
      "Secure and structured REST APIs and third-party integrations.",
  },
  {
    icon: "05",
    title: "AI Integration",
    description:
      "Integrate AI-powered capabilities into new or existing applications.",
  },
  {
    icon: "06",
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to give businesses a professional online presence.",
  },
];

const technologies = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Node.js",
  "Django",
  "Python",
  "JavaScript",
  "React",
  "REST API",
  "SQL",
  "Git",
  "AI Integration",
];

function App() {
  
const [activeProject, setActiveProject] = useState(0);

const nextProject = () => {
  setActiveProject((prev) => (prev + 1) % projects.length);
};

const previousProject = () => {
  setActiveProject(
    (prev) => (prev - 1 + projects.length) % projects.length
  );
};

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">&lt;/&gt;</span>
            <span>izahan Sodha</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <a href="#contact" className="nav-cta">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>

          <div className="hero-container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot"></span>
                AI SOLUTIONS ARCHITECT · FULL-STACK DEVELOPER
              </div>

              <h1>
                Building software
                <span> that solves</span>
                real problems.
              </h1>

              <p className="hero-description">
                I design and develop custom web applications, ERP systems,
                business management software, APIs, and AI-powered solutions.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">
                  Explore My Work
                  <span>↗</span>
                </a>

                <a href="#contact" className="button button-secondary">
                  Let's Work Together
                </a>
              </div>

              <div className="hero-tech">
                <span>Working with</span>
                <div className="tech-list">
                  <span>C#</span>
                  <span>.NET</span>
                  <span>Node.js</span>
                  <span>Django</span>
                  <span>React</span>
                  <span>AI</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="code-window">
                <div className="window-bar">
                  <div className="window-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <span>solution.architecture</span>
                </div>

                <div className="code-content">
                  <div>
                    <span className="code-number">01</span>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-variable">solution</span> = {"{"}
                  </div>

                  <div className="code-indent">
                    <span className="code-property">frontend</span>:{" "}
                    <span className="code-string">"React"</span>,
                  </div>

                  <div className="code-indent">
                    <span className="code-property">backend</span>:{" "}
                    <span className="code-string">".NET / Node / Django"</span>,
                  </div>

                  <div className="code-indent">
                    <span className="code-property">database</span>:{" "}
                    <span className="code-string">"SQL"</span>,
                  </div>

                  <div className="code-indent">
                    <span className="code-property">ai</span>:{" "}
                    <span className="code-string">true</span>,
                  </div>

                  <div className="code-indent">
                    <span className="code-property">scalable</span>:{" "}
                    <span className="code-string">true</span>
                  </div>

                  <div>{"}"}</div>
                </div>

                <div className="architecture">
                  <div className="arch-node">CLIENT</div>
                  <div className="arch-line"></div>
                  <div className="arch-node">API</div>
                  <div className="arch-line"></div>
                  <div className="arch-node">SYSTEM</div>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <span>01</span>
                <strong>Full-Stack</strong>
                <small>Development</small>
              </div>

              <div className="floating-card floating-card-two">
                <span>AI</span>
                <strong>Intelligent</strong>
                <small>Solutions</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-container">
            <div className="section-label">01 — ABOUT</div>

            <div className="about-grid">
              <div>
                <h2>
                  I turn ideas into
                  <span> working software.</span>
                </h2>
              </div>

              <div className="about-text">
                <p>
                  I'm a software developer focused on building practical
                  digital solutions for businesses and organizations.
                </p>

                <p>
                  My work includes ERP systems, management platforms,
                  websites, APIs, and AI-powered applications. I enjoy working
                  across the complete development process—from understanding
                  requirements and designing architecture to development,
                  testing, and deployment.
                </p>

                <a href="#contact" className="text-link">
                  Let's build something useful <span>→</span>
                </a>
              </div>
            </div>

            <div className="about-cards">
              <div className="info-card">
                <span className="card-number">01</span>
                <h3>Business Focus</h3>
                <p>
                  Building software around real-world business requirements
                  and workflows.
                </p>
              </div>

              <div className="info-card">
                <span className="card-number">02</span>
                <h3>Full-Stack</h3>
                <p>
                  Working across frontend, backend, APIs and databases to
                  create complete solutions.
                </p>
              </div>

              <div className="info-card">
                <span className="card-number">03</span>
                <h3>AI Ready</h3>
                <p>
                  Integrating modern AI capabilities into applications where
                  they provide real value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services">
          <div className="section-container">
            <div className="section-top">
              <div>
                <div className="section-label">02 — SERVICES</div>
                <h2>What I can build for you.</h2>
              </div>

              <p>
                From business systems to AI-powered applications, I focus on
                creating practical software solutions.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.icon}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="tech-section">
          <div className="section-container">
            <div className="tech-heading">
              <div className="section-label">03 — TECHNOLOGY</div>
              <h2>Tools I work with.</h2>
            </div>

            <div className="technology-cloud">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
<section id="projects" className="section projects">
  <div className="section-container">

    <div className="section-top project-heading">
      <div>
        <div className="section-label">04 — SELECTED WORK</div>
        <h2>
          Projects that
          <span> solve problems.</span>
        </h2>
      </div>

      <div className="project-controls">
        <button
          className="project-control"
          onClick={previousProject}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="project-counter">
          <span>
            {String(activeProject + 1).padStart(2, "0")}
          </span>
          <i>/</i>
          {String(projects.length).padStart(2, "0")}
        </div>

        <button
          className="project-control"
          onClick={nextProject}
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </div>

    <div className="project-slider-wrapper">

      <div
        className="project-slider"
        style={{
          transform: `translateX(-${activeProject * 100}%)`,
        }}
      >
        {projects.map((project) => (
          <article className="slide-project" key={project.number}>

            <div className="slide-image">

              <div className="slide-grid"></div>

              <div className="slide-browser">

                <div className="browser-top">
                  <div className="browser-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <div className="browser-address">
                    {project.title.toLowerCase().replaceAll(" ", "-")}
                  </div>
                </div>

                <div className="browser-content">

                  <div className="browser-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-main">

                    <div className="browser-title"></div>

                    <div className="browser-stat-row">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <div className="browser-chart">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                </div>

              </div>

              <div className="slide-project-number">
                {project.number}
              </div>

            </div>

            <div className="slide-content">

              <div className="slide-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="slide-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="slide-actions">
                
              </div>

            </div>

          </article>
        ))}
      </div>

    </div>

    <div className="project-progress">

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${((activeProject + 1) / projects.length) * 100}%`,
          }}
        ></div>
      </div>

      <span>
        {projects[activeProject].title}
      </span>

    </div>

  </div>
</section>


        {/* PROCESS */}
        <section className="section process">
          <div className="section-container">
            <div className="section-label">05 — PROCESS</div>

            <div className="process-header">
              <h2>
                From idea to
                <span> production.</span>
              </h2>

              <p>
                A structured development process focused on understanding the
                problem first and building the right solution.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-item">
                <span>01</span>
                <h3>Understand</h3>
                <p>Understand the requirements and business problem.</p>
              </div>

              <div className="process-item">
                <span>02</span>
                <h3>Plan</h3>
                <p>Define the architecture, features and technical approach.</p>
              </div>

              <div className="process-item">
                <span>03</span>
                <h3>Develop</h3>
                <p>Build the application with clean and maintainable code.</p>
              </div>

              <div className="process-item">
                <span>04</span>
                <h3>Test</h3>
                <p>Test functionality, APIs, integrations and user flows.</p>
              </div>

              <div className="process-item">
                <span>05</span>
                <h3>Deploy</h3>
                <p>Prepare the application for real-world usage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ME */}
        <section className="section why">
          <div className="section-container">
            <div className="section-label">06 — WHY WORK WITH ME</div>

            <div className="why-grid">
              <div>
                <h2>
                  Technology is useful
                  <span> when it solves the right problem.</span>
                </h2>
              </div>

              <div className="why-list">
                <div>
                  <span>01</span>
                  <div>
                    <h3>Clear Communication</h3>
                    <p>
                      Keeping requirements, progress and expectations clear.
                    </p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <h3>Business-Focused</h3>
                    <p>
                      Building around the actual problem instead of adding
                      unnecessary complexity.
                    </p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <h3>Maintainable Development</h3>
                    <p>
                      Creating structured solutions that can be improved and
                      extended over time.
                    </p>
                  </div>
                </div>

                <div>
                  <span>04</span>
                  <div>
                    <h3>End-to-End Development</h3>
                    <p>
                      Frontend, backend, APIs and databases can work together
                      as one complete solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="contact-grid"></div>

          <div className="section-container contact-container">
            <div className="section-label">07 — CONTACT</div>

            <div className="contact-content">
              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <p>
                Let's discuss your idea, understand your requirements, and
                turn it into a reliable software solution.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=izahansodha5316@gmail.com&su=Project%20Inquiry"
                className="button button-primary contact-button"
              >
                Start a Conversation
                <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a href="https://github.com/izahansodha" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://linkedin.com/in/izahan-sodha" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="section-container footer-container">
          <div>
            <a href="#home" className="logo">
              <span className="logo-mark">&lt;/&gt;</span>
              <span>Izahan Sodha</span>
            </a>

            <p>AI Solutions Architect · Full-Stack Software Developer</p>
          </div>

          <p>© 2026 Izahan Sodha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;