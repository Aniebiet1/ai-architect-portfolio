import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

const featuredArticle = {
  title: "We Had No Plan B, Just a Dream, a Pitch, and a Risk That Changed Everything",
  excerpt:
    "A Medium story published under Startup Stash about the pitch, the risk, and how Acadeva's journey began to get recognition.",
  link: "https://medium.com/startup-stash/we-had-no-plan-b-just-a-dream-a-pitch-and-a-risk-that-changed-everything-e391390739cb",
  recognition: "Recognized by Startup Stash",
  image: "/public/medium-article-preview.jpg",
};

const articles = [
  {
    title: "Production RAG Systems: Architecture Patterns and Implementation Strategies for Enterprise AI",
    type: "System Design",
    excerpt: "Comprehensive analysis of production-grade RAG system architectures and implementation patterns for enterprise applications.",
    webLinks: [
      { text: "Reasoning Agentic RAG - ACL 2025", url: "https://aclanthology.org/2025.findings-ijcnlp.122/" },
      { text: "RAG Systems in Production - IEEE", url: "https://ieeexplore.ieee.org/abstract/document/11087842/" },
      { text: "Engineering RAG for Real-World Applications", url: "https://link.springer.com/chapter/10.1007/978-3-032-04200-2_10" },
    ],
    content: `Retrieval-Augmented Generation (RAG) has emerged as a critical pattern for building production AI systems that require both accuracy and grounding in factual data. Unlike pure generative models, RAG systems combine information retrieval with language model reasoning, enabling businesses to leverage domain-specific knowledge while maintaining response reliability.

Key Architecture Components:
- Document Ingestion & Vectorization: Converting domain knowledge into searchable vector embeddings enables semantic similarity matching. Production systems require robust pipelines that handle multiple data formats, handle updates, and maintain version control.
- Retrieval Layer: Hybrid search combining lexical and semantic matching outperforms single-method approaches. Implementing reranking components filters irrelevant results, improving downstream generation quality.
- Generation Pipeline: LLM reasoning over retrieved context prevents hallucination while maintaining response coherence. Context window management and prompt optimization are critical for cost efficiency and latency.

Production Considerations:
Enterprise RAG deployments must address data sovereignty, system reliability, and operational governance. Real-time monitoring of retrieval quality metrics (precision, recall) and generation metrics (relevance, factuality) enables continuous system improvement. Implementing fallback mechanisms and graceful degradation ensures system resilience during component failures.`,
  },
  {
    title: "Multi-Agent Orchestration in LLM Systems: Reasoning, Coordination, and Failure Attribution",
    type: "Research Paper",
    excerpt: "Examining architectural patterns for coordinating multiple AI agents in complex reasoning tasks.",
    webLinks: [
      { text: "From Flat Logs to Causal Graphs - arXiv", url: "https://arxiv.org/abs/2602.23701" },
      { text: "Multi-Agent Debate & Reasoning - AAMAS 2026", url: "https://arxiv.org/abs/2602.23864" },
      { text: "ProductResearch: Multi-Agent Synthetic Data", url: "https://arxiv.org/abs/2602.23716" },
    ],
    content: `Multi-agent systems represent the next frontier in AI automation, where specialized agents collaborate to solve problems requiring diverse expertise and reasoning strategies. Unlike single-agent approaches, multi-agent architectures enable decomposition of complex tasks, parallel execution, and emergent problem-solving capabilities.

Agent Coordination Patterns:
- Hierarchical Orchestration: A coordinator agent routes subtasks to specialized agents based on capabilities. This pattern provides strong consistency guarantees but may introduce bottlenecks.
- Collaborative Consensus: Multiple agents independently solve subtasks, with their outputs merged through consensus mechanisms. This pattern enhances robustness through redundancy.
- Debate Mechanisms: Agents with opposing perspectives engage in structured debate, with a judge agent evaluating arguments. This approach improves reasoning quality through adversarial collaboration.

Failure Attribution & Recovery:
Identifying which agent caused failures in distributed systems requires causal analysis of system logs and execution traces. Implementing hierarchical failure tracking creates actionable insights for debugging and enables targeted recovery strategies. Root cause analysis becomes feasible through careful instrumentation without excessive overhead.

Design Trade-offs:
System designers must balance latency (fewer agents = faster execution vs. accuracy (more diverse reasoning). Context overhead increases with agent count, affecting token usage and costs. Effective orchestration requires careful consideration of the specific problem domain.`,
  },
  {
    title: "Agentic AI Frameworks: From Autonomous Reasoning to Real-World Deployment",
    type: "Technical Analysis",
    excerpt: "Practical insights on building, deploying, and scaling agentic AI systems for production environments.",
    webLinks: [
      { text: "The Auton Agentic AI Framework - arXiv", url: "https://arxiv.org/abs/2602.23720" },
      { text: "AI Agents for Enterprise Software - Frontiers AI", url: "http://sprcopen.org/index.php/FAIR/article/view/456" },
      { text: "PseudoAct: Planning in LLM Agents - arXiv", url: "https://arxiv.org/abs/2602.23668" },
    ],
    content: `Agentic AI systems—autonomous agents capable of goal-oriented reasoning and action execution—represent a fundamental shift from supervised automation to adaptive intelligence. These systems combine language model reasoning with tool integration and iterative planning.

Core Agentic Capabilities:
- Goal Decomposition: Breaking high-level objectives into actionable subtasks enables systematic progress tracking and adaptive replanning.
- Tool Integration: LLM agents equipped with APIs, databases, and external tools extend their capabilities beyond text generation. Tool calling requires precise specification of parameters and return types.
- Iterative Reasoning: Agents that observe action outcomes and adapt their strategies demonstrate genuine reasoning rather than executing predetermined scripts.

Building Scalable Agentic Systems:
Production deployments require careful attention to inference costs, latency, and reliability. Token usage optimization through prompt compression and selective context inclusion reduces operational costs significantly. Implementing caching layers for common subproblems accelerates execution while reducing API calls.

Specialized agent architectures for specific domains (financial analysis, code generation, medical diagnosis) outperform general-purpose approaches. Domain-specific tool libraries, knowledge bases, and evaluation metrics enable rapid iteration and deployment.

Real-World Implementation Lessons:
Agentic systems benefit from human feedback loops during early deployment phases. Progressive automation—starting with high-confidence decisions and expanding gradually—manages risk effectively. Monitoring agent behavior patterns identifies failure modes early, enabling targeted improvements before they impact production users.`,
  },
];

