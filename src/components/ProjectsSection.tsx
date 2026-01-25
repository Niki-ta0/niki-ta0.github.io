import { ExternalLink, Github, Shield, Key, Search, Activity, HardDrive } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    icon: Shield,
    title: 'Brute Force Attack Analysis',
    description: 'Conducted comprehensive analysis of brute force attack patterns, implementing detection mechanisms and defensive countermeasures in a controlled lab environment.',
    technologies: ['Kali Linux', 'Hydra', 'Wireshark', 'Log Analysis'],
    objective: 'Understanding attack vectors and implementing intrusion detection',
    category: 'Security',
  },
  {
    icon: Key,
    title: 'Kerberos & Active Directory Security Lab',
    description: 'Built and secured an Active Directory environment, exploring Kerberos authentication vulnerabilities including Golden Ticket and Pass-the-Hash attacks.',
    technologies: ['Windows Server 2022', 'Active Directory', 'Mimikatz', 'PowerShell'],
    objective: 'AD security hardening and authentication protocol analysis',
    category: 'Security',
  },
  {
    icon: Search,
    title: 'Digital Forensics & Memory Analysis',
    description: 'Performed memory forensics and artifact analysis to investigate security incidents, using industry-standard tools for evidence collection and analysis.',
    technologies: ['Volatility', 'Autopsy', 'FTK Imager', 'Memory Analysis'],
    objective: 'Incident investigation and evidence preservation techniques',
    category: 'Forensics',
  },
  {
    icon: Activity,
    title: 'Wazuh SIEM Log Monitoring Setup',
    description: 'Deployed and configured Wazuh SIEM for centralized log monitoring, creating custom rules for threat detection and automated alerting.',
    technologies: ['Wazuh', 'Elasticsearch', 'Linux', 'SIEM'],
    objective: 'Real-time security monitoring and threat detection',
    category: 'Monitoring',
  },
  {
    icon: HardDrive,
    title: 'LVM & Linux Server Management',
    description: 'Configured enterprise-grade Linux servers with LVM for flexible storage management, implementing backup strategies and system hardening.',
    technologies: ['Linux', 'LVM', 'Bash Scripting', 'System Administration'],
    objective: 'Enterprise server management and storage optimization',
    category: 'Administration',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">
            // Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects showcasing practical skills in cyber security, 
            network administration, and system management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-elevated hover:-translate-y-2"
            >
              {/* Category Badge */}
              <span className="absolute top-4 right-4 px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary">
                {project.category}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <project.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors pr-16">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Objective */}
              <div className="mb-4 p-3 rounded-lg bg-secondary/50">
                <span className="text-xs font-mono text-primary block mb-1">Objective:</span>
                <span className="text-sm text-muted-foreground">{project.objective}</span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1" disabled>
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" disabled>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
