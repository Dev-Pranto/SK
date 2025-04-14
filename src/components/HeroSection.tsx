
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -right-64 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-64 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 order-2 md:order-1 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-lg font-medium text-primary">
              AI Engineer & Researcher
            </h2>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                SK HAMIM
              </span>
              <span className="block bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                ISHTHIAQUE PRANTO
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md">
              Building the future through intelligent systems and 
              transformative AI research.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            
            <div className="flex space-x-5 pt-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className={`flex justify-center order-1 md:order-2 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              {/* Colored background blobs */}
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-primary to-purple-500 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] blur-xl opacity-60 animate-pulse" />
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500 via-indigo-400 to-cyan-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] rotate-6 opacity-60" />
              
              {/* Main avatar with clip path for unique shape */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden" 
                   style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)" }}>
                <Avatar className="w-full h-full border-4 border-background shadow-2xl">
                  <AvatarImage 
                    src="/lovable-uploads/361b52b3-7d00-4d07-8bc6-f757661b35f0.png" 
                    alt="SK HAMIM ISHTHIAQUE PRANTO" 
                    className="object-cover object-center w-full h-full scale-90" // Reduced scale from 110 to 90
                  />
                  <AvatarFallback className="text-4xl font-bold">SK</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-30" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-400 rounded-full blur-xl opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
