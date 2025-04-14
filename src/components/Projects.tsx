
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Neural Style Transfer Application",
      description: "An advanced implementation of neural style transfer algorithms allowing users to apply artistic styles to their images using custom fine-tuned models.",
      tags: ["Deep Learning", "Computer Vision", "PyTorch", "React", "Flask"],
      image: "https://images.unsplash.com/photo-1532522750741-628fde798c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Intelligent Document Analysis",
      description: "A comprehensive document processing system that extracts, categorizes, and summarizes information from various document types using transformer-based NLP models.",
      tags: ["NLP", "Transformers", "OCR", "Python", "API"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Reinforcement Learning Environment",
      description: "A custom simulation environment for testing and benchmarking reinforcement learning algorithms, with visualization tools and performance metrics.",
      tags: ["Reinforcement Learning", "Simulation", "Python", "OpenAI Gym"],
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary font-medium reveal-animation">Projects</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 reveal-animation">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground reveal-animation">
            A selection of my most notable AI projects, showcasing practical applications
            of advanced machine learning techniques.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
