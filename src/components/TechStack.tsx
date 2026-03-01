import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { label: "Languages", items: ["Python", "SQL", "TypeScript"] },
  { label: "ML / DL", items: ["PyTorch", "scikit-learn", "TensorFlow", "Hugging Face"] },
  { label: "LLM Stack", items: ["OpenAI API", "Gemini", "LangChain", "LlamaIndex"] },
  { label: "Vector DBs", items: ["FAISS", "Pinecone", "ChromaDB", "Weaviate"] },
  { label: "Deployment", items: ["Docker", "FastAPI", "Firebase", "Kubernetes"] },
  { label: "Cloud", items: ["AWS", "GCP", "Azure"] },
];

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 06"}</p>
          <h2 className="text-4xl font-bold mb-12">Technology Stack</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-4">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
