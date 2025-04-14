
import { Brain, Code, Server, BarChart } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Machine Learning", icon: <Brain className="w-6 h-6 text-primary" /> },
    { name: "Deep Learning", icon: <Brain className="w-6 h-6 text-primary" /> },
    { name: "Natural Language Processing", icon: <Code className="w-6 h-6 text-primary" /> },
    { name: "Computer Vision", icon: <Code className="w-6 h-6 text-primary" /> },
    { name: "Data Engineering", icon: <Server className="w-6 h-6 text-primary" /> },
    { name: "Data Analysis", icon: <BarChart className="w-6 h-6 text-primary" /> },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center reveal">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="prose prose-lg max-w-none reveal">
            <p className="text-muted-foreground">
              Hello! I'm SK Hamim Ishthiaque Pranto, an AI Engineer and Researcher dedicated to pushing the boundaries of artificial intelligence and its applications. With a strong foundation in machine learning, deep learning, and computer vision, I specialize in developing innovative solutions to complex problems.
            </p>
            
            <p className="text-muted-foreground mt-4">
              My research focuses on advancing neural network architectures and applying them to real-world challenges in healthcare, autonomous systems, and natural language understanding. I'm passionate about creating AI systems that are not only powerful but also ethical, explainable, and beneficial to society.
            </p>
            
            <p className="text-muted-foreground mt-4">
              With experience in both academic research and industry applications, I bring a comprehensive perspective to AI development. I'm constantly exploring new methods and technologies to improve the state of the art and make AI more accessible and useful across various domains.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-border transition-all hover:shadow-md">
                {skill.icon}
                <span className="ml-3 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
