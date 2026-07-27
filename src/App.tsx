import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Github,
  Linkedin,
  Moon,
  Sun
} from "lucide-react";
import StackIcon from "tech-stack-icons";
import {
  siApacheairflow,
  siPowerapps,
  siPowerautomate,
  siPowerbi,
  siTableau
} from "simple-icons";
import { siUipath } from "simple-icons-latest";

type Theme = "light" | "dark";
type ProjectType = "All" | "AI" | "Data" | "Apps" | "Publications";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const projects: Array<{
  title: string;
  type: Exclude<ProjectType, "All">;
  year: string;
  description: string;
  image: string;
  tags: string[];
  highlights: string[];
  href?: string;
  linkLabel?: string;
}> = [
  {
    title: "AuditLens AI",
    type: "AI",
    year: "2026",
    description:
      "AuditLens AI explores how multimodal AI can make invoice evidence review faster and more consistent. The workflow turns uploaded documents into structured fields, evaluates them against control expectations, and presents exceptions in a format designed for review rather than raw model output.",
    image: assetPath("images/homepage_img.png"),
    tags: ["Next.js", "OpenAI", "LangChain", "Audit Analytics"],
    highlights: [
      "Extracts key invoice and supporting-document fields from PDFs and images.",
      "Applies control checks and risk signals to identify evidence requiring attention.",
      "Returns structured findings that can be reviewed, traced, and incorporated into audit workflows."
    ]
  },
  {
    title: "Kaggle: Elo Merchant Recommendation",
    type: "Data",
    year: "2025",
    description:
      "A predictive analytics project for the Elo Merchant Category Recommendation competition, focused on forecasting customer loyalty scores from complex transaction histories. The solution combined behavioral aggregation, careful validation, feature selection, and ensemble modeling to place within the top 3.2% of submissions.",
    image: assetPath("images/project_thumbnails/elo-kaggle.png"),
    tags: ["LightGBM", "SHAP", "RFM Analysis", "Ensemble Learning"],
    highlights: [
      "Engineered customer and merchant features across historical and new transaction datasets.",
      "Used RFM segmentation, SHAP analysis, and recursive selection to isolate predictive signals.",
      "Built outlier-aware LightGBM ensembles and blending strategies for more robust predictions."
    ],
    href: "https://github.com/pareenakaur/SC4000-ML-Grp1/tree/main",
    linkLabel: "View on GitHub"
  },
  {
    title: "MindScope: Unconscious Bias",
    type: "Apps",
    year: "2023",
    description:
      "MindScope is a mobile learning concept designed to make unconscious-bias education easier to engage with in everyday life. Instead of presenting long-form training, the experience breaks the topic into approachable lessons, guided reflection, realistic scenarios, and practical actions.",
    image: assetPath("images/full_stack/mindscope/mindscope-screens.png"),
    tags: ["React Native", "UX Research", "Product Design", "Mobile"],
    highlights: [
      "Designed a low-friction learning flow around short lessons and reflection prompts.",
      "Translated sensitive behavioral concepts into clear, approachable mobile interactions.",
      "Developed the application experience in React Native with an emphasis on usability and visual clarity."
    ],
    href: "https://github.com/aarushi-nema/mindscope_cs/tree/main/mindscope_app",
    linkLabel: "View on GitHub"
  },
  {
    title: "Image-Based Gender and Age Classification",
    type: "AI",
    year: "2024",
    description:
      "A computer vision study investigating age and gender classification from facial images. The project compared progressively stronger modeling approaches to understand the effect of architecture design, transfer learning, preprocessing, and optimization on multi-task classification performance.",
    image: assetPath("images/project_thumbnails/nndl-classification.png"),
    tags: ["PyTorch", "CNN", "EfficientNet", "Computer Vision"],
    highlights: [
      "Established baseline convolutional models before iterating on depth, regularization, and training strategy.",
      "Evaluated EfficientNet transfer learning against custom CNN architectures.",
      "Compared model behavior and performance across the related age and gender prediction tasks."
    ],
    href: "https://github.com/aarushi-nema/CZ4042-Neural-Networks-and-Deep-Learning-Project",
    linkLabel: "View on GitHub"
  },
  {
    title: "Encoding Values with Moral Frames",
    type: "Publications",
    year: "2025",
    description:
      "A NeurIPS Creative AI Track paper examining whether generative models can be steered toward different value systems through prompt-conditioned moral frames. The study connects moral-foundations theory with controlled prompting to analyze how explicit ethical framing changes generated outputs.",
    image: assetPath("images/project_thumbnails/encoding-values.png"),
    tags: ["Responsible AI", "Prompt Engineering", "Generative AI", "Research"],
    highlights: [
      "Operationalized distinct moral foundations as reusable prompt-conditioning frames.",
      "Studied how changes in moral framing influence the values expressed by generative models.",
      "Contributed an applied perspective on controllability, alignment, and responsible AI evaluation."
    ],
    href: "https://aarushi-nema.github.io/portfolio-website/posts/publications/encoding-values.html",
    linkLabel: "Read the paper"
  }
];

