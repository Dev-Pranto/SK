
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="text-[150px] md:text-[200px] font-display font-bold text-primary/10">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Page Not Found
              </h1>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
