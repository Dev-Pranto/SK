
import { useEffect, useRef } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchPaperProps {
  title: string;
  journal: string;
  year: string;
  abstract: string;
  link: string;
  index: number;
}

const ResearchPaper = ({
  title,
  journal,
  year,
  abstract,
  link,
  index,
}: ResearchPaperProps) => {
  const paperRef = useRef<HTMLDivElement>(null);
  
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
    
    if (paperRef.current) {
      observer.observe(paperRef.current);
    }
    
    return () => {
      if (paperRef.current) {
        observer.unobserve(paperRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={paperRef}
      className={cn(
        "reveal-animation glass-card rounded-2xl p-8 transition-transform duration-300 hover:translate-y-[-4px] group",
        index % 2 === 0 ? "animate-enter-left" : "animate-enter-right"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary/10 rounded-xl p-4">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground mb-4">
            <span>{journal}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60"></span>
            <span>{year}</span>
          </div>
          
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {abstract}
          </p>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Read Paper
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
