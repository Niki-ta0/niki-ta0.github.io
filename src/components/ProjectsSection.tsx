import { ShieldAlert, Search, Shield, Lock, Key } from 'lucide-react';

const projects = [
  {
    icon: ShieldAlert,
    title: 'Redefining AD Security: Lightweight Threat Detection with Wazuh and Sysmon',
    badge: 'Final Year Project',
    description: 'A hybrid Active Directory threat detection and response system that simulates real-world attacks mapped to the MITRE ATT&CK framework, using Wazuh and Sysmon for lightweight, automated detection and alerting.',
    features: [
      'Simulated Kerberoasting, Pass-the-Hash, DCSync, and Golden Ticket attacks',
      'Wazuh SIEM deployed on Azure Ubuntu for centralised log analysis',
      'Sysmon-enhanced Windows event logging on domain controller and endpoint',
      'Custom Wazuh rules mapped to MITRE ATT&CK techniques',
      'Automated Slack and email alerting via Wazuh integrations',
      'Active Response for automated threat containment',
    ],
    technologies: ['Wazuh', 'Sysmon', 'Windows Server 2022', 'Azure', 'MITRE ATT&CK', 'Kali Linux', 'Active Directory', 'VMware'],
  },
  {
    icon: Search,
    title: 'Memory Forensic Investigation of Kerberoasting Attacks',
    badge: 'Digital Forensics',
    description: 'A controlled Active Directory attack simulation followed by deep memory forensic analysis.',
    features: [
      'Simulated Kerberoasting attacks in lab AD environment',
      'Memory capture using WinPmem and DumpIt',
      'Analysis with Volatility 3',
      'LSASS artifacts and Kerberos ticket investigation',
      'Correlation with Event Logs and Sysmon',
    ],
    technologies: ['Volatility 3', 'WinPmem', 'DumpIt', 'Sysmon', 'Active Directory', 'MITRE ATT&CK'],
  },
  {
    icon: Shield,
    title: 'Advanced DVWA Exploitation & Defense Lab',
    badge: 'Security Lab',
    description: 'Simulated brute-force and credential-based attacks with layered defense implementation.',
    features: [
      'Identified authentication weaknesses',
      'Implemented PHP-based lockouts and logging',
      'Automated IP banning with Fail2Ban',
      'Mapped attacks to MITRE ATT&CK (T1110, T1078)',
      'Zero successful brute-force after mitigation',
    ],
    technologies: ['DVWA', 'Burp Suite', 'Hydra', 'Fail2Ban', 'PHP'],
  },
  {
    icon: Lock,
    title: 'Brute Force Attack Analysis',
    badge: 'Academic Project',
    description: 'Simulated attacks against WordPress and Telnet services using PTES methodology.',
    features: [
      'Vulnerability identification and risk analysis',
      'WordPress and Telnet service testing',
      'Mitigation recommendations (MFA, CAPTCHA, hardening)',
    ],
    technologies: ['Burp Suite', 'Metasploit', 'Nmap', 'Nikto', 'Kali Linux'],
  },
  {
    icon: Key,
    title: 'Custom Cryptographic Algorithm',
    badge: 'Academic',
    description: 'Designed a custom encryption approach inspired by Atbash cipher for conceptual learning.',
    features: [
      'Segmented alphabet mapping',
      'XOR-based binary operations',
      'Modular transformation logic',
    ],
    technologies: ['Python', 'Cryptography Concepts'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Hands-on projects showcasing practical skills in networking, cybersecurity, 
            and system administration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 md:p-8 rounded-xl bg-card border border-border card-hover"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-semibold text-lg">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary">
                      {project.badge}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5 text-sm text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
