import { Briefcase, GraduationCap, Award } from 'lucide-react';

const internship = {
  title: 'IT Infrastructure Intern',
  company: 'Techkraft Pvt. Ltd.',
  duration: 'August 2025 – December 2025',
  responsibilities: [
    'Configured pfSense firewall (routing, NAT, VLANs, DHCP, DNS)',
    'Worked with Cisco Layer-3 switches (VLANs, trunking, inter-VLAN routing)',
    'Managed Active Directory users, OUs, permissions, and GPOs',
    'Deployed services using Docker',
    'Configured iptables firewall rules',
    'Prepared technical documentation and weekly reports',
  ],
};

const education = {
  degree: 'BSc (Hons) Computer Networking & IT Security',
  institution: 'London Metropolitan University (via Islington College)',
  status: 'Final-year undergraduate student',
  coursework: [
    'Network Security',
    'Digital Forensics',
    'Cloud Computing',
    'Ethical Hacking',
    'Operating Systems',
    'Network Protocols',
  ],
};

const certifications = [
  { title: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy' },
  { title: 'AWS Academy Cloud Security Foundations', issuer: 'AWS Academy' },
  { title: 'AWS Academy Cloud Operations', issuer: 'AWS Academy' },
  { title: 'AWS Academy Cloud Architecting', issuer: 'AWS Academy' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco / Industry Training' },
  { title: 'Networking Basics', issuer: 'Cisco / Industry Training' },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium mb-2 block">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="p-6 md:p-8 rounded-xl bg-card border border-border card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{education.degree}</h3>
                <p className="text-muted-foreground text-sm">{education.institution}</p>
                <span className="text-xs text-primary font-medium">{education.status}</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Internship Card */}
          <div className="p-6 md:p-8 rounded-xl bg-card border border-border card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{internship.title}</h3>
                <p className="text-muted-foreground text-sm">{internship.company}</p>
                <span className="text-xs text-primary font-medium">{internship.duration}</span>
              </div>
            </div>

            <ul className="space-y-2">
              {internship.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-6 p-6 md:p-8 rounded-xl bg-card border border-border card-hover">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Certifications & Training</h3>
              <p className="text-muted-foreground text-sm">Professional credentials</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
