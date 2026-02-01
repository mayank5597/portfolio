/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Philosophy = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const philosophies = [
    { text: "Performance is a feature.", color: "primary" },
    { text: "Clean code is kindness.", color: "accent" },
    { text: "UX is respect.", color: "primary" },
  ];

  return (
    <section
      data-testid="philosophy-section"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Cursor-reactive background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(176, 38, 255, 0.1) 0%, rgba(3, 0, 20, 0) 50%)`,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-12 md:space-y-16"
        >
          <motion.h2
            data-testid="philosophy-section-title"
            className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How I Build
          </motion.h2>

          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              data-testid={`philosophy-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className={`text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter ${
                  philosophy.color === "primary"
                    ? "gradient-text"
                    : "text-accent"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {philosophy.text}
              </motion.h3>
            </motion.div>
          ))}

          {/* Breathing animation circle */}
          <motion.div
            className="mx-auto w-24 h-24 rounded-full border-2 border-primary/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ boxShadow: "0 0 30px rgba(176, 38, 255, 0.3)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
