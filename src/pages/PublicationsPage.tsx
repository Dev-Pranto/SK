
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PublicationItem from "@/components/PublicationItem";
import { ArrowUp } from "lucide-react";

const PublicationsPage = () => {
  const publications = [
    {
      title: "Advancing Neural Networks for Computer Vision: A Novel Approach",
      journal: "IEEE Transactions on Neural Networks and Learning Systems",
      year: "2023",
      authors: "SK Hamim Ishthiaque Pranto, James Smith, Sarah Johnson",
      abstract: "This paper introduces a new architecture for neural networks specifically designed for complex computer vision tasks, demonstrating superior performance on benchmark datasets.",
      link: "#"
    },
    {
      title: "Transformer-Based Models for Multi-Modal Learning",
      journal: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: "2022",
      authors: "SK Hamim Ishthiaque Pranto, Michael Chen, Emma Wilson",
      abstract: "We present a novel transformer architecture that effectively learns from multiple input modalities simultaneously, with applications in healthcare and robotics.",
      link: "#"
    },
    {
      title: "Explainable AI for Medical Imaging: A Comparative Study",
      journal: "Journal of Artificial Intelligence in Medicine",
      year: "2022",
      authors: "Maria Rodriguez, SK Hamim Ishthiaque Pranto, David Kim",
      abstract: "This research examines various approaches to explainable AI in the context of medical imaging analysis, with a focus on clinical applicability.",
      link: "#"
    },
    {
      title: "Reinforcement Learning for Autonomous Systems: Challenges and Solutions",
      journal: "Conference on Robot Learning (CoRL)",
      year: "2021",
      authors: "SK Hamim Ishthiaque Pranto, Thomas Brown",
      abstract: "An in-depth analysis of current challenges in applying reinforcement learning to autonomous systems, with proposed solutions and experimental validation.",
      link: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once for initial animations
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <PageHeader
          title="Publications"
          description="My research contributions to the field of artificial intelligence and machine learning."
        />
        
        <div className="container mx-auto px-4 mt-12">
          <div className="grid gap-8">
            {publications.map((publication, index) => (
              <PublicationItem 
                key={index}
                publication={publication}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PublicationsPage;