const Research = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

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

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 bg-card border border-border rounded-2xl p-6 mb-8 overflow-hidden"
          >
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs text-primary mb-2">Featured Medium Article</p>
                <h3 className="text-2xl font-bold leading-tight">{featuredArticle.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {featuredArticle.excerpt}
              </p>
              <p className="text-xs font-mono text-primary">{featuredArticle.recognition}</p>
              <a
                href={featuredArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
              >
                Read on Medium
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <a
              href={featuredArticle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-[280px] rounded-xl overflow-hidden border border-border bg-secondary"
            >
              <img
                src={featuredArticle.image}
                alt="Medium article preview"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-mono text-primary mb-2">Startup Stash feature</p>
                <p className="text-sm text-foreground font-medium">Click to open the full article</p>
              </div>
            </a>
          </motion.article>

          <div className="space-y-4">
            {articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <button
                  onClick={() => setExpandedArticle(expandedArticle === i ? null : i)}
                  className="w-full text-left flex items-start justify-between bg-card border border-border rounded-xl p-5 hover:border-glow hover:glow-sm transition-all group"
                >
                  <div className="flex-1 pr-4">
                    <span className="text-xs font-mono text-primary mr-3">{article.type}</span>
                    <h3 className="font-medium group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${expandedArticle === i ? 'rotate-180' : ''}`} />
                </button>

                {expandedArticle === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-secondary border border-border border-t-0 rounded-b-xl p-6 text-sm text-muted-foreground leading-relaxed space-y-6"
                  >
                    {article.content.split('\n\n').map((paragraph, idx) => (
                      <div key={idx}>
                        {paragraph.includes(':') && !paragraph.startsWith(' ') ? (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{paragraph.split(':')[0]}:</h4>
                            <ul className="space-y-2 ml-4">
                              {paragraph.split('\n').slice(1).map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-2">
                                  <span className="text-primary flex-shrink-0">▸</span>
                                  <span>{item.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p>{paragraph}</p>
                        )}
                      </div>
                    ))}
                    
                    <div className="border-t border-border pt-4 mt-4">
                      <h4 className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">Further Reading</h4>
                      <div className="space-y-2">
                        {article.webLinks?.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            {link.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
