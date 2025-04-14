
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PublicationsSection = () => {
  const featuredPublications = [
    {
      title: "Transformer-Based Models for Multi-Modal Learning",
      journal: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: "2022",
      citation: "SK Hamim Ishthiaque Pranto, Michael Chen, Emma Wilson (2022). Transformer-Based Models for Multi-Modal Learning. NeurIPS 2022.",
      link: "#"
    },
    {
      title: "Explainable AI for Medical Imaging: A Comparative Study",
      journal: "Journal of Artificial Intelligence in Medicine",
      year: "2022",
      citation: "Maria Rodriguez, SK Hamim Ishthiaque Pranto, David Kim (2022). Explainable AI for Medical Imaging: A Comparative Study. J. Artif. Intell. Med., 114, 102395.",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center reveal">
          Recent <span className="text-primary">Publications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto reveal">
          My contributions to academic research in artificial intelligence and machine learning.
        </p>

        <div className="max-w-4xl mx-auto grid gap-6 reveal">
          {featuredPublications.map((publication, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl">{publication.title}</CardTitle>
                <CardDescription>
                  {publication.journal} ({publication.year})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {publication.citation}
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href={publication.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm inline-flex items-center"
                >
                  View Publication
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Button asChild>
            <Link to="/publications">
              View All Publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
