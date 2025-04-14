
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const ProjectsPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-animation');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          <div className="pt-32 pb-12 md:pb-20 px-6">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16">
                Explore my portfolio of AI and machine learning projects, showcasing innovative solutions and research applications.
              </p>
            </div>
          </div>
          <Projects />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
