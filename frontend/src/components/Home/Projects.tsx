import useTranslation from "@/hooks/useTranslation";
import { projects, projectsSpanish } from "../../data/projects";
import { HoverEffect } from "../ui/card-hover-effect";
import useLanguageStore from "@/store/useLanguage";

function Projects() {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <section
      id="projects"
      className="max-w-screen-lg mx-auto mt-16 px-12 xl:px-0"
    >
      <h1 className="font-bold text-3xl underline">{t.project.title}</h1>
      <p className="font-semibold mt-4">{t.project.description}</p>
      {language === "es" ? (
        <HoverEffect items={projectsSpanish} />
      ) : (
        <HoverEffect items={projects} />
      )}
    </section>
  );
}

export default Projects;
