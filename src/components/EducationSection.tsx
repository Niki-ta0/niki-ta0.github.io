import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = {
  degree: {
    title: 'Bachelor in Information Technology',
    institution: 'University of Technology',
    duration: '2021 - Present',
    description: 'Focused on Networking, Cyber Security, and System Administration',
    coursework: [
      'Network Security & Protocols',
      'Cyber Security Fundamentals',
      'Cloud Computing Architecture',
      'Digital Forensics',
      'Operating Systems',
      'Database Management',
      'IT Infrastructure',
      'Ethical Hacking',
    ],
  },
  certifications: [
    {
      title: 'Cyber Security Fundamentals',
      issuer: 'Certified Training Provider',
      date: '2024',
      status: 'Completed',
    },
    {
      title: 'Networking Fundamentals',
      issuer: 'Industry Certification',
      date: '2024',
      status: 'Completed',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress',
    },
    {
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2025',
      status: 'Planned',
    },
  ],
};

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">
            // Education & Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="p-8 rounded-xl bg-card border border-border card-elevated">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">{education.degree.title}</h3>
                <p className="text-muted-foreground">{education.degree.institution}</p>
                <span className="text-sm font-mono text-primary">{education.degree.duration}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {education.degree.description}
            </p>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-medium">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.degree.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 text-sm font-mono rounded-md bg-secondary/70 text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="p-8 rounded-xl bg-card border border-border card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Certifications</h3>
                <p className="text-muted-foreground text-sm">Professional credentials & learning</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="flex items-start justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono text-muted-foreground">{cert.date}</span>
                    <span
                      className={`block text-xs mt-1 px-2 py-0.5 rounded-full ${
                        cert.status === 'Completed'
                          ? 'bg-primary/10 text-primary'
                          : cert.status === 'In Progress'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
