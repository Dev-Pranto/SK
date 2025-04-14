
import { useRef } from "react";
import ResearchPaper from "./ResearchPaper";

const Research = () => {
  const research = [
    {
      title: "Improving Robustness in Foundation Models Through Adversarial Training Techniques",
      journal: "Journal of Machine Learning Research",
      year: "2023",
      abstract: "This paper explores novel approaches to enhance the robustness of foundation models against adversarial attacks by implementing a progressive adversarial training regimen. Our results demonstrate a 47% increase in model resilience while maintaining performance across standard benchmarks.",
      link: "#"
    },
    {
      title: "A Comparative Analysis of Transformer Architectures for Low-Resource NLP Tasks",
      journal: "Proceedings of ACL",
      year: "2022",
      abstract: "We present a comprehensive evaluation of various transformer architectures on low-resource natural language processing tasks. Through extensive experimentation, we identify optimal configurations and propose a new lightweight architecture that outperforms standard models with significantly fewer parameters.",
      link: "#"
    },
    {
      title: "Self-Supervised Pretraining Strategies for Computer Vision in Medical Imaging",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2023",
      abstract: "This research introduces novel self-supervised pretraining methods specifically designed for medical imaging applications. Our approach achieves state-of-the-art results on diagnostic classification tasks while requiring only 10% of the labeled data compared to fully supervised approaches.",
      link: "#"
    },
    {
      title: "Explainable AI Systems: Bridging the Gap Between Performance and Interpretability",
      journal: "AI Communications",
      year: "2022",
      abstract: "We address the critical challenge of developing high-performing yet interpretable AI systems. This paper proposes a framework for maintaining model explainability without sacrificing predictive power, demonstrated across multiple domains including healthcare and finance.",
      link: "#"
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="research" ref={sectionRef} className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary font-medium reveal-animation">Research</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 reveal-animation">
            Academic Contributions
          </h2>
          <p className="text-lg text-muted-foreground reveal-animation">
            My published research focusing on advancing the field of artificial intelligence
            through novel approaches and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {research.map((paper, index) => (
            <ResearchPaper 
              key={index}
              {...paper}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
