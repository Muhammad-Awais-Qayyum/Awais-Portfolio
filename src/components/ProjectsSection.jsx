import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "La Orbit",
    description: "Investment platform by Prismatic Group offering 1% daily returns, $1 minimum investment, and zero fees. Backed by established businesses including trucking, gas stations, and retail operations.",
    image: "/projects/laOrbit.jpeg",
    tags: ["Next.js", "TailwindCSS", "Stripe", "Vercel"],
    demoUrl: "https://www.laorbit.co/",
  },
  {
    id: 2,
    title: "3 Pin Dodgeball",
    description: "Tournament management app for dodgeball competitions. Features admin dashboard for tournament control, guest interface for viewing player stats, match calendar with upcoming games, and live point tables tracking team standings.",
    image: "/projects/dogeball.jpeg",
    tags: ["TypeScript", "Vercel", "Next.js","Bolt","TailwindCSS"],
    demoUrl: "https://dogeball.vercel.app/",
  },
 {
    id: 3,
    title: "Free Tools Hub",
    description: "All-in-one free tool platform offering professional-grade utilities for images, videos, PDFs, YouTube transcripts, file conversion, and AI content generation. Supports bulk processing with an intuitive web interface.",
    image: "/projects/freetool.jpeg",
    tags: ["React", "Next.js", "Vercel", "AI Tools", "File Processing"],
    demoUrl: "https://free-tool-main-2n1k.vercel.app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                
                <div className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Muhammad-Awais-Qayyum"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
