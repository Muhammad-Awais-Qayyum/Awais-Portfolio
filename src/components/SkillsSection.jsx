import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Shadcn UI", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },

  // Tools & Platforms
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  
  // Specializations (New)
  { name: "Clerk Auth", level: 85, category: "special" },
  { name: "Stripe Payments", level: 80, category: "special" },
  { name: "AI Integrations", level: 75, category: "special" },
  { name: "LLM APIs", level: 70, category: "special" },
];

const categories = ["all", "frontend", "backend", "tools", "special"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "special" ? "Specializations" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-border/50"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};