/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2014-2017",
      title: "The Foundation",
      company: "B.Sc (Hons.)",
      institution: "Aligarh Muslim University",
      description:
        "Started with HTML, CSS, and a curiosity for how the web works. Built the analytical thinking that would shape my coding journey.",
    },
    {
      year: "2017-2020",
      title: "The Transformation",
      company: "Master of Computer Application",
      institution: "Aligarh Muslim University",
      description:
        "Dove deep into JavaScript, React, and backend technologies. This was where curiosity became expertise.",
    },
    {
      year: "2020-2024",
      title: "Associate Software Engineer",
      company: "Unthinkable Solutions",
      description:
        "Learned the chaos of production. Built my first scalable APIs. Mastered React.js, Next.js, and React Native. Delivered enterprise-grade applications.",
      highlight: true,
    },
    {
      year: "2024-Present",
      title: "Software Developer (MERN Stack)",
      company: "Programming.com",
      description:
        "Leading development of high-performance web apps. Leveraging AI-assisted tools. Architecting complex systems. Still shipping.",
      highlight: true,
    },
  ];

  return (
    <section data-testid="timeline-section" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-white to-[#b026ff] bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            I learned that great products aren't just built — they're{" "}
            <span className="text-primary font-semibold">crafted</span>.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
          <motion.div
            className="absolute left-0 md:left-8 top-0 w-0.5 bg-primary"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ boxShadow: "0 0 10px rgba(176, 38, 255, 0.5)" }}
          />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      data-testid={`timeline-item-${index}`}
      className="relative pl-8 md:pl-24"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
          item.highlight
            ? "border-primary bg-primary"
            : "border-accent bg-accent"
        }`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        style={
          item.highlight
            ? { boxShadow: "0 0 15px rgba(176, 38, 255, 0.7)" }
            : {}
        }
      />

      {/* Content card */}
      <div
        className={`p-6 rounded-xl backdrop-blur-xl border transition-all duration-500 ${
          item.highlight
            ? "bg-secondary/30 border-primary/30 hover:border-primary/60"
            : "bg-card/40 border-white/10 hover:border-white/20"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <span className="text-sm font-mono text-accent mb-2 md:mb-0">
            {item.year}
          </span>
          {item.institution && (
            <span className="text-sm text-muted-foreground">
              {item.institution}
            </span>
          )}
        </div>
        <h3 className="text-2xl md:text-3xl font-heading font-medium mb-2 text-foreground">
          {item.title}
        </h3>
        {item.company && (
          <p className="text-lg text-primary/90 font-semibold mb-3">
            {item.company}
          </p>
        )}
        <p className="text-base text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Timeline;
