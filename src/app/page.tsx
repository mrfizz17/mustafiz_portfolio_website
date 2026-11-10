import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import ScrollEffects from "@/components/scroll-effects";
import TypedRole from "@/components/typed-role";
import { projects } from "@/lib/projects";

const EMAIL = "rahmanmustafizur302@gmail.com";
const GITHUB = "https://github.com/mrfizz17";
const LINKEDIN = "https://www.linkedin.com/in/mustafizur-rahman-b8616930a/";

const roles = [
  "Full-Stack Developer",
  "Building scalable web apps",
  "React / Next.js / Node.js",
];

const tech = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Better Auth",
  "REST APIs",
  "JavaScript",
  "TypeScript",
  "Git",
  "Vercel",
];

const skillGroups = [
  {
    title: "Languages",
    tags: ["JavaScript", "C++", "Java", "Python (basics)", "TypeScript (learning)"],
  },
  {
    title: "Frontend",
    tags: [
      "HTML5",
      "CSS3",
      "ES6+",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive design",
    ],
  },
  {
    title: "Backend",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Better Auth",
      "JWT",
    ],
  },
  {
    title: "Databases",
    tags: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & platforms",
    tags: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
  {
    title: "Currently exploring",
    tags: [
      "Advanced TypeScript",
      "AI integration",
      "AI agents & RAG",
      "Docker",
      "AWS",
      "System design",
    ],
    explore: true,
  },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4 1.3-4-2-6-2m12 4v-3.5a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.1 5.4 2.4 5.4 2.4a4.5 4.5 0 0 0-.1 3.3A4.8 4.8 0 0 0 4 9c0 4.8 3 5.9 5.8 6.2A3 3 0 0 0 9 17.5V21" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mustafizur Rahman Chowdhury",
  jobTitle: "Full-Stack Developer",
  email: `mailto:${EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    addressCountry: "Bangladesh",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Leading University",
  },
  sameAs: [GITHUB, LINKEDIN],
  knowsAbout: [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <ScrollEffects />

      <header>
        <div className="wrap">
          <nav aria-label="Primary">
            <a className="logo" href="#top">
              {"<mrc/>"}
            </a>
            <div className="links">
              <a href="#about" data-nav>
                About
              </a>
              <a href="#skills" data-nav>
                Skills
              </a>
              <a href="#projects" data-nav>
                Projects
              </a>
              <a href="#contact" data-nav>
                Contact
              </a>
            </div>
            <a className="btn sm" href="#contact">
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <span className="status">
                <i className="dot" aria-hidden="true" />
                <span className="status-text">
                  Open to internships, freelance &amp; full-time roles
                </span>
              </span>
              <h1 id="hero-title">
                Mustafizur Rahman <span>Chowdhury</span>
              </h1>
              <TypedRole roles={roles} />
              <p className="intro">
                I&apos;m a Computer Science student and aspiring Full-Stack Developer
                who builds modern web applications. I turn ideas into functional,
                user-friendly experiences and keep sharpening my problem-solving with
                every project.
              </p>
              <div className="cta">
                <a className="btn primary" href="#projects">
                  View my work
                </a>
                <a className="btn" href={`mailto:${EMAIL}`}>
                  Email me
                </a>
                <a className="btn" href="/resume.pdf" download>
                  Download resume
                </a>
              </div>
              <div className="stats">
                <div>
                  <b>3</b>
                  <span>Live projects deployed</span>
                </div>
                <div>
                  <b>3rd year</b>
                  <span>B.Sc. in CSE</span>
                </div>
                <div>
                  <b>10+</b>
                  <span>Technologies in my stack</span>
                </div>
              </div>
            </div>

            <div className="frame">
              <div className="glow" aria-hidden="true" />
              <div className="ring" aria-hidden="true" />
              <div className="photo">
                <Image
                  src="/portrait.jpg"
                  alt="Portrait of Mustafizur Rahman Chowdhury"
                  width={640}
                  height={640}
                  sizes="(max-width: 860px) 78vw, 400px"
                  preload
                />
              </div>
              <span className="chip-float c1" aria-hidden="true">
                Next.js
              </span>
              <span className="chip-float c2" aria-hidden="true">
                Node.js
              </span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            {[...tech, ...tech].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section
          id="why"
          className="why-section"
          aria-labelledby="why-title"
        >
          <div className="wrap">
            <h2 id="why-title">What a team gets</h2>
            <p className="lead">
              What I bring to an internship, freelance project, or junior role.
            </p>
            <div className="why">
              <div>
                <h3>Ships complete apps</h3>
                <p>
                  Frontend, REST API, database, authentication, and deployment. Every
                  project below is live on Vercel.
                </p>
              </div>
              <div>
                <h3>Secure sign-in built in</h3>
                <p>
                  Better Auth with Google and GitHub login, plus user-specific data
                  stored in MongoDB.
                </p>
              </div>
              <div>
                <h3>Learns fast, aims higher</h3>
                <p>
                  Exploring TypeScript, Docker, AWS, AI agents, and RAG alongside my
                  CSE coursework.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <div className="wrap">
            <h2 id="about-title">About me</h2>
            <p className="lead">
              Practical apps, clean interfaces, reliable backends.
            </p>
            <div className="about">
              <div>
                <p>
                  I&apos;m a third-year Computer Science &amp; Engineering student at
                  Leading University with a strong interest in full-stack web
                  development. I enjoy building practical applications that solve real
                  problems, with clean interfaces, dependable backend systems, and
                  meaningful user experiences.
                </p>
                <p>
                  My work covers modern JavaScript, REST APIs, database integration,
                  authentication systems, and responsive web apps. Beyond the web,
                  I&apos;m exploring AI-powered applications, intelligent agents, cloud
                  technologies, and system design.
                </p>
                <p>
                  My goal is to become a Full-Stack Engineer who builds scalable
                  applications and brings intelligent technology into everyday
                  software. I learn by building, and I like to understand concepts
                  deeply.
                </p>
              </div>
              <div className="facts">
                <div className="fact">
                  <b>Location</b>
                  <span>Sylhet, Bangladesh</span>
                </div>
                <div className="fact">
                  <b>Education</b>
                  <span>B.Sc. in CSE, Leading University (3rd year)</span>
                </div>
                <div className="fact">
                  <b>Certification</b>
                  <span>Digital Marketing Course</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <h2 id="skills-title">Skills &amp; tools</h2>
            <p className="lead">The stack I use to design, build, and ship.</p>
            <div className="skills">
              {skillGroups.map((group) => (
                <div
                  className={`group${group.explore ? " explore" : ""}`}
                  key={group.title}
                >
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <h2 id="projects-title">Featured projects</h2>
            <p className="lead">
              Three live apps, each built end to end and deployed.
            </p>
            <div className="projects">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="shot">
                    <div className="bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <em>{project.domain}</em>
                    </div>
                    <div
                      className="screen-wrap"
                      style={{ background: project.accent }}
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 860px) 92vw, 520px"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="cat">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="tags project-tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="row">
                      <Link
                        className="btn primary sm"
                        href={`/projects/${project.slug}`}
                        aria-label={`View details for ${project.title}`}
                      >
                        Details
                      </Link>
                      <a
                        className="btn sm"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        Live demo
                      </a>
                      <a
                        className="btn sm"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 id="contact-title">Let&apos;s build something</h2>
            <p className="lead">
              Looking for an intern, freelancer, or junior engineer? Send a message
              and I&apos;ll reply soon.
            </p>
            <div className="tags avail">
              <span className="tag">Open to internships</span>
              <span className="tag">Freelance projects</span>
              <span className="tag">Full-time roles</span>
            </div>
            <div className="contact">
              <div className="cards">
                <a className="card" href={`mailto:${EMAIL}`}>
                  <MailIcon />
                  {EMAIL}
                </a>
                <a
                  className="card"
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  github.com/mrfizz17
                </a>
                <a
                  className="card"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  LinkedIn profile
                </a>
                <div className="card">
                  <PinIcon />
                  Sylhet, Bangladesh
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © 2026 Mustafizur Rahman Chowdhury. Designed and built in Sylhet.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
