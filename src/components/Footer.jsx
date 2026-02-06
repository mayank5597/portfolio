/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/mayank-gupta-447628151/";
  const resumeUrl =
    "https://drive.google.com/file/d/1_MjQcZa_Z869Hlocn9FQN-p5NxfC_smn/view?usp=sharing";
  return (
    <section
      data-testid="footer-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center bottom, rgba(176, 38, 255, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-mono text-accent mb-2">2020 - Present</p>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-2">
              MERN Developer
            </h3>
            <p className="text-lg text-primary font-semibold mb-4">
              Programming.com | Ex Unthinkable Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 text-sm bg-secondary/20 border border-primary/20 rounded-md text-muted-foreground">
                AI-assisted Development
              </span>
              <span className="px-4 py-2 text-sm bg-secondary/20 border border-primary/20 rounded-md text-muted-foreground">
                Scalable Systems
              </span>
              <span className="px-4 py-2 text-sm bg-secondary/20 border border-primary/20 rounded-md text-muted-foreground">
                Team Leadership
              </span>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-6">
              <span className="block text-foreground">Still building.</span>
              <span className="block text-accent">Still learning.</span>
              <span className="block bg-gradient-to-r from-white to-[#b026ff] bg-clip-text text-transparent">
                Still shipping.
              </span>
            </h2>
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-button"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading font-semibold text-lg rounded-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(176, 38, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Something Together
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div> */}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
              <motion.a
                href="mailto:mayankgupta5597@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                <span>mayankgupta5597@gmail.com</span>
              </motion.a>
              <span className="hidden sm:inline text-white">|</span>
              <span className="flex items-center gap-2">
                <span>+91 8077039526</span>
              </span>
              <span className="hidden sm:inline text-white">|</span>
              <motion.div
                onClick={() => window.open(resumeUrl, "_blank")}
                className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Resume</span>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="linkedin-link"
                className="p-3 rounded-lg bg-secondary/20 border border-primary/20 text-primary hover:bg-primary/10 transition-all"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(176, 38, 255, 0.5)",
                }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/mayank5597"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/20 border border-accent/20 text-accent hover:bg-accent/10 transition-all"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(0, 240, 255, 0.5)",
                }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              © 2025 Mayank Gupta. Crafted with React, Tailwind, and{" "}
              <span className="text-primary font-semibold">curiosity</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