const experience = [
  {
    company: "Deloitte Singapore",
    role: "Data Analyst, Audit & Assurance",
    period: "Oct 2025 - Present",
    details: [
      "Deliver SQL, Python, and Excel solutions for revenue recomputation, transaction reconciliation, variance analysis, exception detection, and reporting preparation.",
      "Build Power BI and Tableau dashboards that surface risk indicators, control status, portfolio performance, and testing progress.",
      "Develop GenAI and automation workflows with n8n, LLMs, AWS, Power Apps, and Power Automate."
    ]
  },
  {
    company: "Hyundai Motor Group Innovation Centre Singapore",
    role: "Data Platform Intern",
    period: "May 2024 - Aug 2024",
    details: [
      "Engineered and optimized ETL pipelines from PostgreSQL to a Hadoop data lake using Python, PySpark, Apache Airflow, and Bash.",
      "Developed Flask and PySpark REST APIs for dynamic retrieval and filtering across multiple data formats."
    ]
  },
  {
    company: "Infineon Technologies",
    role: "Software Development (Data Application) Intern",
    period: "May 2023 - Dec 2023",
    details: [
      "Enhanced Tableau dashboards and automated production-yield record loading into SQL with Python ETL scripts.",
      "Developed a centralized UiPath and Python RPA solution across four critical software tools.",
      "Built a Confluence-based internal chatbot using React, Flask, and SQL."
    ]
  }
];

const publications = [
  {
    venue: "PRICAI 2025 / Springer Nature",
    title: "Context-Aware and Knowledge-Grounded Conversational Recommendation with Prompt Learning",
    description:
      "A GraphRAG-based recommendation pipeline that uses dialogue context and external knowledge to improve conversational recommendation quality.",
    href: "https://aarushi-nema.github.io/portfolio-website/#context-aware-and-knowledge-grounded-conversational-recommendati",
    tags: ["GraphRAG", "Conversational AI", "Recommender Systems"]
  },
  {
    venue: "NeurIPS 2025 Creative AI Track / OpenReview",
    title: "Encoding Values: Injecting Morality into Machines via Prompt-Conditioned Moral Frames",
    description:
      "A responsible AI paper exploring how explicit moral frames can steer generative AI outputs through prompt conditioning.",
    href: "https://aarushi-nema.github.io/portfolio-website/posts/publications/encoding-values.html",
    tags: ["Responsible AI", "Moral Foundations", "Prompt Learning"]
  }
];

const iconTools = [
  { name: "openai", label: "OpenAI" },
  { name: "n8n", label: "n8n" },
  { name: "pytorch", label: "PyTorch" },
  { name: "tensorflow", label: "TensorFlow" },
  { name: "python", label: "Python" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "spark", label: "Apache Spark" },
  { name: "aws", label: "AWS" },
  { name: "react", label: "React" },
  { name: "nodejs", label: "Node.js" },
  { name: "flask", label: "Flask" },
  { name: "docker", label: "Docker" },
  { name: "git", label: "Git" },
  { name: "figma", label: "Figma" }
] as const;

