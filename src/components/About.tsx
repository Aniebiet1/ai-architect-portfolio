import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "15+", label: "AI Systems Built" },
  { value: "96%", label: "Model Accuracy Achieved" },
  { value: "10+", label: "Production Deployments" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 01"}</p>
          <h2 className="text-4xl font-bold mb-12">About</h2>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-secondary-foreground leading-relaxed">
              <p>
                With over 3 years of hands-on experience in machine learning and AI systems engineering, I specialize in building production-grade solutions that bridge the gap between research and real-world impact.
              </p>
              <p>
                My core focus areas include deep learning, large language model engineering, retrieval-augmented generation (RAG) systems, and the emerging field of agentic AI — where autonomous agents reason, plan, and execute complex tasks.
              </p>
              <p>
                I've deployed ML systems across cloud platforms, optimized inference pipelines for sub-100ms latency, and architected multi-agent systems that handle enterprise-scale workloads. Every system I build is designed with production constraints, cost-performance trade-offs, and scalability in mind.
              </p>
            </div>

            <div className="space-y-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 glow-sm"
                >
                  <p className="text-3xl font-bold text-gradient">{m.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
