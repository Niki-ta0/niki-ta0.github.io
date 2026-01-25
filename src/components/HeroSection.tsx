import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up delay-100">
            Hi, I'm{' '}
            <span className="gradient-text">Nikita Bhandari</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-slide-up delay-200">
            <span className="text-primary">&gt;</span> Networking & Cyber Security Enthusiast
            <span className="terminal-cursor" />
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 animate-slide-up delay-300">
            Cloud & IT Administration Learner
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-400">
            Passionate about building secure network infrastructures, exploring vulnerability assessments, 
            and mastering cloud technologies. Currently diving deep into enterprise security operations 
            and system administration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-500">
            <Button variant="cyber" size="xl" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="cyber-outline" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nikita@example.com"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
