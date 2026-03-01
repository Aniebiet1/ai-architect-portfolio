import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, MessageSquare, Bot, Container } from "lucide-react";

const columns = [
  {
    icon: Brain,
    title: "Machine Learning",
    items: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Optimization", "Statistical Evaluation"],
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    items: ["CNNs / RNNs", "Transformers", "Transfer Learning", "Model Fine-tuning"],
  },
  {
    icon: MessageSquare,
    title: "LLM Engineering",
    items: ["Prompt Engineering", "RAG Systems", "Embeddings", "Vector Databases"],
  },
  {
    icon: Bot,
    title: "Agentic AI",
    items: ["Tool-using Agents", "Memory Architectures", "Planning Loops", "Multi-agent Orchestration"],
  },
  {
    icon: Container,
    title: "MLOps",
    items: ["Docker", "CI/CD Pipelines", "Model Serving", "Monitoring & Logging"],
  },
];

const CoreExpertise = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 02"}</p>
          <h2 className="text-4xl font-bold mb-12">Core Expertise</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {columns.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-glow hover:glow-sm transition-all group"
              >
                <col.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreExpertise;
