import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const workExperience = [
  {
    role: "Machine Learning / Artificial Intelligence Engineer",
    company: "Cafx",
    summary: "Building AI and ML solutions for a trading-focused company.",
    website: "https://cafx.io/",
    linkedin: "https://www.linkedin.com/company/cafxio/",
    logo: "/cafx-logo.jpg",
  },
  {
    role: "AI Co-Lead",
    company: "GDGoC UNIUYO",
    summary:
      "Co-led a Google-backed student developer community, organizing tech workshops and events at UNIUYO.",
    website: "https://gdg.community.dev/",
    linkedin: "https://www.linkedin.com/company/gdscuniuyo/",
    logo: "/gdgoc-logo.png",
  },
  {
    role: "AI / ML Engineer",
    company: "Acadeva",
    summary:
      "Building AI-powered education products and production-ready ML experiences for students.",
    website: "https://acadeva.xyz/",
    linkedin: "https://www.linkedin.com/company/acadeva/",
    logo: "/acadeva-logo.png",
  },
];

const hackathonPrizes = [
  {
    year: "2025",
    placement: "1st runner up",
    title: "DevEast Business Pitch",
    description:
      "Pitched Acadeva, a comprehensive platform where uni students can find study materials and collaborate.",
    image: "/hackathon-2025.jpg",
    news: "https://leadership.ng/varsity-students-pitch-innovations-at-2025-entrepreneurship-week/",
  },
  {
    year: "2024",
    placement: "1st & 2nd Place",
    title: "GDGoC UNIUYO Tech Ignite",
    description:
      "Built 2 AI study tools: an quiz generator from PDFs and an interactive AI study platform.",
    image: "/techignite.jpg",
    news: "",
  },
];

const certifications = [
  { title: "AI Literacy", provider: "IBM SkillsBuild" },
  { title: "AI Fundamentals", provider: "IBM SkillsBuild" },
  { title: "Machine Learning & Deep Learning Specialization", provider: "DeepLearning.AI" },
];

const Archievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="archievements" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// 08"}</p>
          <h2 className="text-4xl font-bold mb-12">Archievements</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {workExperience.map((item, i) => (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-glow hover:glow-sm transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary border border-border mb-4 overflow-hidden">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <p className="text-xs font-mono text-primary mb-2">{item.company}</p>
                  <h4 className="font-semibold mb-2">{item.role}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.summary}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Website <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:opacity-80 transition-opacity"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Hackathon Prizes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {hackathonPrizes.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <div className="aspect-[16/10] bg-secondary">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-xs text-primary mb-2">
                      {item.year} • {item.placement}
                    </p>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    {item.news ? (
                      <a
                        href={item.news}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        Read News
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <p className="text-sm text-muted-foreground mb-1">{item.provider}</p>
                  <p className="font-semibold">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Archievements;
