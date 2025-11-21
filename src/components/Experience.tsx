import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    period: "2023 - Present",
    description: "Building custom web applications for clients across various industries",
    highlights: [
      "Developed 10+ production applications",
      "Managed full project lifecycle from design to deployment",
      "Achieved 100% client satisfaction rate",
    ],
  },
  {
    title: "Web Development Intern",
    period: "2022 - 2023",
    description: "Contributed to large-scale e-commerce platform development",
    highlights: [
      "Implemented new features using React and Node.js",
      "Optimized database queries reducing load time by 40%",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    title: "Certifications & Learning",
    period: "Ongoing",
    description: "Continuous learning and skill development",
    highlights: [
      "Django REST Framework Certification",
      "AWS Cloud Practitioner",
      "Advanced React Patterns Course",
      "TypeScript Deep Dive",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in tech and continuous growth
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-x-2"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl">{exp.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {exp.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
