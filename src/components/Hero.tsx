import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center pt-24">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            {"// Hello, I'm"}
          </p>
          <div className="flex items-center gap-5 mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/40 overflow-hidden bg-secondary flex-shrink-0">
              {/* Replace src with your actual image */}
              <img
                src="/placeholder.svg"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05]">
              Your
              <br />
              <span className="text-gradient">Name</span>
            </h1>
          </div>
          <p className="font-mono text-sm text-muted-foreground mb-6 leading-relaxed">
            Machine Learning Engineer · LLM Systems Architect · Agentic AI Developer
          </p>
          <p className="text-secondary-foreground max-w-md mb-10 leading-relaxed">
            I design and deploy production-grade ML systems, LLM architectures, and autonomous AI agents that solve real-world problems at scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right - Tech visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Floating code card */}
            <div className="bg-card border border-border rounded-xl p-6 glow-sm animate-float">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">agent.py</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed">
                <code>
                  <span className="text-primary">class</span>{" "}
                  <span className="text-foreground">AIAgent</span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"  "}def</span>{" "}
                  <span className="text-primary">__init__</span>
                  <span className="text-muted-foreground">(self):</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"    "}self.</span>
                  <span className="text-foreground">llm</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-primary">LLM</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-primary">"gpt-4"</span>
                  <span className="text-muted-foreground">)</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"    "}self.</span>
                  <span className="text-foreground">memory</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-primary">VectorStore</span>
                  <span className="text-muted-foreground">()</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"    "}self.</span>
                  <span className="text-foreground">tools</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-primary">ToolKit</span>
                  <span className="text-muted-foreground">()</span>
                  {"\n\n"}
                  <span className="text-muted-foreground">{"  "}def</span>{" "}
                  <span className="text-primary">reason</span>
                  <span className="text-muted-foreground">(self, query):</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"    "}context = self.memory.</span>
                  <span className="text-primary">retrieve</span>
                  <span className="text-muted-foreground">(query)</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"    "}plan = self.llm.</span>
                  <span className="text-primary">plan</span>
                  <span className="text-muted-foreground">(query, context)</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"    "}return self.</span>
                  <span className="text-primary">execute</span>
                  <span className="text-muted-foreground">(plan)</span>
                </code>
              </pre>
            </div>

            {/* Stats floating cards */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg px-4 py-3 glow-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <p className="font-mono text-xs text-muted-foreground">accuracy</p>
              <p className="text-primary font-bold text-lg">96.4%</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 bg-card border border-border rounded-lg px-4 py-3 glow-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="font-mono text-xs text-muted-foreground">latency</p>
              <p className="text-primary font-bold text-lg">{"<"}120ms</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
