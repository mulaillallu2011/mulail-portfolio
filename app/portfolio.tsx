"use client";
import { useEffect, useRef, useState, useId } from "react";
import Image from "next/image";
import ProjectGuide from "./project-guide";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Menu,
  X,
  Cpu,
  Radio,
  Code2,
  Sparkles,
  Medal,
  Award,
  ChevronLeft,
  ChevronRight,
  Plus,
  Bot,
} from "lucide-react";
import { achievements, photos, profile, projects, assetBase, type Project } from "./data";

const nav = [
  ["home", "Home"],
  ["about", "About"],
  ["achievements", "Achievements"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];
function Github({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c.1-1-.3-1.9-1-2.5 3.3-.4 6.8-1.6 6.8-7.3 0-1.6-.6-3-1.6-4 .1-1.4-.1-2.8-.6-4 0 0-1.3-.4-4.3 1.6a15 15 0 0 0-7.8 0C3.5.4 2.2.8 2.2.8c-.5 1.2-.7 2.6-.6 4a6 6 0 0 0-1.6 4c0 5.7 3.5 6.9 6.8 7.3-.7.6-1.1 1.5-1 2.5V22"
        transform="translate(2 1) scale(.9)"
      />
    </svg>
  );
}
function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  );
}
function Socials() {
  return (
    <div className="socials">
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Mulail on GitHub"
      >
        <Github size={19} />
      </a>
      <a
        href={profile.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Mulail on Instagram"
      >
        <Instagram size={19} />
      </a>
      <a href={profile.email} aria-label="Email Mulail">
        <Mail size={19} />
      </a>
    </div>
  );
}
function Rover() {
  const uid = useId();
  return (
    <svg
      className="rover"
      viewBox="0 0 640 470"
      role="img"
      aria-label="Stylized six-wheel rover illustration, not a photograph of Speleo Bot"
    >
      <defs>
        <linearGradient id={`${uid}-body`} x2="0.7" y2="1">
          <stop stopColor="#7590a7" />
          <stop offset=".45" stopColor="#243e57" />
          <stop offset="1" stopColor="#122036" />
        </linearGradient>
        <linearGradient id={`${uid}-top`}>
          <stop stopColor="#b3c9d6" />
          <stop offset="1" stopColor="#3b586e" />
        </linearGradient>
        <radialGradient id={`${uid}-ground`}>
          <stop stopColor="#00d9ff" stopOpacity=".23" />
          <stop offset="1" stopColor="#00d9ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse
        cx="322"
        cy="357"
        rx="267"
        ry="93"
        fill={`url(#${uid}-ground)`}
      />
      <g stroke="#00d9ff" opacity=".2" fill="none">
        <ellipse cx="322" cy="359" rx="255" ry="78" />
        <ellipse cx="322" cy="359" rx="191" ry="59" />
        <path d="M61 359h521M322 278v160" />
      </g>
      <g className="rover-body">
        <g fill="#07101e" stroke="#3d5368" strokeWidth="7">
          {[
            [208, 248],
            [330, 228],
            [473, 255],
          ].map(([x, y]) => (
            <ellipse
              key={x}
              cx={x}
              cy={y}
              rx="34"
              ry="48"
              transform={`rotate(-24 ${x} ${y})`}
            />
          ))}
        </g>
        <path
          d="m147 295 116-58 137 73 86-17"
          fill="none"
          stroke="#688399"
          strokeWidth="15"
        />
        <path
          d="m149 296 114-14 51 55 85-27 57 42"
          fill="none"
          stroke="#213b54"
          strokeWidth="20"
        />
        <path
          d="m188 185 160-54 160 82-162 61z"
          fill={`url(#${uid}-top)`}
          stroke="#88aabd"
        />
        <path
          d="m188 185 158 89v70l-159-91z"
          fill={`url(#${uid}-body)`}
          stroke="#425e75"
        />
        <path
          d="m346 274 162-61-7 70-155 61z"
          fill="#182a40"
          stroke="#57758b"
        />
        <path
          d="m217 186 129-41 124 64-126 46z"
          fill="#142b40"
          stroke="#44647e"
        />
        <path d="m234 187 110-33 105 53-109 37z" fill="#233e52" />
        <g stroke="#00d9ff" strokeWidth="2" opacity=".7">
          <path d="m245 190 90 44m-60-53 88 44m-57-54 88 44m-44-50-99 31m125-17-100 33" />
        </g>
        <path d="M349 190v-79" stroke="#a4bccb" strokeWidth="9" />
        <ellipse
          cx="349"
          cy="107"
          rx="29"
          ry="12"
          fill="#17283a"
          stroke="#9cb4c3"
        />
        <path
          d="M320 93v15c0 15 58 15 58 0V93"
          fill="#263e50"
          stroke="#8babbc"
        />
        <ellipse cx="349" cy="93" rx="29" ry="12" fill="#8fa6b6" />
        <ellipse cx="349" cy="93" rx="19" ry="6" fill="#00d9ff" />
        <path d="m420 204 3-87" stroke="#728da3" strokeWidth="4" />
        <circle cx="423" cy="114" r="4" fill="#00d9ff" />
        <path d="m225 253 28 16v23l-28-15z" fill="#030c18" stroke="#7b99ad" />
        <ellipse cx="239" cy="273" rx="7" ry="9" fill="#00d9ff" />
        <g>
          {[
            [160, 302],
            [297, 349],
            [457, 331],
          ].map(([x, y]) => (
            <g key={x} transform={`translate(${x} ${y}) rotate(-24)`}>
              <ellipse
                rx="39"
                ry="55"
                fill="#060d18"
                stroke="#33495e"
                strokeWidth="9"
              />
              <ellipse
                rx="25"
                ry="37"
                fill="#183047"
                stroke="#718999"
                strokeWidth="3"
              />
              <ellipse
                rx="11"
                ry="17"
                fill="#273f51"
                stroke="#00d9ff"
                strokeWidth="3"
              />
              <path
                d="M-25-30h-13M-29-13h-13M-30 7h-13M-25 27h-13M26-29h11M30-9h11M29 12h11M23 31h10"
                stroke="#5d6f7b"
                strokeWidth="4"
              />
            </g>
          ))}
        </g>
        <text
          x="375"
          y="286"
          fill="#b2c8d5"
          fontSize="12"
          letterSpacing="3"
          transform="rotate(-20 375 286)"
        >
          EXPLORE
        </text>
      </g>
    </svg>
  );
}
function ProjectArt({ project }: { project: Project }) {
  if (project.image)
    return (
      <Image
        src={project.image}
        alt={project.imageAlt || project.title}
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
        className="project-photo"
      />
    );
  return (
    <div
      className={`project-art art-${project.kind}`}
      aria-label={`${project.title} illustrative graphic`}
      role="img"
    >
      {project.kind === "rover" ? (
        <Rover />
      ) : project.kind === "sensor" ? (
        <>
          <div className="sensor-ring r1" />
          <div className="sensor-ring r2" />
          <div className="chip">
            <Cpu size={62} />
            <span>ESP32</span>
          </div>
          <span className="sensor-label">ENVIRONMENT / MONITOR</span>
        </>
      ) : project.kind === "software" ? (
        <div className="mini-dashboard">
          <div className="mini-sidebar">
            M<span />
            <span />
            <span />
            <span />
          </div>
          <div className="mini-content">
            <span>WORKSPACE / OVERVIEW</span>
            <div className="mini-stat">
              <i />
              <i />
              <i />
            </div>
            <div className="mini-chart">
              {[35, 60, 43, 78, 57, 90, 73, 100, 87].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>
      ) : project.kind === "led" ? (
        <div className="led-board">
          {Array.from({ length: 8 }, (_, i) => (
            <i key={i} style={{ animationDelay: `${i * 0.16}s` }} />
          ))}
          <span>SEQUENCE_15 / ARDUINO</span>
        </div>
      ) : (
        <div className="buddy">
          <Bot size={100} />
          <span>AN IDEA IN THE MAKING</span>
        </div>
      )}
      <small className="illustration-tag">
        {project.kind === "buddy" ? "CONCEPT VISUAL" : "ILLUSTRATIVE GRAPHIC"}
      </small>
    </div>
  );
}
function SectionTitle({
  index,
  kicker,
  title,
  text,
}: {
  index: string;
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{index}</span> / {kicker}
      </p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Portfolio() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animations.push(entry.target.animate([
          { opacity: 0, transform: 'translateY(28px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 750, easing: 'cubic-bezier(.2,.7,.2,1)' }));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section > *, .certificate-grid > button, .gallery-item').forEach(el => observer.observe(el));
    return () => { observer.disconnect(); animations.forEach(a => a.cancel()); };
  }, [reduced]);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");
  const [shareStatus, setShareStatus] = useState("");
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const syncProject = () => {
      const id = new URL(window.location.href).searchParams.get("project");
      setProject(projects.find(p => p.id === id) ?? null);
      setShareStatus("");
    };
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem("mulail-theme");
        if (saved === "light") { setTheme(saved); document.documentElement.dataset.theme = saved; }
      } catch { /* Storage may be disabled. */ }
      syncProject();
    });
    window.addEventListener("popstate", syncProject);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("popstate", syncProject);
    };
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("mulail-theme", next); } catch { /* Keep session preference. */ }
  };
  const visibleProjects = projects.filter(p =>
    (filter === "All" || p.category === filter) &&
    `${p.title} ${p.description} ${p.tech.join(" ")}`.toLowerCase().includes(search.trim().toLowerCase())
  );
  const openProject = (p: Project) => {
    setProject(p); setShareStatus("");
    const url = new URL(window.location.href);
    url.searchParams.set("project", p.id);
    window.history.pushState(null, "", url);
  };
  const shareProject = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setShareStatus("Project link copied"); }
    catch { setShareStatus("Copy the link from your browser’s address bar"); }
  };
  const [role, setRole] = useState(0);
  const [photo, setPhoto] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setRole((r) => (r + 1) % 5), 3200);
    return () => clearInterval(timer);
  }, [reduced]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const el = dialog.current;
    if (project || photo !== null) {
      el?.showModal();
      const old = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = old;
      };
    } else el?.close();
  }, [project, photo]);
  const close = () => {
    setProject(null);
    setPhoto(null);
    const url = new URL(window.location.href);
    if (url.searchParams.has("project")) {
      url.searchParams.delete("project");
      window.history.replaceState(null, "", url);
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: reduced ? scrollYProgress : progress }}
      />
      <header className="nav-shell">
        <a className="logo" href="#home" aria-label="Mulail home">
          m<span>.</span>
        </a>
        <nav aria-label="Main navigation" className={menu ? "open" : ""}>
          {nav.map(([id, label]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={() => setMenu(false)}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
        <a className="nav-contact" href={profile.email}>
          Let’s connect <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section
          id="home"
          className="hero"
          onPointerMove={(e) => {
            if (!reduced && e.pointerType === "mouse" && glow.current) {
              const r = e.currentTarget.getBoundingClientRect();
              glow.current.style.transform = `translate(${e.clientX - r.left}px,${e.clientY - r.top}px)`;
            }
          }}
        >
          <div ref={glow} className="mouse-glow" />
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> CURIOUS MIND. ALWAYS BUILDING.
            </p>
            <h1>
              <span>Hi, I’m</span> Mulail<span className="cyan">.</span>
            </h1>
            <div className="role-line">
              <span className="role-mark">&lt;/&gt;</span>
              <span key={role} className="role">
                {
                  [
                    "Robotics Innovator",
                    "Student Developer",
                    "IoT Enthusiast",
                    "Electronics Creator",
                    "Future Technology Builder",
                  ][role]
                }
              </span>
            </div>
            <p className="hero-statement">
              Building ideas into
              <br />
              <em>intelligent technology.</em>
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View my projects <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#achievements">
                My achievements <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-bottom">
              <Socials />
              <span className="vertical-rule" />
              <span>STUDENT & BUILDER · KERALA, INDIA</span>
            </div>
          </div>
          <div className="hero-visual portrait-visual">
            <div className="portrait-orbit orbit-one" aria-hidden="true" /><div className="portrait-orbit orbit-two" aria-hidden="true" /><span className="portrait-spark spark-one" aria-hidden="true">+</span><span className="portrait-spark spark-two" aria-hidden="true">+</span>
            <div className="portrait-frame">
              <Image
                src={`${assetBase}/images/mulail-cutout.webp`}
                alt="Mulail wearing glasses and a brown embroidered shirt"
                fill
                sizes="(max-width: 760px) 86vw, 440px"
                preload
                className="hero-portrait"
              />
            </div>

          </div>
          <div className="hero-foot">
            <span>ROBOTICS · CODE · CURIOSITY</span>
            <a href="#about">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
            <span>PORTFOLIO / 2026</span>
          </div>
        </section>
        <div className="discipline-strip">
          <span>
            <Cpu /> Robotics & embedded systems
          </span>
          <Plus />
          <span>
            <Radio /> Connected ideas
          </span>
          <Plus />
          <span>
            <Code2 /> Thoughtful software
          </span>
          <Plus />
          <span>
            <Sparkles /> Learning by building
          </span>
        </div>
        <section id="about" className="section about">
          <SectionTitle
            index="01"
            kicker="THE PERSON BEHIND THE PROJECTS"
            title="A curious mind. A maker at heart."
          />
          <div className="about-columns">
            <div className="about-manifesto">
              I like asking
              <br />
              <span>“What if?”</span>
              <br />
              Then building
              <br />
              an answer.<span className="cyan">_</span>
            </div>
            <div className="about-body">
              <p>
                I’m Mulail, a Class 10 student at AKM HSS Kottoor, studying the
                Kerala SCERT syllabus. My favorite way to learn is to turn an
                idea into something I can code, wire, test, and improve.
              </p>
              <p>
                As part of Team ThinkORB, I explore robotics and autonomous
                systems. My projects also take me into environmental sensing,
                embedded electronics, and full-stack web development. I’m
                especially curious about how AI, computer vision, and connected
                devices can make technology more useful.
              </p>
              <p>
                I’m also planning beginner electronics workshops with a six-person team.
                My focus is hands-on activities for ages 8–11, starting with ideas
                such as an LDR-based laser security circuit.
              </p>
              <div className="about-facts">
                <div>
                  <span>LEARNING AT</span>
                  <strong>AKM HSS Kottoor</strong>
                  <small>Class 10 · Kerala SCERT</small>
                </div>
                <div>
                  <span>BUILDING WITH</span>
                  <strong>Team ThinkORB</strong>
                  <small>Robotics & exploration</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="section achievements">
          <div className="section-top">
            <SectionTitle
              index="02"
              kicker="MILESTONES THAT MATTER"
              title="Small steps. Meaningful recognition."
            />
            <p>
              Every milestone is another reason
              <br />
              to keep learning and building.
            </p>
          </div>
          <div className="award-grid">
            {achievements.map((a, i) => (
              <article className="award-card" key={a.title}>
                <div className="award-top">
                  {i < 2 ? (
                    <Medal size={34} />
                  ) : i === 2 ? (
                    <Sparkles size={34} />
                  ) : (
                    <Award size={34} />
                  )}
                  <span>{a.year || "MILESTONE"}</span>
                </div>
                <p className="award-label">{a.label}</p>
                <h3>{a.distinction}</h3>
                <h4>{a.title}</h4>
                <p>{a.text}</p>
                <div className="award-place">
                  <span className="status-dot" />
                  {a.place}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="section certificates"
          aria-labelledby="certificates-title"
        >
          <div className="section-heading">
            <p className="eyebrow">FROM MY JOURNEY</p>
            <h2 id="certificates-title">Awards & certificates.</h2>
          </div>
          <div className="certificate-grid">
            {photos
              .filter((p) => p.category === "Certificate")
              .map((p) => (
                <button
                  key={p.src}
                  onClick={() => setPhoto(photos.indexOf(p))}
                  aria-label={`View certificate: ${p.caption}`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={1132}
                    height={1600}
                    loading="lazy"
                  />
                  <span>
                    {p.caption}
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              ))}
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="section-top">
            <SectionTitle
              index="03"
              kicker="IDEAS, MADE TANGIBLE"
              title="Built with purpose. Powered by curiosity."
            />
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> Explore my GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="project-search">
            <label htmlFor="project-search">Find a project</label>
            <input id="project-search" type="search" placeholder="Search projects or technology…" value={search} onChange={e => setSearch(e.target.value)} />
            <span role="status">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</span>
          </div>
          <div className="filters" aria-label="Filter projects">
            {["All", "Robotics", "IoT", "Web", "Electronics", "Concept"].map(
              (f) => (
                <button
                  key={f}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === "All" && <span>{String(projects.length).padStart(2, "0")}</span>}
                </button>
              ),
            )}
          </div>
          <div className="project-grid">
            {visibleProjects
              .map((p) => (
                <article
                  className={`project-card ${p.id === "01" && filter === "All" ? "featured" : ""}`}
                  key={p.id}
                >
                  <button
                    className="project-image"
                    onClick={() => openProject(p)}
                    aria-label={`View details: ${p.title}`}
                  >
                    <ProjectArt project={p} />
                    <span className="project-number">/{p.id}</span>
                    <span className="project-open">
                      <ArrowUpRight />
                    </span>
                  </button>
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{p.category}</span>
                      <span>
                        <i />
                        {p.status}
                      </span>
                    </div>
                    <h3>{p.title}</h3>
                    {p.id === "01" && (
                      <Image
                        className="brand-logo"
                        src={`${assetBase}/images/speleo-brand.webp`}
                        alt="Speleo Bot project logo"
                        width={210}
                        height={70}
                      />
                    )}
                    <p>{p.description}</p>
                    {p.award && (
                      <p className="project-award">
                        <Award size={15} />
                        {p.award}
                      </p>
                    )}
                    <div className="tech-tags">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <button className="text-link" onClick={() => openProject(p)}>
                      View project details <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
          </div>
          {visibleProjects.length === 0 && <div className="empty-projects"><p>No projects match. Try another technology or category.</p><button className="button secondary" onClick={() => { setSearch(""); setFilter("All"); }}>Reset filters</button></div>}
        </section>
        <section id="skills" className="section skills">
          <SectionTitle
            index="04"
            kicker="MY TOOLKIT"
            title="Different tools. One builder’s mindset."
          />
          <div className="skills-grid">
            {[
              {
                icon: <Cpu />,
                title: "Robotics & embedded",
                items: [
                  "Raspberry Pi",
                  "ESP32",
                  "Arduino",
                  "Python",
                  "C/C++",
                  "Sensors & actuators",
                ],
              },
              {
                icon: <Radio />,
                title: "Connected systems",
                items: [
                  "IoT prototyping",
                  "Wi-Fi dashboards",
                  "LoRa",
                  "Environmental sensing",
                  "SLAM exploration",
                ],
              },
              {
                icon: <Code2 />,
                title: "Web development",
                items: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase",
                  "PostgreSQL",
                ],
              },
            ].map((group) => (
              <div className="skill-group" key={group.title}>
                {group.icon}
                <h3>{group.title}</h3>
                <div className="tech-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="journey" className="section journey">
          <SectionTitle
            index="05"
            kicker="STILL AT THE BEGINNING"
            title="Learning. Building. Going further."
            text="A journey shaped by experiments, teamwork, and showing up with something to share."
          />
          <div className="timeline">
            {[
              {
                label: "THE FOUNDATIONS",
                title: "From components to creations",
                text: "Learning through Arduino circuits, LED patterns, sensors, and hands-on experiments.",
              },
              {
                label: "BUILDING TOGETHER",
                title: "Exploring with ThinkORB",
                text: "Working on Speleo Bot and bringing robotics ideas into competition settings.",
              },
              {
                label: "WRO · 2026",
                title: "Kochi → Hyderabad",
                text: "Regional second place and a silver medal, followed by a silver badge at the Nationals.",
              },
              {
                label: "THE NEXT CHAPTER",
                title: "Turning curiosity into impact",
                text: "District-level YIP selection and Science Fair qualification. Continuing to explore useful technology.",
              },
            ].map((step, i) => (
              <details key={step.title} open={i === 2}>
                <summary>
                  <span className="timeline-node">0{i + 1}</span>
                  <span>
                    <small>{step.label}</small>
                    <strong>{step.title}</strong>
                  </span>
                  <Plus size={19} />
                </summary>
                <p>{step.text}</p>
              </details>
            ))}
          </div>
        </section>
        {photos.length > 0 && (
          <section id="gallery" className="section gallery">
            <SectionTitle
              index="06"
              kicker="THROUGH THE LENS"
              title="A little more of my world."
              text="A few moments along the way."
            />
            <div className="gallery-grid">
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  className={`gallery-item gallery-${p.category.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setPhoto(i)}
                  aria-label={`Open photo: ${p.caption}`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                  <span>
                    {p.caption}
                    <Plus size={18} />
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}
        <section id="contact" className="section contact">
          <p className="eyebrow">
            <span className="status-dot" /> LET’S BUILD SOMETHING MEANINGFUL
          </p>
          <h2>
            Great ideas start
            <br />
            with a <em>conversation.</em>
            <span className="cyan">↗</span>
          </h2>
          <p>
            Have a project, a question, or a new perspective?
            <br />
            I’d love to connect with fellow builders and curious minds.
          </p>
          <a className="button primary" href={profile.gmail} target="_blank" rel="noreferrer">
            Say hello <Mail size={18} />
          </a>
          <a className="email-link" href={profile.email}>
            mulail.lallu2011@gmail.com <ArrowUpRight size={15} />
          </a>
          <Socials />
        </section>
      </main>
      <footer>
        <a className="logo" href="#home">
          m<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Mulail. Made with curiosity.</p>
        <div>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        onCancel={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (photo !== null && e.key === "ArrowRight")
            setPhoto((photo + 1) % photos.length);
          if (photo !== null && e.key === "ArrowLeft")
            setPhoto((photo - 1 + photos.length) % photos.length);
        }}
        aria-labelledby="dialog-title"
      >
        <div className="dialog-inner">
          <button
            className="dialog-close"
            onClick={close}
            aria-label="Close details"
          >
            <X />
          </button>
          {project && (
            <>
              <div className="dialog-art">
                <ProjectArt project={project} />
              </div>
              <p className="eyebrow">
                {project.category} / {project.status}
              </p>
              <h2 id="dialog-title">{project.title}</h2>
              {project.filesUrl && (
                <section aria-label="Project files and preview">
                  <div className="guide-actions">
                    <a className="button primary" href={project.filesUrl} target="_blank" rel="noreferrer">Files <Github size={18} /></a>
                    {project.previewUrl ? (
                      <a className="button secondary" href={project.previewUrl} target="_blank" rel="noreferrer">Preview <ArrowUpRight size={18} /></a>
                    ) : (
                      <button className="button secondary" disabled aria-describedby="preview-unavailable">Preview — unavailable</button>
                    )}
                  </div>
                  {!project.previewUrl && <p id="preview-unavailable">Preview unavailable: source files are available on GitHub, but a working live app deployment has not yet been verified.</p>}
                </section>
              )}
              <p>{project.detail}</p>
              <div className="guide-actions"><button className="button secondary" onClick={shareProject}>Copy project link</button><span role="status">{shareStatus}</span></div>
              <ProjectGuide key={project.id} id={project.id} />
              {project.award && (
                <p className="project-award">
                  <Award size={18} />
                  {project.award}
                </p>
              )}
              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {project.repo && (
                <a
                  className="button secondary"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <Github size={18} />
                </a>
              )}
            </>
          )}
          {photo !== null && photos[photo] && (
            <>
              <Image
                className="lightbox-photo"
                src={photos[photo].src}
                alt={photos[photo].alt}
                width={1400}
                height={1000}
              />
              <h2 id="dialog-title">{photos[photo].caption}</h2>
              <div className="lightbox-controls">
                <button
                  onClick={() =>
                    setPhoto((photo - 1 + photos.length) % photos.length)
                  }
                  aria-label="Previous photo"
                >
                  <ChevronLeft />
                </button>
                <span>
                  {photo + 1} / {photos.length}
                </span>
                <button
                  onClick={() => setPhoto((photo + 1) % photos.length)}
                  aria-label="Next photo"
                >
                  <ChevronRight />
                </button>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}

