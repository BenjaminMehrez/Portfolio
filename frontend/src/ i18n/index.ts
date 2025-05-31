import type { Translations } from "./types";

const translations: Record<'es' | 'en', Translations> = {
  es: {
    navbar: {
      projects: "Proyectos",
    },
    home: {
      title: "Hola, soy",
      description: "Soy desarrollador full-stack con más de 3 años desarrollando aplicaciones web. Trabajo tanto en front-end como en back-end para crear soluciones sólidas, eficientes y fáciles de usar.",
      button: "Proyectos"
    },
    project: {
      title: "Proyectos",
      description: "En esta colección, encontrarás algunos de mis proyectos más recientes, que destacan por su creatividad, enfoque en la resolución de problemas y meticulosa atención al detalle. Cada uno cuenta una historia: desde la superación de desafíos técnicos hasta la conversión de ideas innovadoras en herramientas funcionales que realmente marcan la diferencia."
    },
    skills: {
      description: "Desarrollador autodidacta desde 2022, con experiencia en la creación y mantenimiento de proyectos profesionales utilizando lenguajes y frameworks modernos.",
      languages: "Lenguajes de Programación",
      database: "Bases de Datos",
      versionControl: "Control de Versiones",
      others: "Otros",
    },
    education: {
      title: "Cronología de la educación",
      desarrolloWeb: "Desarrollo Web",
      python: "Python Interactivo",
      certificates: "Certificados"
    }
  },
  en: {
    navbar: {
      projects: "Projects",
    },
    home: {
      title: "Hi, my name is",
      description: "I’m a Full-Stack Developer with 3+ years of experience building web applications. I work on both front-end and back-end to create solid, efficient, and user-friendly solutions.",
      button: "Projects"
    },
    project: {
      title: "Projects",
      description: "In this collection, you'll find some of my most recent projects, which stand out for their creativity, focus on problem-solving, and meticulous attention to detail. Each one tells a story: from overcoming technical challenges to turning innovative ideas into functional tools that really make a difference."
    },
    skills: {
      description: "Self-taught developer since 2022, with experience in building and maintaining professional projects using modern languages and frameworks.",
      languages: "Programming Languages",
      database: "DataBases",
      versionControl: "Version Control",
      others: "Others",
    },
    education: {
      title: "Education Timeline",
      desarrolloWeb: "Web Development",
      python: "Python Interactive",
      certificates: "Certificates"
    },
  },
};

export default translations;
