import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-none h-[80%] bg-gradient-to-b from-primary/5 to-transparent rounded-[100%] blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div 
            className={cn(
              "mb-10 flex flex-col items-center",
              isVisible ? "animate-scale-in" : "opacity-0"
            )}
          >
            <div className="relative mb-6">
              {/* Decorative background elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-primary to-purple-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-md opacity-75 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-primary to-indigo-400 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] rotate-3 opacity-75" />
              
              {/* Main avatar container with hexagonal clip path */}
              <div className="relative w-48 h-48 overflow-hidden rounded-xl" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <Avatar className="w-full h-full border-4 border-background shadow-xl">
                  <AvatarImage 
                    src="/lovable-uploads/361b52b3-7d00-4d07-8bc6-f757661b35f0.png" 
                    alt="SK HAMIM ISHTHIAQUE PRANTO" 
                    className="object-cover object-center w-full h-full scale-90"
                  />
                  <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">SK</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              SK HAMIM
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
              ISHTHIAQUE PRANTO
            </span>
          </h2>
          
          
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
              AI Engineer & Researcher
            </span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6",
              isVisible ? "animate-fade-in delay-1" : "opacity-0"
            )}
          >
            Advancing AI through <span className="text-primary">intelligent</span> solutions
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance",
              isVisible ? "animate-fade-in delay-2" : "opacity-0"
            )}
          >
            Specialized in developing cutting-edge AI systems that solve complex problems and drive innovation.
            Combining deep technical expertise with a passion for research and applied solutions.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row justify-center gap-4",
              isVisible ? "animate-fade-in delay-3" : "opacity-0"
            )}
          >
            <a 
              href="#projects" 
              className="px-7 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all"
            >
              View My Projects
            </a>
            
            <a 
              href="#contact" 
              className="px-7 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium hover:bg-background/80 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className={cn(
          "absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors",
          isVisible ? "animate-fade-in delay-5" : "opacity-0"
        )}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
