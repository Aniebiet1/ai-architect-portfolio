import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "User", color: "text-foreground" },
  { label: "Planner", color: "text-primary" },
  { label: "Tool Executor", color: "text-primary" },
  { label: "Memory Store", color: "text-primary" },
  { label: "LLM Reasoning", color: "text-primary" },
  { label: "Response", color: "text-foreground" },
];

const agents = [
  { name: "ResearchBot", desc: "Autonomous research agent with web search, document analysis, and report generation capabilities." },
  { name: "CodeReviewer", desc: "Multi-step code analysis agent that identifies bugs, security issues, and suggests optimizations." },
  { name: "DataOrchestrator", desc: "Pipeline orchestration agent that manages ETL workflows and data quality monitoring." },
];

const AgenticAI = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agentic" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 04"}</p>
          <h2 className="text-4xl font-bold mb-4">Agentic AI & LLM Systems</h2>
          <p className="text-secondary-foreground max-w-2xl mb-12 leading-relaxed">
            I design autonomous AI agents built on the principle of LLM + Memory + Tools + Planner + Feedback Loop. Each agent is a composable system that reasons, plans, executes, and learns from outcomes.
          </p>

          {/* Architecture diagram */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg px-4 py-2 font-mono text-sm"
                >
                  <span className={step.color}>{step.label}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <span className="text-primary font-mono">→</span>
                )}
              </div>
            ))}
          </div>

          {/* Agents built */}
          <h3 className="text-xl font-semibold mb-6">Systems Built</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-glow transition-colors"
              >
                <h4 className="font-mono text-primary font-semibold mb-2">{agent.name}</h4>
                <p className="text-sm text-muted-foreground">{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticAI;
