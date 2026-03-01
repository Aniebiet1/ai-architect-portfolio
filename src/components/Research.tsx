import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const articles = [
  { title: "Building Production RAG Systems: Lessons from the Trenches", type: "Article", link: "#" },
  { title: "Multi-Agent Orchestration: Architecture Patterns for Scale", type: "System Breakdown", link: "#" },
  { title: "Fine-tuning LLMs for Domain-Specific Tasks: A Practical Guide", type: "Experiment Report", link: "#" },
];

const Research = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 07"}</p>
          <h2 className="text-4xl font-bold mb-12">Research & Technical Writing</h2>

          <div className="space-y-4">
            {articles.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.link}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-between bg-card border border-border rounded-xl p-5 hover:border-glow hover:glow-sm transition-all group"
              >
                <div>
                  <span className="text-xs font-mono text-primary mr-3">{a.type}</span>
                  <span className="font-medium group-hover:text-primary transition-colors">{a.title}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
