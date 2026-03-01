import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    name: "Intelligent Document QA Engine",
    summary: "RAG-powered system for enterprise document understanding and question answering.",
    tags: ["Python", "PyTorch", "FastAPI", "FAISS", "Docker"],
    problem: "Enterprise teams waste hours searching through thousands of unstructured documents to find specific information.",
    architecture: "User → API Gateway → Document Parser → Embedding Model → FAISS Vector DB → LLM Reasoning → Structured Response",
    stack: ["Python", "PyTorch", "sentence-transformers", "FAISS", "FastAPI", "Redis", "Docker"],
    results: { accuracy: "94.2%", latency: "<200ms", impact: "60% reduction in document search time" },
    deployment: { cloud: "AWS (ECS + S3)", cicd: "GitHub Actions", monitoring: "Prometheus + Grafana" },
  },
  {
    name: "Real-Time Fraud Detection Pipeline",
    summary: "ML pipeline processing 10K+ transactions/sec with sub-50ms inference latency.",
    tags: ["Python", "XGBoost", "Kafka", "Redis", "Kubernetes"],
    problem: "Financial institution needed real-time fraud detection without impacting transaction processing speed.",
    architecture: "Transaction Stream → Kafka → Feature Engine → XGBoost Ensemble → Risk Scorer → Alert System",
    stack: ["Python", "XGBoost", "Kafka", "Redis", "Kubernetes", "PostgreSQL"],
    results: { accuracy: "97.8%", latency: "<45ms", impact: "$2.3M annual fraud prevention" },
    deployment: { cloud: "GCP (GKE)", cicd: "ArgoCD", monitoring: "Datadog" },
  },
  {
    name: "Multi-Agent Research Assistant",
    summary: "Autonomous agent system that researches, synthesizes, and reports on technical topics.",
    tags: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    problem: "Research teams spending weeks on literature reviews that could be partially automated with AI agents.",
    architecture: "User Query → Planner Agent → Search Agent → Analyst Agent → Writer Agent → Structured Report",
    stack: ["Python", "LangChain", "OpenAI GPT-4", "Pinecone", "FastAPI"],
    results: { accuracy: "91%", latency: "<30s per report", impact: "75% reduction in initial research time" },
    deployment: { cloud: "AWS Lambda", cicd: "GitHub Actions", monitoring: "CloudWatch" },
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 03"}</p>
          <h2 className="text-4xl font-bold mb-12">Featured AI Systems</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-glow hover:glow-sm transition-all group cursor-pointer"
                onClick={() => setActiveProject(i)}
              >
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  View Case Study <ArrowRight className="w-3 h-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {activeProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold">{projects[activeProject].name}</h3>
              <button onClick={() => setActiveProject(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-primary text-sm mb-2">Problem</h4>
                <p className="text-sm text-secondary-foreground">{projects[activeProject].problem}</p>
              </div>
              <div>
                <h4 className="font-mono text-primary text-sm mb-2">Architecture</h4>
                <p className="text-xs font-mono bg-secondary rounded-lg p-4 text-secondary-foreground overflow-x-auto">
                  {projects[activeProject].architecture}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-primary text-sm mb-2">AI Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].stack.map((s) => (
                    <span key={s} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-primary text-sm mb-2">Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(projects[activeProject].results).map(([k, v]) => (
                    <div key={k} className="bg-secondary rounded-lg p-3">
                      <p className="text-xs text-muted-foreground capitalize">{k}</p>
                      <p className="font-bold text-primary">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-primary text-sm mb-2">Deployment</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(projects[activeProject].deployment).map(([k, v]) => (
                    <div key={k}>
                      <p className="text-xs text-muted-foreground capitalize">{k}</p>
                      <p className="text-sm font-medium">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default FeaturedProjects;
