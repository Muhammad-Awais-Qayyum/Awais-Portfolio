import { Code, Server, Cpu, Download } from "lucide-react";

export const AboutSection = () => {

   const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to your CV file path
    // Replace 'your-cv-file.pdf' with the actual path to your CV file
    link.href = '/cv/Muhammad Awais Qayyum.pdf'; // You can also use a direct URL like 'https://yoursite.com/files/cv.pdf'
    
    // Set the download attribute with desired filename
    link.download = 'Muhammad Awais Qayyum_Resume.pdf'; // Replace with your actual name
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer | MERN + Next.js Specialist
            </h3>

            <p className="text-muted-foreground">
              With <strong>3+ years of professional experience</strong>, I build 
              production-ready web apps using <strong>Next.js, React, Node.js, and MongoDB</strong>. 
              Expert in <strong>Clerk authentication, Stripe payments, Vercel deployment</strong>, 
              and <strong>AI/LLM integrations</strong>.
            </p>

            <p className="text-muted-foreground">
              I deliver <strong>full-cycle solutions</strong> — from UI design to 
              backend APIs, payment systems, and cloud deployment. Passionate about 
              creating apps that are <strong>fast, secure, and scalable</strong>.
            </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <button
                onClick={handleDownloadCV}
                className="inline-flex cursor-pointer items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Next.js, React, Node.js, Express, MongoDB. Vercel deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Payments & Auth</h4>
                  <p className="text-muted-foreground">
                    Stripe payment systems, Clerk authentication, secure APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Integrations</h4>
                  <p className="text-muted-foreground">
                    LLM APIs, AI-powered features, and automation tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
