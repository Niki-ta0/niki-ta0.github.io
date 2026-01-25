import { Network, Shield, Cloud, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Network,
    title: 'Networking',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'Active Directory', 'VLANs', 'Routing & Switching', 'Subnetting', 'Network Protocols'],
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    skills: ['Brute Force Attacks', 'Kerberos', 'Digital Forensics', 'Wazuh SIEM', 'Vulnerability Analysis', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    skills: ['Cloud Fundamentals', 'Virtualization', 'AWS Basics', 'Cloud Security', 'Infrastructure as Code', 'Container Basics'],
  },
  {
    icon: Server,
    title: 'IT Administration',
    skills: ['Windows Server 2022', 'Linux Administration', 'User Management', 'Log Monitoring', 'Backup & Recovery', 'Group Policy', 'System Hardening'],
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'VirtualBox', 'VMware', 'Nmap', 'Splunk'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">
            // Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-elevated ${
                index === skillCategories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono rounded-md bg-secondary/70 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars Alternative Display */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-mono text-primary text-sm mb-8 text-center">// Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { skill: 'Networking & Infrastructure', level: 85 },
              { skill: 'Cyber Security & Penetration Testing', level: 75 },
              { skill: 'Linux Administration', level: 80 },
              { skill: 'Windows Server Management', level: 70 },
              { skill: 'Cloud Technologies', level: 65 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-mono">{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
