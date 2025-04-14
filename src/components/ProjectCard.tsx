
import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
  index,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "reveal-animation flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 mb-24 last:mb-0",
        isEven ? "" : "lg:flex-row-reverse"
      )}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[300px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-end space-x-4">
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/90 text-foreground hover:bg-white transition-colors"
                  aria-label="View demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/90 text-foreground hover:bg-white transition-colors"
                  aria-label="View source on GitHub"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
