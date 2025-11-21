import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
 {
  title: "Farm Connect Platform",
  description: "A full-stack agricultural marketplace connecting local farmers with nearby consumers for fresh produce, fair prices, and direct trade.",
  problem: "Local farmers lacked a reliable online platform to sell directly to consumers, leading to low visibility and unfair middle-man pricing.",
  solution: "Built a scalable farm-to-consumer platform with real-time product listings, location-based search, farmer profiles, and secure orders.",
  tech: ["React", "Node.js", "PostgreSQL", "Firebase Auth", "Mapbox"],
  image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop",
  demo: "https://gaelnduko.github.io/FarmconnectKE/",
  github: "https://gaelnduko.github.io/FarmconnectKE/",
}
,
  {
  title: "SafiriShield",
  description: "An intelligent travel-safety companion that provides real-time safety alerts, cultural guidance, city safety scores, and AI-powered risk assistance for travellers.",
  problem: "Travellers often lack reliable, country-specific safety insights and cultural guidance, leading to avoidable risks and misunderstandings in unfamiliar places.",
  solution: "Built a smart travel-safety platform with real-time alerts, location-based risk assessment, cultural dos & don’ts, and an AI assistant to help travellers make safe decisions.",
  tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Mapbox"],
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
  demo: "https://safirishield-demo.example.com",
  github: "https://github.com/yourusername/safiri-shield",
}
,
 {
  title: "Brew Mate",
  description: "A social and discovery app for coffee and tea enthusiasts to explore new brews, share reviews, and connect with fellow aficionados.",
  problem: "Coffee and tea lovers lacked a platform to discover local brews, track favourites, and connect with like-minded people.",
  solution: "Built a community-driven platform with personalized recommendations, interactive reviews, and a map to find nearby cafes and specialty shops.",
  tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Mapbox"],
  image: "https://images.unsplash.com/photo-1510626176961-4b53286dfe05?w=800&auto=format&fit=crop",
  demo: "https://gaelnduko.github.io/Brew-mate/",
  github: "https://gaelnduko.github.io/Brew-mate/",
}
,
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Problem:</span> {project.problem}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Solution:</span> {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
