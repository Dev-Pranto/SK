
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const ResumePage = () => {
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
          <div className="pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
                My <span className="text-primary">Resume</span>
              </h1>
              
              <div className="bg-white/50 backdrop-blur-md rounded-xl border border-border p-8 shadow-lg mb-12">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Professional Experience</h2>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Senior AI Engineer</h3>
                      <span className="text-sm text-muted-foreground">2022 - Present</span>
                    </div>
                    <p className="text-primary font-medium mb-2">AI Research Lab</p>
                    <p className="text-muted-foreground">
                      Led the development of advanced machine learning models for natural language processing
                      and computer vision applications. Collaborated with research teams to implement state-of-the-art
                      algorithms and optimize performance on large-scale datasets.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">AI Engineer</h3>
                      <span className="text-sm text-muted-foreground">2020 - 2022</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Tech Innovations Inc.</p>
                    <p className="text-muted-foreground">
                      Designed and implemented machine learning solutions for automated decision-making systems.
                      Developed data pipelines and feature engineering processes to improve model performance.
                    </p>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Education</h2>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Master of Science in Artificial Intelligence</h3>
                      <span className="text-sm text-muted-foreground">2018 - 2020</span>
                    </div>
                    <p className="text-primary font-medium mb-2">University of Technology</p>
                    <p className="text-muted-foreground">
                      Specialized in deep learning and reinforcement learning. Thesis on "Optimizing Neural Networks for Edge Computing Applications."
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Science</h3>
                      <span className="text-sm text-muted-foreground">2014 - 2018</span>
                    </div>
                    <p className="text-primary font-medium mb-2">National Institute of Technology</p>
                    <p className="text-muted-foreground">
                      Graduated with honors. Focused on machine learning, algorithms, and data structures.
                    </p>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Skills</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Machine Learning & Deep Learning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Computer Vision</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Natural Language Processing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Neural Network Architecture Design</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Data Analysis & Visualization</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>Python</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>TensorFlow & PyTorch</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>JavaScript & TypeScript</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>SQL & NoSQL Databases</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>C++ & Java</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Certifications</h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5"></span>
                      <div>
                        <h3 className="text-lg font-semibold">Deep Learning Specialization</h3>
                        <p className="text-sm text-muted-foreground">Coursera | 2020</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5"></span>
                      <div>
                        <h3 className="text-lg font-semibold">TensorFlow Developer Certificate</h3>
                        <p className="text-sm text-muted-foreground">Google | 2021</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5"></span>
                      <div>
                        <h3 className="text-lg font-semibold">AWS Machine Learning Specialty</h3>
                        <p className="text-sm text-muted-foreground">Amazon Web Services | 2022</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="#" 
                  className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default ResumePage;