const platformTools = [
  { label: "Power BI", icon: siPowerbi },
  { label: "Tableau", icon: siTableau },
  { label: "Power Apps", icon: siPowerapps },
  { label: "Power Automate", icon: siPowerautomate },
  { label: "UiPath", icon: siUipath },
  { label: "Apache Airflow", icon: siApacheairflow }
];

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("portfolio-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(projects[0].title);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const selectedProject =
    projects.find((project) => project.title === selectedProjectTitle) ?? projects[0];

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="glass-nav">
        <a className="brand" href="#top" aria-label="Aarushi Nema home">
          <span>AN</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#stack">Stack</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Data analytics / GenAI / automation</p>
            <h1>
              I build GenAI and data products that make complex work simpler.
            </h1>
            <p className="hero-text">
              I’m a Data Science & AI graduate from NTU Singapore, currently building data
              analytics and AI automation solutions at Deloitte. My work spans GenAI workflows,
              data engineering, dashboarding, and low-code automation. I enjoy turning complex
              financial and operational data into reliable systems, clear insights, and tools that
              make teams faster.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                View selected work <ChevronRight size={18} />
              </a>
              <a className="secondary-action" href={assetPath("assets/nema_aarushi_resume.pdf")}>
                Resume <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <aside className="hero-card glass-card" aria-label="Profile highlight">
            <div className="portrait-wrap">
              <img src={assetPath("assets/me.jpeg")} alt="Aarushi Nema" />
            </div>
            <div className="hero-card-body">
              <span className="signal">Currently working across</span>
              <strong>Data analytics, GenAI workflows, and intelligent automation.</strong>
              <p>Python · SQL · Power BI · Tableau · n8n · Power Platform</p>
            </div>
            <div className="status-row" aria-label="Current focus areas">
              <span>GenAI</span>
              <span>Analytics</span>
              <span>Automation</span>
            </div>
          </aside>
        </section>

        <section className="section stack-section" id="stack">
          <div className="stack-heading">
            <h2>Tools of the trade</h2>
          </div>
          <div className="stack-marquee glass-card" aria-label="Technology stack">
            <div className="marquee-row">
              <div className="marquee-track">
                {[0, 1].map((copy) => (
                  <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
                    {iconTools.map((tool) => (
                      <figure className="stack-tool" key={`${copy}-${tool.label}`}>
                      <StackIcon
                        name={tool.name}
                        variant={theme === "dark" ? "dark" : "light"}
                      />
                      <figcaption>{tool.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-row marquee-row-reverse">
              <div className="marquee-track">
                {[0, 1].map((copy) => (
                  <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
                    {platformTools.map((tool) => (
                      <span className="platform-tool" key={`${copy}-${tool.label}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label={`${tool.label} logo`}
                          style={{ color: `#${tool.icon.hex}` }}
                        >
                          <path d={tool.icon.path} fill="currentColor" />
                        </svg>
                        {tool.label}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="experience-heading">
            <h2>Where I’ve built</h2>
          </div>
          <div className="timeline-scroll">
            <div className="timeline" aria-label="Career timeline">
              {experience.map((item) => (
                <div className="timeline-item" key={item.company}>
                  <div className="timeline-marker" aria-hidden="true">
                    <span />
                  </div>
                  <span className="timeline-period">{item.period}</span>
                  <article className="glass-card timeline-card">
                    <h3>{item.company}</h3>
                    <p className="role">{item.role}</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="project-heading">
            <h2>Project archive</h2>
          </div>
          <div className="project-browser">
            <div className="project-menu" role="tablist" aria-label="Choose a project">
              <div className="project-menu-label">
                <span>Project index</span>
                <small>{projects.length.toString().padStart(2, "0")} entries</small>
              </div>
              {projects.map((project, index) => (
                <button
                  className={selectedProject.title === project.title ? "active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={selectedProject.title === project.title}
                  aria-controls="selected-project"
                  key={project.title}
                  onClick={() => setSelectedProjectTitle(project.title)}
                >
                  <span>0{index + 1}</span>
                  <div>
                    <small>{project.type} · {project.year}</small>
                    <strong>{project.title}</strong>
                  </div>
                </button>
              ))}
            </div>

            <article
              className="project-window"
              id="selected-project"
              role="tabpanel"
              key={selectedProject.title}
            >
              <img src={selectedProject.image} alt="" />
              <div className="project-window-body">
                <div className="project-window-meta">
                  <span>{selectedProject.type}</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <ul className="project-highlights">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {selectedProject.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                {selectedProject.href && (
                  <a
                    className="project-link"
                    href={selectedProject.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.linkLabel === "View on GitHub" && <Github size={17} />}
                    {selectedProject.linkLabel} <ArrowUpRight size={16} />
                  </a>
                )}
                {!selectedProject.href && (
                  <span className="project-status">
                    <i aria-hidden="true" />
                    Work in progress
                  </span>
                )}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="publication-heading">
            <h2>Selected research</h2>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-card glass-card" key={publication.title}>
                <div className="publication-meta">
                  <span>{publication.venue}</span>
                  <strong>0{index + 1}</strong>
                </div>
                <h3>{publication.title}</h3>
                <p>{publication.description}</p>
                <div className="publication-tags">
                  {publication.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                <a className="publication-link" href={publication.href} target="_blank" rel="noreferrer">
                  <BookOpen size={17} /> Read publication <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact glass-card" id="contact">
          <div className="contact-intro">
            <p className="kicker">Start a conversation</p>
            <h2>Let’s make something useful.</h2>
            <p>
              Have an idea involving data, AI, automation, or thoughtful product work? I’d love to
              hear what you’re building.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:aarushi.nema02@gmail.com">
              Get in touch <ArrowUpRight size={18} />
            </a>
            <div className="contact-links">
              <a href="https://github.com/aarushi-nema" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aarushi-nema-64a006185/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
            <span>Singapore · Data, AI & product</span>
          </div>
        </section>
      </main>
    </div>
  );
}
