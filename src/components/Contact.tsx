import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 09"}</p>
          <h2 className="text-4xl font-bold mb-4">Let's Build Scalable AI Systems</h2>
          <p className="text-muted-foreground mb-10">
            Available for AI systems engineering, LLM architecture consulting, and advanced ML deployments.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a href="#" className="p-3 rounded-lg border border-border hover:bg-secondary transition-colors">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="#" className="p-3 rounded-lg border border-border hover:bg-secondary transition-colors">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with precision
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
