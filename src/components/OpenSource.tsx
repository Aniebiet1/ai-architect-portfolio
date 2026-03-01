import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const repos = [
  { name: "agentic-framework", desc: "Modular Python framework for building LLM-powered autonomous agents with memory and tool use.", stars: "1.2k" },
  { name: "rag-toolkit", desc: "Production-ready RAG pipeline with support for multiple vector databases and embedding models.", stars: "890" },
  { name: "ml-pipeline-template", desc: "End-to-end ML pipeline template with CI/CD, model versioning, and automated monitoring.", stars: "650" },
];

const OpenSource = () => {
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
          <p className="font-mono text-primary text-sm mb-2">{"// 08"}</p>
          <h2 className="text-4xl font-bold mb-12">Open Source & Contributions</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-glow transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-primary">{repo.name}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{repo.desc}</p>
                <span className="text-xs font-mono text-muted-foreground">⭐ {repo.stars}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
