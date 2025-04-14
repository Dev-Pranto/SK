
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Code, Book, Layers, FileText, Send } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Code },
    { name: "Projects", path: "/projects", icon: Layers },
    { name: "Publications", path: "/publications", icon: Book },
    { name: "Resume", path: "/resume", icon: FileText },
    { name: "Contact", path: "/#contact", icon: Send }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavItemClick = (path: string) => {
    if (path.startsWith("/#")) {
      const element = document.getElementById(path.substring(2));
      if (element && location.pathname === "/") {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg overflow-hidden transition-transform group-hover:scale-110">
              <Code 
                className="text-primary-foreground transition-transform group-hover:rotate-12" 
                size={24} 
              />
            </div>
            <div 
              className={cn(
                "flex flex-col justify-center overflow-hidden transition-all duration-300",
                isScrolled ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0 md:max-w-0 md:opacity-0"
              )}
            >
              <span className="font-bold text-sm leading-tight whitespace-nowrap text-foreground ml-2">SK HAMIM</span>
              <span className="font-bold text-sm leading-tight whitespace-nowrap text-foreground ml-2">ISHTHIAQUE PRANTO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavItemClick(item.path)}
                className={cn(
                  "group flex items-center space-x-2 text-sm font-medium transition-all duration-300 ease-in-out px-3 py-2 rounded-lg hover:bg-primary/10",
                  (location.pathname === item.path || (location.pathname === "/" && item.path.startsWith("/#")))
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon 
                  size={16} 
                  className="transition-transform group-hover:scale-110" 
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X 
                size={24} 
                className="text-destructive group-hover:rotate-180 transition-transform" 
              />
            ) : (
              <Menu 
                size={24} 
                className="group-hover:scale-110 transition-transform" 
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out flex flex-col justify-center",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleNavItemClick(item.path)}
              className={cn(
                "text-xl font-medium flex items-center space-x-4 transition-all duration-300 ease-in-out transform translate-y-8 opacity-0",
                location.pathname === item.path ? "text-primary" : "text-foreground",
                isOpen && `animate-[slideUp_0.3s_${i * 0.05}s_forwards]`
              )}
              style={{
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
                transform: "translateY(20px)"
              }}
            >
              <item.icon size={24} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
