/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Incyte",
      role: "React Developer",
      description:
        "AI-driven web interface with secure SSO authentication, chatbot integration, and document management.",
      challenge:
        "Build animated, responsive UI with complex AI model integration",
      solution:
        "Implemented React + Tailwind with shadcn/ui, optimized API layers, CDN-based asset delivery",
      impact: "Seamless AI-powered user experience with high performance",
      tech: ["React", "Tailwind CSS", "shadcn/ui", "SSO", "AI/ML Integration"],
      metrics: { performance: "95%", users: "Enterprise" },
      codeLink: "https://github.com/mayank5597/lexi_chatbot",
    },
    {
      name: "Health Flow Solution",
      role: "React Developer",
      description:
        "In-house appointment scheduler with Google Calendar sync, form handling, and type-safe development.",
      challenge:
        "Integrate multiple services while maintaining clean architecture",
      solution:
        "Redux state management, TypeScript, React Hook Form + Zod validation, AWS deployment",
      impact: "Streamlined appointment management for healthcare providers",
      tech: [
        "React",
        "Redux",
        "TypeScript",
        "Google Calendar API",
        "AWS",
        "Vercel",
      ],
      metrics: { performance: "92%", deployments: "Multi-cloud" },
    },
    {
      name: "PSBU Digital Solution",
      role: "Next.js & Node.js Developer",
      description:
        "Complex data visualization platform with SSR/SSG, featuring charts, graphs, and email templates.",
      challenge: "Handle large datasets with optimal rendering performance",
      solution:
        "React Query + Zustand, Storybook testing, SSR/SSG optimization, custom chart integrations",
      impact: "High-performance data dashboards with extensive test coverage",
      tech: [
        "Next.js",
        "Node.js",
        "React Query",
        "Zustand",
        "Chart.js",
        "D3.js",
        "Storybook",
      ],
      metrics: { testing: "High Coverage", rendering: "SSR/SSG" },
    },
    {
      name: "SalesBot.AI",
      role: "MERN Developer",
      description:
        "Chat-based AI sales assistant with role-based access (User & Admin) and backend AI integration.",
      challenge: "Create intuitive chat UI with complex backend AI workflows",
      solution:
        "MERN stack with Docker containerization, optimized frontend performance",
      impact: "Automated sales outreach with intelligent conversation handling",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Docker",
        "AI Integration",
      ],
      metrics: { roles: "2", deployment: "Containerized" },
      codeLink: "https://github.com/mayank5597/salesbot.ai",
    },
    {
      name: "MyScoot (Exly)",
      role: "Next.js Developer",
      description:
        "Product tours and recommendation engine with CI/CD pipeline integration.",
      challenge: "Architect scalable product recommendation system",
      solution:
        "Next.js with TypeScript, React-based tours, partnered with data science team",
      impact: "Enhanced user onboarding and personalized recommendations",
      tech: ["Next.js", "React", "TypeScript", "CI/CD", "Data Science"],
      metrics: { integration: "GitLab/GitHub", deployment: "Automated" },
    },
    {
      name: "Nana",
      role: "Next.js & React Native Developer",
      description:
        "Large dataset handling with optimized component rendering and lifecycle management.",
      challenge:
        "Performance optimization for data-intensive mobile and web apps",
      solution:
        "Advanced React lifecycle practices, efficient data rendering strategies",
      impact: "Smooth performance even with massive datasets",
      tech: ["Next.js", "React Native", "Performance Optimization"],
      metrics: { optimization: "Data-heavy", platforms: "Web + Mobile" },
    },
    {
      name: "Saal.ai — Abu Dhabi National Oil Company (ADNOC)",
      role: "React Developer",
      description:
        "Worked on large-scale enterprise web applications, modernizing customer-facing portals to align with evolving industry and UX standards for ADNOC clients.",
      challenge:
        "Upgrading legacy customer websites while ensuring performance, scalability, and consistency across 1000+ client platforms with minimal disruption.",
      solution:
        "Collaborated closely with 10+ senior engineers to refactor components, introduce reusable UI patterns, and build a custom, role-based client dashboard tailored to business needs.",
      impact:
        "Significant improvement in user experience and operational efficiency, leading to a noticeable drop in customer support dependency.",
      tech: [
        "React.js",
        "JavaScript",
        "REST APIs",
        "Custom Dashboards",
        "UI Optimization",
      ],
      metrics: {
        customersUpgraded: "1000+",
        supportTicketsReduced: "40%",
        collaboration: "10+ senior engineers",
        platform: "Web",
      },
    },
    {
      name: "Ziqitza Health Care",
      role: "React Native Developer",
      description:
        "Contributed to the development of a healthcare mobile application by building core user-facing features and reusable components for daily operational workflows.",
      challenge:
        "Delivering a stable, feature-rich mobile app with complex navigation, device integrations, and real-time user interactions in a healthcare environment.",
      solution:
        "Designed and developed key mobile components including tab navigation, map views, image and document pickers, push notifications, authentication flows, and profile management using React Native and Redux.",
      impact:
        "Improved usability and reliability of the mobile app, enabling smoother workflows for healthcare operations and better end-user engagement.",
      tech: [
        "React Native",
        "Redux",
        "React Navigation",
        "Push Notifications",
        "Maps Integration",
        "Native Device APIs",
      ],
      metrics: {
        platforms: "Android & iOS",
        domain: "Healthcare",
      },
    },
  ];

  return (
    <section data-testid="projects-section" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-[#b026ff] bg-clip-text text-transparent">
              Proof
            </span>{" "}
            Over Claims
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Each project is a story of challenges conquered, solutions crafted,
            and impact delivered.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      data-testid={`project-card-${index}`}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        className={`relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 ${
          isEven ? "md:mr-12" : "md:ml-12"
        }`}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: isEven
              ? "linear-gradient(135deg, rgba(176, 38, 255, 0.05) 0%, transparent 70%)"
              : "linear-gradient(225deg, rgba(0, 240, 255, 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-sm font-mono text-primary">{project.role}</p>
            </div>
            <Code2
              onClick={() =>
                project.codeLink && window.open(project.codeLink, "_blank")
              }
              className={`hidden md:block w-6 h-6 text-accent mt-2 md:mt-0 ${project.codeLink ? "cursor-pointer" : ""} ${project.codeLink ? "opacity-100" : "opacity-50"}`}
            />
          </div>

          {/* Description */}
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Story: Challenge → Solution → Impact */}
          <div className="space-y-4 mb-6">
            <div className="border-l-2 border-accent/50 pl-4">
              <p className="text-sm font-mono text-accent mb-1">Challenge</p>
              <p className="text-sm text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-4">
              <p className="text-sm font-mono text-primary mb-1">Solution</p>
              <p className="text-sm text-muted-foreground">
                {project.solution}
              </p>
            </div>
            <div className="border-l-2 border-accent/50 pl-4">
              <p className="text-sm font-mono text-accent mb-1">Impact</p>
              <p className="text-sm text-muted-foreground">{project.impact}</p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1.5 text-xs font-mono bg-secondary/30 border border-primary/20 rounded-md text-foreground"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(176, 38, 255, 0.2)",
                  borderColor: "rgba(176, 38, 255, 0.5)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4 text-sm">
            {Object.entries(project.metrics).map(
              ([key, value], metricIndex) => (
                <div key={metricIndex} className="flex items-center gap-2">
                  <span className="text-muted-foreground capitalize">
                    {key}:
                  </span>
                  <span className="text-accent font-semibold">{value}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Project number indicator */}
      <motion.div
        className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} w-12 h-12 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-white text-xl`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        style={{ boxShadow: "0 0 20px rgba(176, 38, 255, 0.6)" }}
      >
        {index + 1}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
