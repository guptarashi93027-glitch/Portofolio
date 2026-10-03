import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Code2, Sparkles, Trophy, GraduationCap, Rocket, Menu, X,
  ExternalLink, ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Rashi Gupta",
  location: "Chhatarpur, Madhya Pradesh, India",
  education: "Madhav Institute of Technology and Science, Gwalior",
  degree: "B.Tech · 2025–2029",
  linkedin: "https://www.linkedin.com/in/rashi-gupta-4454653a2/",
};

const projects = [
  {
    title: "RepoScope",
    tag: "Software Evolution Analytics",
    description:
      "A Git repository mining and AI-driven software evolution analytics platform designed to turn repository history into useful engineering insights.",
    stack: ["Python", "PyDriller", "FastAPI", "React"],
    icon: "⌁"
  },
  {
    title: "CreatoKite",
    tag: "Creator × Brand Platform",
    description:
      "A creator–brand collaboration platform focused on discovery, collaboration workflows, campaign management and performance tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: "✦"
  },
  {
    title: "WasteWise",
    tag: "AI + Sustainability",
    description:
      "An AI-powered smart waste management concept exploring how technology can help people identify and dispose of waste more appropriately.",
    stack: ["AI", "Web", "Sustainability"],
    icon: "♻"
  }
];

const achievements = [
  {
    title: "1st Place — Frontend Battle 2K26",
    text: "Public LinkedIn activity highlights a first-place Frontend Battle 2K26 achievement.",
    icon: Trophy
  },
  {
    title: "5th Place — Frontend Battle 2K26",
    text: "The public profile also shows a post announcing a 5th-place result in Frontend Battle 2K26.",
    icon: Trophy
  },
  {
    title: "Hacksagon 2K26",
    text: "Hackathon activity and a winners-related post are visible in the public profile activity.",
    icon: Rocket
  },
  {
    title: "Meritocracy Award Activity",
    text: "The profile's public activity includes a milestone post about a Meritocracy Award for significant contribution in quality.",
    icon: Sparkles
  }
];

const skills = [
  "C++", "Data Structures & Algorithms", "JavaScript", "React",
  "Node.js", "Express", "MongoDB", "Python", "FastAPI",
  "Git & GitHub", "HTML", "CSS", "Tailwind CSS", "AI Tools"
];

function App() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const close = () => setMenu(false);

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark">R</span>
          <span>Rashi<span className="brand-dot">.</span></span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["About", "Projects", "Achievements", "Skills"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>Let's connect <ArrowUpRight size={16}/></a>
        </nav>

        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
            {dark ? "☼" : "☾"}
          </button>
          <button className="menu-btn" onClick={() => setMenu(v => !v)} aria-label="Toggle menu">
            {menu ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> B.Tech CSE student · builder · learner</div>
            <h1>Building ideas into <em>useful digital experiences.</em></h1>
            <p className="hero-text">
              I'm Rashi Gupta, a computer science student at MITS Gwalior who enjoys
              turning real-world problems into thoughtful software, experimenting with
              AI, and building clean interfaces.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Linkedin size={17}/>
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15}/> {profile.location}</span>
              <span><GraduationCap size={15}/> {profile.degree}</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="code-card">
              <div className="window-bar"><i></i><i></i><i></i><span>rashi.dev</span></div>
              <pre>{`const rashi = {
  focus: "building",
  interests: [
    "web development",
    "AI",
    "problem solving"
  ],
  mindset: "learn → build → iterate"
};`}</pre>
              <div className="status"><span></span> open to learning & collaboration</div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><ChevronDown size={18}/> scroll to explore</a>
        </section>

        <section id="about" className="section split">
          <div>
            <p className="section-kicker">01 — ABOUT</p>
            <h2>Curious by default.<br/><em>Hands-on by choice.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              Rashi is pursuing a B.Tech at Madhav Institute of Technology and Science,
              Gwalior (2025–2029). Her public profile reflects a growing focus on
              software development, frontend work, hackathons and practical projects.
            </p>
            <p>
              The portfolio brings those threads together: building interfaces, exploring
              AI-enabled products, working with modern web stacks, and learning through
              competitions and real projects.
            </p>
            <div className="stats">
              <div><strong>2025–29</strong><span>B.Tech journey</span></div>
              <div><strong>397+</strong><span>LinkedIn connections</span></div>
              <div><strong>3</strong><span>Featured builds</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 — SELECTED WORK</p>
              <h2>Things I've been <em>building.</em></h2>
            </div>
            <Code2 size={34} className="heading-icon"/>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project-card card-${i}`} key={p.title}>
                <div className="project-top">
                  <span className="project-number">0{i + 1}</span>
                  <span className="project-symbol">{p.icon}</span>
                </div>
                <p className="project-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section achievements">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 — MILESTONES</p>
              <h2>Learning through <em>doing.</em></h2>
            </div>
          </div>
          <div className="timeline">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <div className="timeline-item" key={a.title}>
                  <div className="timeline-line"><span>{String(i + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-content">
                    <Icon size={20}/>
                    <div><h3>{a.title}</h3><p>{a.text}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <p className="section-kicker">04 — TOOLKIT</p>
          <div className="skills-layout">
            <h2>A growing <em>toolkit.</em></h2>
            <div className="skill-cloud">
              {skills.map((s, i) => <span key={s} style={{"--i": i}}>{s}</span>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-card">
            <p className="section-kicker">05 — CONTACT</p>
            <h2>Have an idea?<br/><em>Let's build.</em></h2>
            <p>For collaborations, projects, hackathons or simply a good tech conversation.</p>
            <div className="contact-buttons">
              <a className="button primary" href={profile.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn <Linkedin size={17}/>
              </a>
              <a className="button secondary" href="mailto:your-email@example.com">
                Email me <Mail size={17}/>
              </a>
            </div>
            <p className="edit-note">Replace the placeholder email in <code>src/main.jsx</code> with your actual email.</p>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Rashi Gupta</span>
        <span>Designed & built with React</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);