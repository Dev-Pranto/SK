
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  const navItems = isHomePage 
    ? [
        { name: "about", path: "#about" },
        { name: "projects", path: "#projects" },
        { name: "research", path: "#research" },
        { name: "contact", path: "#contact" },
        { name: "resume", path: "/resume" },
      ]
    : [
        { name: "home", path: "/" },
        { name: "projects", path: "/projects" },
        { name: "resume", path: "/resume" },
      ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            className="text-2xl font-display font-bold text-foreground tracking-tight"
          >
            <span className="text-primary">AI</span>Engineer
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.path.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.name);
                  }}
                  className="text-sm font-medium capitalize tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium capitalize tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navItems.map((item, i) => (
            item.path.startsWith("#") ? (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.name);
                }}
                className={cn(
                  "text-xl font-medium capitalize tracking-wide text-foreground transition-all",
                  "transform translate-y-8 opacity-0",
                  isOpen && `animate-slide-up delay-${i}`
                )}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-medium capitalize tracking-wide text-foreground transition-all",
                  "transform translate-y-8 opacity-0",
                  isOpen && `animate-slide-up delay-${i}`
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
