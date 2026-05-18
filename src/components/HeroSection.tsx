import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-muted-foreground mb-2 animate-slide-up">Hello, I'm</p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up delay-100">
              Nikita Bhandari
            </h1>

            {/* Title with accent */}
            <div className="flex items-center gap-3 mb-6 animate-slide-up delay-200">
              <div className="w-12 h-[2px] bg-primary" />
              <p className="text-lg text-muted-foreground">
                Networking & Cybersecurity Student
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-slide-up delay-300">
              Final-year BSc Computer Networking & IT Security student at London Metropolitan University. 
              Passionate about network infrastructure, security monitoring, and automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 animate-slide-up delay-400">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 animate-slide-up delay-500">
              <span className="text-sm text-muted-foreground mr-2">Find me on</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              <a
                href="mailto:nikitachhettri17@gmail.com"
                className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-up">
            <div className="relative">
              {/* Abstract shape */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* Stats cards */}
              <div className="relative grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border card-elevated">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border card-elevated">
                  <div className="text-3xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border card-elevated col-span-2">
                  <div className="text-3xl font-bold text-primary mb-1">Kathmandu</div>
                  <div className="text-sm text-muted-foreground">Nepal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
