import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Final Year Student • Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up delay-100">
            Nikita Bhandari
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up delay-200">
            Networking & Cybersecurity Student
          </p>
          
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-6 animate-slide-up delay-200">
            <MapPin className="w-4 h-4" />
            <span>Kathmandu, Nepal</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-slide-up delay-300">
            BSc (Hons) Computer Networking & IT Security student at London Metropolitan University 
            (via Islington College). Focused on network infrastructure, Active Directory, security 
            monitoring, and automation using Ansible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10 animate-slide-up delay-400">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 animate-slide-up delay-500">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nikitachhettri17@gmail.com"
              className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
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
