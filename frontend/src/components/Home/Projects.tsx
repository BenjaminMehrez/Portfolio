import { projects } from "../../data/projectsIngles";
import { HoverEffect } from "../ui/card-hover-effect";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-screen-lg mx-auto mt-16 px-12 xl:px-0"
    >
      <h1 className="font-bold text-3xl underline">Projects</h1>
      <p className="font-semibold mt-4">
        In this collection, you'll find some of my most recent projects, which
        stand out for their creativity, focus on problem-solving, and meticulous
        attention to detail. Each one tells a story: from overcoming technical
        challenges to turning innovative ideas into functional tools that really
        make a difference.
      </p>
      <HoverEffect items={projects} />
    </section>
  );
}

export default Projects;
