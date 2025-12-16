import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Download,
  ExternalLink,
  Briefcase,
  Send,
  Menu,
  X,
  ZoomIn,
  ZoomOut,
  Moon,
  Sun,
  Monitor,
  ChevronLeft,
  CheckCircle,
  Sparkles,
  User,
  FileText,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Document, Page, pdfjs } from "react-pdf";

// Set PDF worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Core Configuration
import { CONFIG } from "./config";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [themeColor] = useState(CONFIG.primaryColor);

  // New States
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // ScrollSpy: Tracks active section based on viewport center
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when element hits center of viewport
    );

    const sections = ["about", "resume", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Theme Manager: Syncs with localStorage and System preferences
  useEffect(() => {
    const root = window.document.documentElement;
    // Persist to local storage
    localStorage.setItem("theme", theme);

    const applyTheme = (t: string) => {
      const isDark =
        t === "dark" ||
        (t === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme(theme);

    // Listen for system changes if strictly 'system'
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        if (e.matches) root.classList.add("dark");
        else root.classList.remove("dark");
      };
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  // Sync CSS primary color variable
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", themeColor);
  }, [themeColor]);

  const Sidebar = () => (
    <aside
      className={`fixed lg:sticky top-0 lg:top-8 left-0 h-screen lg:h-[calc(100vh-4rem)] bg-apple-surface/90 backdrop-blur-3xl border border-apple-border rounded-none lg:rounded-3xl p-5 lg:p-6 z-50 w-80 lg:w-[22rem] transform transition-transform duration-300 flex flex-col overflow-y-auto noscrollbar ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="lg:hidden absolute top-4 right-4 text-apple-text-secondary hover:text-primary bg-primary/5 p-2 rounded-full z-50"
      >
        <X size={20} />
      </button>

      <div className="flex flex-col items-center mb-6 shrink-0">
        <div className="w-24 h-24 bg-apple-surface-highlight rounded-full p-1 shadow-xl mb-3 relative overflow-hidden group">
          <img
            src={CONFIG.personal.avatar}
            alt={CONFIG.personal.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold text-apple-text-primary text-center">
          {CONFIG.personal.name}
        </h1>
        <p className="mt-1 px-3 py-0.5 bg-apple-surface-highlight rounded-full text-xs text-apple-text-secondary">
          {CONFIG.personal.title}
        </p>
      </div>

      <div className="mb-6 shrink-0">
        <h3 className="text-[10px] uppercase tracking-widest text-apple-text-muted font-bold mb-3 px-1">
          Menu
        </h3>
        <nav>
          <ul className="grid grid-cols-1 gap-2">
            {(["about", "projects", "resume", "contact"] as const).map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(section);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(section);
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl capitalize transition-all flex items-center gap-3 border-l-4 ${
                      activeSection === section
                        ? "border-primary bg-primary/10 text-primary font-bold"
                        : "border-transparent text-apple-text-secondary hover:bg-apple-surface-highlight hover:text-primary"
                    }`}
                  >
                    {section === "about" && <User size={18} />}
                    {section === "projects" && <Briefcase size={18} />}
                    {section === "resume" && <FileText size={18} />}
                    {section === "contact" && <Mail size={18} />}
                    <span className="text-sm font-medium">{section}</span>
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      <div className="mb-6 shrink-0">
        <h3 className="text-[10px] uppercase tracking-widest text-apple-text-muted font-bold mb-3 px-1">
          Contact
        </h3>
        <div className="space-y-3">
          <a
            href={`mailto:${CONFIG.personal.email}`}
            className="flex items-center gap-3 text-apple-text-secondary hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-apple-surface-highlight/50 border border-apple-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Mail size={14} />
            </div>
            <span className="text-xs font-medium truncate">
              {CONFIG.personal.email}
            </span>
          </a>
          <a
            href={`tel:${CONFIG.personal.phone}`}
            className="flex items-center gap-3 text-apple-text-secondary hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-apple-surface-highlight/50 border border-apple-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Phone size={14} />
            </div>
            <span className="text-xs font-medium">{CONFIG.personal.phone}</span>
          </a>
          <div className="flex items-center gap-3 text-apple-text-secondary">
            <div className="w-8 h-8 rounded-lg bg-apple-surface-highlight/50 border border-apple-border flex items-center justify-center">
              <MapPin size={14} />
            </div>
            <span className="text-xs font-medium">
              {CONFIG.personal.location}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto" />

      <div className="shrink-0 space-y-3">
        <h3 className="text-[10px] uppercase tracking-widest text-apple-text-muted font-bold px-1">
          Socials
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <a
            href={CONFIG.personal.social.github}
            target="_blank"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-apple-surface-highlight border border-apple-border text-apple-text-secondary transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
          >
            <Github size={20} />
            <span className="text-[10px] mt-1 font-medium">GitHub</span>
          </a>
          <a
            href={CONFIG.personal.social.linkedin}
            target="_blank"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-apple-surface-highlight border border-apple-border text-apple-text-secondary transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
          >
            <Linkedin size={20} />
            <span className="text-[10px] mt-1 font-medium">LinkedIn</span>
          </a>
          <a
            href={CONFIG.personal.social.twitter}
            target="_blank"
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-apple-surface-highlight border border-apple-border text-apple-text-secondary transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
          >
            <Twitter size={20} />
            <span className="text-[10px] mt-1 font-medium">Twitter</span>
          </a>
        </div>

        <div className="pt-4 border-t border-apple-border/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-apple-text-secondary">
              Theme
            </span>
            <div className="flex bg-apple-surface-highlight rounded-lg p-0.5">
              {(["light", "dark", "system"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`p-1.5 rounded-md transition-all ${
                    theme === t
                      ? "bg-white dark:bg-zinc-700 shadow text-primary"
                      : "text-apple-text-secondary hover:text-primary"
                  }`}
                  title={t}
                >
                  {t === "light" && <Sun size={14} />}
                  {t === "dark" && <Moon size={14} />}
                  {t === "system" && <Monitor size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );

  // ... (ResumeSection needs update) ...

  // ... (Main Render needs update) ...

  const ResumeSection = () => {
    const [scale, setScale] = useState(1.0);
    const [containerWidth, setContainerWidth] = useState<number | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);

    useEffect(() => {
      const updateWidth = () => {
        const container = document.getElementById("resume-container");
        if (container) {
          setContainerWidth(container.clientWidth);
        }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const effectiveScale = containerWidth
      ? Math.min(scale, containerWidth / 600)
      : scale;

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
      setNumPages(numPages);
    }

    return (
      <article className="animate-fadeIn">
        <header className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-4xl font-bold text-apple-text-primary mb-2">
              Resume
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
          </div>

          <div className="flex gap-2 self-end sm:self-auto">
            <button
              onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
              className="p-2 bg-apple-surface-highlight rounded-lg text-apple-text-secondary hover:text-primary transition-colors"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={() => setScale((s) => Math.min(2.0, s + 0.1))}
              className="p-2 bg-apple-surface-highlight rounded-lg text-apple-text-secondary hover:text-primary transition-colors"
            >
              <ZoomIn size={20} />
            </button>
            <a
              href={CONFIG.personal.resumePDF}
              download
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              <span className="hidden sm:inline">Download</span>
            </a>
          </div>
        </header>

        <div
          id="resume-container"
          className="flex flex-col items-center bg-apple-surface-highlight/20 border border-apple-border rounded-2xl p-2 lg:p-4 overflow-hidden min-h-[500px] gap-8"
        >
          <Document
            file={CONFIG.personal.resumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col gap-8"
            loading={
              <div className="text-apple-text-secondary animate-pulse">
                Loading Resume...
              </div>
            }
            error={
              <div className="text-red-500">
                Failed to load PDF. Please download to view.
              </div>
            }
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={effectiveScale}
                width={
                  containerWidth
                    ? containerWidth - (window.innerWidth < 1024 ? 16 : 32)
                    : undefined
                }
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-2xl rounded-lg overflow-hidden border border-white/10"
              />
            ))}
          </Document>
        </div>
      </article>
    );
  };

  const AboutSection = () => (
    <article className="animate-fadeIn">
      <header className="mb-8">
        <h2 className="text-4xl font-bold text-apple-text-primary mb-2">
          Developer Profile
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
      </header>
      {/* Bio */}
      <section className="space-y-4 mb-12">
        {CONFIG.personal.bio.map((paragraph, idx) => (
          <p key={idx} className="text-apple-text-secondary leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>
      {/* Services */}
      <section>
        <h3 className="text-2xl font-bold text-apple-text-primary mb-8">
          Technical Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONFIG.services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-apple-surface-highlight/50 backdrop-blur-xl border border-apple-border rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-apple-text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-apple-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Tech Stack Visuals */}
      <section className="mb-12 mt-12">
        <h3 className="text-2xl font-bold text-apple-text-primary mb-8">
          Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(CONFIG.techStack).map(([category, items]) => (
            <div
              key={category}
              className="bg-apple-surface-highlight/30 border border-apple-border rounded-2xl p-6"
            >
              <h4 className="capitalize text-lg font-bold text-apple-text-primary mb-4">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((tech: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-apple-surface text-apple-text-secondary rounded-lg border border-apple-border shadow-sm hover:text-primary hover:border-primary transition-colors cursor-default"
                  >
                    <span>{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );

  const ProjectDetailView = ({
    project,
    onClose,
  }: {
    project: any;
    onClose: () => void;
  }) => (
    <div className="animate-fadeIn">
      <button
        onClick={onClose}
        className="mb-6 flex items-center gap-2 text-apple-text-secondary hover:text-apple-text-primary transition-colors"
      >
        <ChevronLeft size={20} />
        <span>Back to Projects</span>
      </button>

      <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden mb-8 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-apple-base via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4 inline-block">
            {project.category}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            {project.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xl font-bold text-apple-text-primary mb-4">
              Overview
            </h3>
            <p className="text-apple-text-secondary leading-relaxed text-lg">
              {project.longDescription || project.description}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-apple-text-primary mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features &&
                project.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-apple-surface-highlight/30 p-4 rounded-xl border border-apple-border"
                  >
                    <CheckCircle
                      size={20}
                      className="text-primary mt-1 shrink-0"
                    />
                    <span className="text-apple-text-secondary">{feature}</span>
                  </li>
                ))}
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-apple-surface-highlight/30 border border-apple-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-apple-text-primary mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech &&
                project.tech.map((t: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-apple-surface text-apple-text-secondary text-sm rounded-lg border border-apple-border"
                  >
                    {t}
                  </span>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all flex justify-center items-center gap-2"
            >
              <ExternalLink size={20} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-apple-surface-highlight text-apple-text-primary border border-apple-border rounded-xl font-bold text-center hover:bg-apple-surface-highlight/80 transition-all flex justify-center items-center gap-2"
            >
              <Github size={20} /> View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioSection = () => {
    return (
      <article className="animate-fadeIn">
        <header className="mb-12">
          <h2 className="text-4xl font-bold text-apple-text-primary mb-2">
            Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", ...new Set(CONFIG.projects.map((p) => p.category))].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedFilter === filter
                    ? "bg-primary/10 text-primary border-primary"
                    : "bg-apple-surface-highlight text-apple-text-secondary border-transparent hover:bg-apple-surface-highlight/80 hover:text-primary"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONFIG.projects
            .filter(
              (p) => selectedFilter === "all" || p.category === selectedFilter
            )
            .map((project, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="group text-left bg-apple-surface border border-apple-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-primary text-sm mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold text-apple-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-apple-text-secondary text-sm lines-clamp-2">
                    {project.description}
                  </p>
                </div>
              </button>
            ))}
        </div>
      </article>
    );
  };

  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [sendError, setSendError] = useState("");

    const handleSendEmail = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSending(true);
      setSendError("");

      try {
        await emailjs.send(
          CONFIG.emailjs.serviceId,
          CONFIG.emailjs.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          CONFIG.emailjs.publicKey
        );
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000); // Reset success after 5s
      } catch (error) {
        console.error("EmailJS Error:", error);
        setSendError(
          "Failed to send message. Please try again or email directly."
        );
      } finally {
        setIsSending(false);
      }
    };

    return (
      <article className="animate-fadeIn">
        <header className="mb-12">
          <h2 className="text-4xl font-bold text-apple-text-primary mb-2">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Info & CTA */}
          <div className="space-y-8">
            <p className="text-lg text-apple-text-secondary leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Let's build something
              amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-apple-text-primary">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-apple-text-muted uppercase tracking-wider">
                    Email
                  </h4>
                  <a
                    href={`mailto:${CONFIG.personal.email}`}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {CONFIG.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-apple-text-primary">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-apple-text-muted uppercase tracking-wider">
                    Phone
                  </h4>
                  <a
                    href={`tel:${CONFIG.personal.phone}`}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {CONFIG.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-apple-text-primary">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-apple-text-muted uppercase tracking-wider">
                    Location
                  </h4>
                  <span className="text-lg font-medium">
                    {CONFIG.personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-apple-surface border border-apple-border rounded-3xl p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-apple-text-primary mb-6">
              Send a Message
            </h3>

            {/* Recruiter / Quick Connect Banner */}
            {/* Recruiter / Quick Connect Banner */}
            <div className="mb-6 p-4 bg-primary/5 border border-primary/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-primary text-sm flex items-center gap-2">
                  <Briefcase size={14} /> Recruiting or Hiring?
                </h4>
                <p className="text-xs text-apple-text-secondary mt-1">
                  Use our template for a fast, professional inquiry.
                </p>
              </div>
              <div className="relative group/tooltip">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.name || !formData.email) {
                      // Trigger native validation feedback if possible, or simple alert/shake
                      const nameInput = document.getElementById(
                        "name"
                      ) as HTMLInputElement;
                      const emailInput = document.getElementById(
                        "email"
                      ) as HTMLInputElement;

                      if (!formData.name && nameInput) {
                        nameInput.focus();
                        nameInput.classList.add(
                          "ring-2",
                          "ring-red-500",
                          "ring-offset-2"
                        );
                        setTimeout(
                          () =>
                            nameInput.classList.remove(
                              "ring-2",
                              "ring-red-500",
                              "ring-offset-2"
                            ),
                          2000
                        );
                      } else if (!formData.email && emailInput) {
                        emailInput.focus();
                        emailInput.classList.add(
                          "ring-2",
                          "ring-red-500",
                          "ring-offset-2"
                        );
                        setTimeout(
                          () =>
                            emailInput.classList.remove(
                              "ring-2",
                              "ring-red-500",
                              "ring-offset-2"
                            ),
                          2000
                        );
                      }
                      return;
                    }

                    // Personalize logic
                    const personalizedMessage =
                      CONFIG.quickConnectMessage.replace(
                        "Hi Sandeep,",
                        `Hi Sandeep, I'm ${formData.name}.`
                      );

                    setFormData((prev) => ({
                      ...prev,
                      message: personalizedMessage,
                    }));
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap border ${
                    !formData.name || !formData.email
                      ? "bg-apple-surface-highlight text-apple-text-muted border-apple-border cursor-not-allowed hover:bg-apple-surface-highlight"
                      : "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white"
                  }`}
                >
                  <Sparkles size={14} /> Auto-fill Message
                </button>
                {(!formData.name || !formData.email) && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-apple-text-primary text-apple-surface text-[10px] text-center rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none shadow-xl">
                    Please fill Name & Email first to generate a personalized
                    message.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-apple-text-primary"></div>
                  </div>
                )}
              </div>
            </div>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-apple-text-secondary"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Rahul from T-Hub"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-apple-surface-highlight border border-apple-border rounded-xl text-apple-text-primary placeholder:text-apple-text-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-apple-text-secondary"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="rahul@t-hub.co"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-apple-surface-highlight border border-apple-border rounded-xl text-apple-text-primary placeholder:text-apple-text-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-apple-text-secondary"
                  >
                    Message
                  </label>
                </div>
                <textarea
                  id="message"
                  required
                  placeholder="Hi Sandeep, I'm looking for a React Native expert..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-apple-surface-highlight border border-apple-border rounded-xl text-apple-text-primary placeholder:text-apple-text-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className={`w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all shadow-lg ${
                    isSent
                      ? "bg-green-500 text-white cursor-default shadow-green-500/20"
                      : "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] shadow-primary/20"
                  } ${isSending ? "opacity-70 cursor-wait" : ""}`}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : isSent ? (
                    <>
                      <CheckCircle size={18} /> Message Sent!
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
                {sendError && (
                  <p className="mt-2 text-red-500 text-xs text-center">
                    {sendError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-apple-base text-apple-text-primary font-sans selection:bg-primary/30">
      <div className="flex max-w-[1920px] mx-auto min-h-screen relative justify-evenly">
        {/* Sidebar */}
        <Sidebar />

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 px-4 pt-20 pb-12 lg:px-10 lg:py-8 lg:max-w-6xl transition-all duration-300">
          <section id="about" className="min-h-screen py-8 scroll-mt-20">
            <AboutSection />
          </section>

          <div className="h-px bg-apple-border my-12" />

          {/* Section 2: Projects */}
          <section id="projects" className="min-h-screen py-8 scroll-mt-20">
            <PortfolioSection />
          </section>

          <div className="h-px bg-apple-border my-12" />

          {/* Section 3: Resume */}
          <section id="resume" className="min-h-screen py-8 scroll-mt-20">
            <ResumeSection />
          </section>

          <div className="h-px bg-apple-border my-12" />

          {/* Section 4: Contact */}
          <section id="contact" className="min-h-[50vh] py-8 scroll-mt-20">
            <ContactSection />
          </section>

          {/* Project Detail Modal Overlay */}
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />
              <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-apple-surface rounded-3xl shadow-2xl animate-fadeIn">
                <div className="p-6 lg:p-8">
                  <ProjectDetailView
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                  />
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-apple-surface/80 backdrop-blur-md border-b border-apple-border z-30 flex items-center justify-between px-4">
          <div className="font-bold text-lg">{CONFIG.personal.name}</div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-apple-text-primary hover:bg-apple-surface-highlight rounded-lg"
          >
            <Menu size={24} />
          </button>
        </header>
      </div>
    </div>
  );
}

// ============================================
// REUSABLE COMPONENTS
// ============================================
