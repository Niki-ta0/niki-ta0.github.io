import { Network, Shield, Server, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Network,
    title: 'Networking',
    skills: ['VLANs & Trunking', 'Inter-VLAN Routing', 'Cisco Layer-3 Switching', 'pfSense Firewall', 'TCP/IP', 'DNS/DHCP', 'Subnetting', 'NAT'],
  },
  {
    icon: Server,
    title: 'Systems & Platforms',
    skills: ['Windows Server 2022', 'Active Directory', 'GPOs', 'Linux (Ubuntu, Kali, Debian)', 'VMware Workstation', 'VirtualBox', 'Docker'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Forensics',
    skills: ['Kali Linux', 'Nmap', 'Burp Suite', 'Hydra', 'Metasploit', 'Volatility 3', 'Memory Forensics', 'MITRE ATT&CK', 'Wazuh SIEM'],
  },
  {
    icon: Terminal,
    title: 'Automation & DevOps',
    skills: ['Ansible', 'YAML Playbooks', 'Git Version Control', 'Docker Containers', 'Role-based Automation'],
  },
  {
    icon: Wrench,
    title: 'Tools & Methodologies',
    skills: ['PTES Framework', 'DVWA', 'Metasploitable', 'Sysmon', 'Event Log Analysis', 'WinPmem', 'DumpIt'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium mb-2 block">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Core Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl bg-card border border-border card-hover ${
                index === skillCategories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
