/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Code2, Database, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Mastery",
      skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "TypeScript", "shadcn/ui"],
      color: "primary",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST APIs", "SQL", "MongoDB"],
      color: "accent",
    },
    {
      icon: Layers,
      title: "State & Data Flow",
      skills: ["Redux", "Zustand", "React Query", "Context API"],
      color: "primary",
    },
    {
      icon: Zap,
      title: "Performance & Tools",
      skills: ["Lazy Loading", "Code Splitting", "Webpack", "Vite", "Docker", "AWS", "CI/CD"],
      color: "accent",
    },
  ];

  return (
    <section 
      data-testid="skills-section"
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight mb-6">
            The <span className="gradient-text">Craft</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            5+ years of turning coffee into code. Specialized in building scalable, performant web applications that users love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, index }) => {
  const Icon = category.icon;
  const isPrimary = category.color === 'primary';

  return (
    <motion.div
      data-testid={`skill-card-${index}`}
      className="group relative p-6 bg-secondary/20 rounded-xl border border-white/5 backdrop-blur-sm cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        borderColor: isPrimary ? 'rgba(176, 38, 255, 0.5)' : 'rgba(0, 240, 255, 0.5)',
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          background: isPrimary 
            ? 'radial-gradient(circle at center, rgba(176, 38, 255, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`mb-4 inline-block p-3 rounded-lg ${
            isPrimary ? 'bg-primary/10' : 'bg-accent/10'
          }`}
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className={`w-6 h-6 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-heading font-medium mb-4 text-foreground">
          {category.title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              className={`px-3 py-1.5 text-sm font-mono rounded-md backdrop-blur-sm border ${
                isPrimary 
                  ? 'bg-primary/10 border-primary/30 text-primary' 
                  : 'bg-accent/10 border-accent/30 text-accent'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: isPrimary 
                  ? '0 0 15px rgba(176, 38, 255, 0.4)'
                  : '0 0 15px rgba(0, 240, 255, 0.4)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
