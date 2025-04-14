
import { useState, useRef, FormEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium reveal-animation">Contact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 reveal-animation">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground reveal-animation">
            Interested in collaboration, research opportunities, or simply want to discuss AI? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 reveal-animation">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all",
                  isSubmitted 
                    ? "bg-green-600 text-white" 
                    : "bg-primary text-white hover:bg-primary/90"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-16 text-center reveal-animation">
            <p className="text-muted-foreground mb-2">Connect with me on social media</p>
            <div className="flex justify-center space-x-4">
              {[
                {
                  name: "GitHub",
                  url: "https://github.com",
                  icon: "https://cdn.simpleicons.org/github/333333"
                },
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com",
                  icon: "https://cdn.simpleicons.org/linkedin/0A66C2"
                },
                {
                  name: "Twitter",
                  url: "https://twitter.com",
                  icon: "https://cdn.simpleicons.org/twitter/1DA1F2"
                },
                {
                  name: "Medium",
                  url: "https://medium.com",
                  icon: "https://cdn.simpleicons.org/medium/000000"
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-secondary transition-colors"
                  aria-label={`Connect on ${social.name}`}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
