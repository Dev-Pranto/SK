
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground reveal">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
