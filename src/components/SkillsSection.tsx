
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Database, Laptop, PenTool, ChevronRight } from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    { name: "Machine Learning", proficiency: 95 },
    { name: "Deep Learning", proficiency: 90 },
    { name: "Computer Vision", proficiency: 85 },
    { name: "Natural Language Processing", proficiency: 88 },
    { name: "Reinforcement Learning", proficiency: 80 },
  ];

  const programmingSkills = [
    { name: "Python", proficiency: 96 },
    { name: "TensorFlow", proficiency: 92 },
    { name: "PyTorch", proficiency: 88 },
    { name: "SQL", proficiency: 85 },
    { name: "JavaScript/TypeScript", proficiency: 75 },
  ];

  const toolsSkills = [
    { name: "Docker", proficiency: 88 },
    { name: "Git", proficiency: 90 },
    { name: "AWS", proficiency: 82 },
    { name: "Kubernetes", proficiency: 76 },
    { name: "MLflow", proficiency: 85 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center reveal">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto reveal">
          A comprehensive overview of my technical expertise and capabilities in AI development and research.
        </p>

        <div className="max-w-4xl mx-auto reveal">
          <Tabs defaultValue="technical" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="technical" className="flex items-center justify-center">
                  <Brain className="w-4 h-4 mr-2" />
                  <span>AI/ML</span>
                </TabsTrigger>
                <TabsTrigger value="programming" className="flex items-center justify-center">
                  <Code className="w-4 h-4 mr-2" />
                  <span>Programming</span>
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center justify-center">
                  <Laptop className="w-4 h-4 mr-2" />
                  <span>Tools</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="technical" className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="programming" className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 text-center reveal">
          <a href="/resume" className="inline-flex items-center text-primary hover:underline text-lg font-medium">
            View Full Resume
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
