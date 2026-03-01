import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    name: "Enterprise Knowledge Graph",
    context: "Healthcare / Clinical Data Management",
    challenge: "Processing 500K+ unstructured clinical documents with varying formats and extracting structured medical entities while maintaining HIPAA compliance.",
    solution: "Built a custom NER pipeline using fine-tuned BioBERT with a graph database backend. Implemented differential privacy techniques and federated learning for secure model training across hospital networks.",
    results: ["93% entity extraction accuracy", "4x faster clinical data processing", "Full HIPAA compliance maintained"],
  },
  {
    name: "Conversational AI Platform",
    context: "E-commerce / Customer Support",
    challenge: "High customer support volume with 70% repetitive queries. Existing chatbot had poor intent recognition (<60% accuracy) and couldn't handle multi-turn conversations.",
    solution: "Designed a hybrid retrieval + generative system using fine-tuned LLM with RAG. Implemented conversation memory, fallback routing, and continuous learning from support agent corrections.",
    results: ["92% intent accuracy", "45% reduction in human escalations", "$1.2M annual cost savings"],
  },
  {
    name: "Acadeva Recommendation Engine & AI Models",
    context: "EdTech / Personalized Learning",
    challenge: "Personalizing learning recommendations for students with diverse learning styles, subjects, and pace while maintaining low latency and high engagement. Required building custom AI models that adapt to individual student behavior.",
    solution: "Architected a multi-model recommendation system combining collaborative filtering with content-based filtering and LLM-powered personalization. Built custom fine-tuned models for content understanding and student profiling. Implemented real-time inference pipeline with caching and model versioning.",
    results: ["85% student engagement improvement", "Custom AI models deployed in production", "Personalized learning paths for 10K+ students", "Real-time inference < 200ms"],
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 05"}</p>
          <h2 className="text-4xl font-bold mb-12">Selected Case Studies</h2>

          <div className="space-y-8">
            {cases.map((cs, i) => (
              <motion.div
                key={cs.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-bold">{cs.name}</h3>
                  <span className="text-xs font-mono text-primary bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {cs.context}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-mono text-primary text-xs mb-2 uppercase tracking-wider">Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-xs mb-2 uppercase tracking-wider">Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-xs mb-2 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
