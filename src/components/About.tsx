const About = () => {
  return (
    <section id="about" className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate full-stack developer who loves turning complex problems into elegant, 
            user-friendly solutions. With expertise in both frontend and backend technologies, 
            I specialise in building scalable web applications that make a real impact.
          </p>
          
          <p>
            My journey in tech started with a curiosity about how things work under the hood. 
            Today, I focus on modern JavaScript frameworks, Python backends, and cloud architecture. 
            I'm constantly learning and experimenting with new technologies to stay at the cutting edge.
          </p>

          <p>
            Currently, I'm diving deep into Django REST APIs and exploring serverless architectures. 
            I'm excited about projects that challenge me to think creatively and push the boundaries 
            of what's possible with code.
          </p>

          <p>
            When I'm not coding, you'll find me contributing to open-source projects, writing technical 
            blog posts, or exploring the latest trends in web development and AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
