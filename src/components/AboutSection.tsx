import { Network, Shield, Server, Terminal } from 'lucide-react';

const highlights = [
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'VLANs, routing, switching, pfSense firewall configuration',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Attack simulation, memory forensics, MITRE ATT&CK mapping',
  },
  {
    icon: Server,
    title: 'Systems Administration',
    description: 'Windows Server, Active Directory, Linux environments',
  },
  {
    icon: Terminal,
    title: 'Automation',
    description: 'Ansible playbooks, Docker, Git-based workflows',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium mb-2 block">About</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Summary
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a computer networking and cybersecurity student with strong hands-on experience 
              in building and securing enterprise-style environments.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My focus areas include network infrastructure (VLANs, switching, routing, firewalls), 
              Active Directory administration, Linux and Windows server environments, cybersecurity 
              attack simulation, digital forensics, and network automation using Ansible.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I emphasize practical lab-based learning, open-source tools, and real-world 
              enterprise-style environments. Currently completing my final year at London 
              Metropolitan University through Islington College.
            </p>
          </div>

          {/* Right Content - Highlights */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-5 rounded-xl border border-border bg-card card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">
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
