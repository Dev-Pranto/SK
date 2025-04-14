
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string;
  abstract: string;
  link: string;
}

interface PublicationItemProps {
  publication: Publication;
  index: number;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication, index }) => {
  return (
    <Card className="reveal hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">
          {publication.title}
        </CardTitle>
        <CardDescription>
          {publication.journal} ({publication.year})
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-medium">
          {publication.authors}
        </p>
        <p className="text-muted-foreground">
          {publication.abstract}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
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
  );
};

export default PublicationItem;
