import { Shield, Server, Cloud, Terminal } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Vulnerability analysis, penetration testing, and security monitoring',
  },
  {
    icon: Server,
    title: 'Networking',
    description: 'TCP/IP, routing, switching, and network infrastructure',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Cloud fundamentals, virtualization, and AWS basics',
  },
  {
    icon: Terminal,
    title: 'IT Administration',
    description: 'Windows Server, Linux, Active Directory management',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">
            // About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate <span className="gradient-text">IT Professional</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an IT student with a deep passion for <span className="text-primary font-medium">Networking</span>, 
              <span className="text-primary font-medium"> Cyber Security</span>, 
              <span className="text-primary font-medium"> Cloud Computing</span>, and 
              <span className="text-primary font-medium"> IT Administration</span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology is driven by curiosity and a desire to understand how systems work—and 
              more importantly, how to secure them. I've developed hands-on experience working with virtual labs, 
              servers, Active Directory environments, Linux systems, Windows Server, firewalls, and various 
              security tools.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm particularly interested in learning real-world enterprise infrastructure and security 
              operations. My goal is to contribute to building robust, secure systems that organizations 
              can rely on.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="text-2xl md:text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Tools</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="text-2xl md:text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Certs</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-elevated hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
