
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Neural Vision System",
      description: "An advanced computer vision system that uses custom-trained neural networks to identify and classify objects in real-time video streams with high accuracy.",
      tags: ["Computer Vision", "PyTorch", "Real-time Processing", "CNN"],
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1470&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Intelligent Document Analysis",
      description: "A document processing pipeline that leverages NLP and transformer models to extract, categorize, and analyze information from various document types.",
      tags: ["NLP", "Transformers", "OCR", "Python"],
      image: "https://images.unsplash.com/photo-1453906971074-ce568cccbc63?q=80&w=1470&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Reinforcement Learning Environment",
      description: "A customizable simulation environment for testing and benchmarking reinforcement learning algorithms with comprehensive visualization tools.",
      tags: ["Reinforcement Learning", "Simulation", "TensorFlow", "OpenAI Gym"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1465&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center reveal">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto reveal">
          A selection of my most significant AI projects, showcasing practical applications of machine learning techniques.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs font-medium">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <a href={project.link} className="text-primary hover:underline text-sm inline-flex items-center">
                  View Project Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Button asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
