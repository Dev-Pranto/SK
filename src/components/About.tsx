
import { useEffect, useRef } from "react";
import { Brain, Code, Lightbulb, BookOpen } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Neural Networks",
    "Data Science",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Transformers",
    "GANs",
    "MLOps",
    "Cloud Computing",
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium reveal-animation">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 reveal-animation">
            Bridging AI research and practical solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg reveal-animation">
                I'm an AI Engineer and researcher passionate about developing intelligent systems that 
                push the boundaries of what's possible. With a background in computer science and 
                machine learning, I specialize in creating AI solutions that address real-world 
                challenges.
              </p>
              
              <p className="text-lg reveal-animation">
                My research focuses on advancing the field of artificial intelligence through novel 
                approaches to machine learning architectures and algorithms. I believe in the power of 
                AI to transform industries and improve lives.
              </p>
              
              <p className="text-lg reveal-animation">
                When I'm not coding or researching, you can find me keeping up with the latest 
                developments in AI, contributing to open-source projects, or sharing knowledge through 
                technical writing and presentations.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain className="h-8 w-8 text-primary" />,
                  title: "AI Expertise",
                  description: "Specialized in developing advanced neural architectures and state-of-the-art AI systems."
                },
                {
                  icon: <Code className="h-8 w-8 text-primary" />,
                  title: "Full Stack ML",
                  description: "Experience implementing end-to-end machine learning systems from research to production."
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-primary" />,
                  title: "Innovation",
                  description: "Constantly exploring new approaches and pushing the boundaries of AI capabilities."
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-primary" />,
                  title: "Research",
                  description: "Publishing research and contributing to the growing body of AI knowledge."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-2xl reveal-animation"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-display font-bold text-center mb-10 reveal-animation">
            My Tech Stack & Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 reveal-animation">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
