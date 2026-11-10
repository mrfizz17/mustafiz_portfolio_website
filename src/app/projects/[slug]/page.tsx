import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type ProjectParams = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Mustafizur Rahman Chowdhury`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mustafizur Rahman Chowdhury`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <header>
        <div className="wrap">
          <nav aria-label="Primary">
            <Link className="logo" href="/">
              {"<mrc/>"}
            </Link>
            <div className="links">
              <Link href="/">Home</Link>
              <Link href="/#projects">All projects</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <Link className="btn sm" href="/#contact">
              Hire me
            </Link>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="detail">
          <div className="wrap">
            <Link className="back" href="/#projects">
              <span aria-hidden="true">←</span> All projects
            </Link>

            <div className="detail-head">
              <span className="cat">{project.category}</span>
              <h1>{project.title}</h1>
              <p className="lead">{project.description}</p>
            </div>

            <div className="shot detail-shot">
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
                  sizes="(max-width: 860px) 92vw, 1024px"
                  preload
                />
              </div>
            </div>

            <div className="detail-layout">
              <aside className="detail-side" aria-label="Project facts">
                <div className="row detail-actions">
                  <a
                    className="btn primary sm"
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

                <dl className="detail-meta">
                  <div>
                    <dt>Category</dt>
                    <dd>{project.category}</dd>
                  </div>
                  {project.role ? (
                    <div>
                      <dt>My role</dt>
                      <dd>{project.role}</dd>
                    </div>
                  ) : null}
                  {project.timeline ? (
                    <div>
                      <dt>Timeline</dt>
                      <dd>{project.timeline}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt>Website</dt>
                    <dd>{project.domain}</dd>
                  </div>
                </dl>

                <div className="detail-side-stack">
                  <h2>Tech stack</h2>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="detail-body">
                <section>
                  <h2>Overview</h2>
                  {(project.overview ?? [project.description]).map(
                    (paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ),
                  )}
                </section>

                {project.challenge ? (
                  <section>
                    <h2>The challenge</h2>
                    <p>{project.challenge}</p>
                  </section>
                ) : null}

                {project.solution ? (
                  <section>
                    <h2>The solution</h2>
                    <p>{project.solution}</p>
                  </section>
                ) : null}

                <section>
                  <h2>Key features</h2>
                  <ul className="detail-list">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>

                {project.gallery?.length ? (
                  <section>
                    <h2>Gallery</h2>
                    <div className="detail-gallery">
                      {project.gallery.map((image) => (
                        <div className="gallery-item" key={image.src}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 860px) 92vw, 480px"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            </div>

            <Link className="next-project" href={`/projects/${nextProject.slug}`}>
              <span>Next project</span>
              <strong>
                {nextProject.title} <span aria-hidden="true">→</span>
              </strong>
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © 2026 Mustafizur Rahman Chowdhury. Designed and built in Sylhet.
        </div>
      </footer>
    </>
  );
}
