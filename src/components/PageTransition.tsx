
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-background z-[9999] flex items-center justify-center pointer-events-none transition-opacity duration-500",
          isLoading ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="relative h-16 w-16">
          <div className="absolute top-0 h-16 w-16 animate-spin">
            <div className="h-8 w-8 rounded-full bg-primary absolute top-0 left-0"></div>
          </div>
          <div className="absolute bottom-0 right-0 h-16 w-16 animate-spin">
            <div className="h-8 w-8 rounded-full bg-primary absolute bottom-0 right-0"></div>
          </div>
        </div>
      </div>
      
      <div
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
