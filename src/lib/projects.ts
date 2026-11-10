export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  tags: string[];
  live: string;
  repo: string;
  domain: string;
  image: string;
  alt: string;
  accent: string;
  role?: string;
  timeline?: string;
  overview?: string[];
  challenge?: string;
  solution?: string;
  gallery?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "fit-log",
    title: "Fit Log",
    category: "Fitness tracking web app",
    description:
      "A fitness app for exploring exercises and fitness information through a clean, intuitive interface.",
    overview: [
      "Fit Log is a fitness discovery app built to make finding exercises simple. Users can browse organized exercise content through a responsive interface that works across desktop and mobile.",
      "Exercise data is loaded dynamically from an API, so the library can grow without redesigning the UI. The focus is on clear navigation and readable workout information.",
    ],
    bullets: [
      "Responsive, modern UI",
      "Dynamic data through API integration",
      "Organized exercise discovery",
    ],
    tags: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    live: "https://fit-log-project-three.vercel.app/",
    repo: "https://github.com/mrfizz17/Fit-Log-Project",
    domain: "fit-log-project-three.vercel.app",
    image: "/projects/project-fitlog.jpg",
    alt: "Fit Log workout library home page",
    accent:
      "radial-gradient(circle at 25% 10%, rgba(34, 228, 255, 0.35), transparent 60%), radial-gradient(circle at 85% 90%, rgba(139, 92, 246, 0.4), transparent 60%), #090a16",
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "E-commerce web app",
    description:
      "An online store with dynamic product browsing, secure sign-in, and a minimal shopping experience.",
    overview: [
      "BazarDor is an online store built around a clean shopping flow. Product listings are rendered dynamically, giving visitors a straightforward way to browse what is available.",
      "Shoppers can create an account or sign in with Google or GitHub. Better Auth handles authentication while MongoDB stores user data, keeping the experience simple and secure.",
    ],
    bullets: [
      "Dynamic product listings",
      "Registration plus Google and GitHub sign-in",
      "MongoDB for user data",
    ],
    tags: ["React.js", "Better Auth", "MongoDB", "Tailwind CSS"],
    live: "https://bazar-dor-project-x63x-plum.vercel.app/",
    repo: "https://github.com/mrfizz17/Bazar_dor_project",
    domain: "bazar-dor-project-x63x-plum.vercel.app",
    image: "/projects/project-bazardor.jpg",
    alt: "BazarDor market price home page",
    accent:
      "radial-gradient(circle at 20% 15%, rgba(255, 79, 216, 0.32), transparent 60%), radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.4), transparent 60%), #090a16",
  },
  {
    slug: "booknook",
    title: "BookNook",
    category: "Full-stack book borrowing platform",
    description:
      "A platform to discover, manage, and borrow books, with personal collections and borrowing history.",
    overview: [
      "BookNook is a full-stack borrowing platform where readers can browse a shared catalog, manage their own book listings, and keep track of what they have borrowed.",
      "It pairs a Next.js frontend with an Express API and MongoDB. Signed-in users get their own data, including borrowing history and live availability for each title.",
    ],
    bullets: [
      "Add, update, and delete books",
      "Borrowing with availability tracking",
      "Login, user-specific data, borrowing history",
    ],
    tags: ["Next.js", "Express.js", "MongoDB", "Better Auth", "Tailwind CSS"],
    live: "https://mrfizz17-booknook.vercel.app/",
    repo: "https://github.com/mrfizz17/booknook_frontend",
    domain: "mrfizz17-booknook.vercel.app",
    image: "/projects/project-booknook.jpg",
    alt: "BookNook home page",
    accent:
      "radial-gradient(circle at 25% 10%, rgba(34, 228, 255, 0.3), transparent 60%), radial-gradient(circle at 80% 90%, rgba(255, 79, 216, 0.28), transparent 60%), #090a16",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
