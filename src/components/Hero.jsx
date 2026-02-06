/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const keywords = ["JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <section
      data-testid="hero-section"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(176, 38, 255, 0.15) 0%, rgba(3, 0, 20, 0) 70%)",
          }}
        />
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            data-testid="hero-title"
            className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-foreground">I didn't start as a</span>
            <span className="block bg-gradient-to-r from-white to-[#b026ff] bg-clip-text text-transparent mt-2">
              MERN Developer.
            </span>
          </motion.h1>

          <motion.p
            data-testid="hero-subtitle"
            className="text-2xl md:text-4xl font-heading text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I started with{" "}
            <span className="text-accent font-bold">curiosity</span>.
          </motion.p>
        </motion.div>

        {/* Floating keywords */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {keywords.map((keyword, index) => (
            <motion.span
              key={keyword}
              data-testid={`keyword-${keyword.toLowerCase()}`}
              className="px-6 py-3 bg-secondary/20 border border-primary/30 rounded-lg text-sm md:text-base font-mono text-accent backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(176, 38, 255, 0.5)",
              }}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        data-testid="scroll-indicator"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
