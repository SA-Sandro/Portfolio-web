import type Lang from "@/utils/Types/LangInterface";
import type Experience from "@/utils/Types/ExperienceInterface";
import type Formations from "@/utils/Types/FormationInterface";

export const ui = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    experiences: "Experiencias",
    projects: "Proyectos",
    contact: "Contactos",
    greeting: "¡Hola! Soy",
    name: "Sandro Suárez",
    title: "Desarrollador Web Junior",
    availabilityBadge: "Disponible para trabajar",
    description:
      "Desarrollador de Aplicaciones Web con experiencia en tecnologías como Vue, TypeScript, PHP, Symfony, Vitest, Cypress, etc. Comprometido con el aprendizaje continuo y la creación de soluciones eficientes.",
    viewCV: "VER CV",
    contactButton: "CONTACTO",
    aboutTitle: "Sobre mí",
    aboutDescr: `
      <p>
        <span class="text-[#599b59] dark:text-yellow-200/90">Gestor Forestal, Educador Ambiental</span> y 
        <span class="text-[#599b59] dark:text-yellow-200/90">Desarrollador de Aplicaciones Web</span>. 
        Amante de las ciencias y de la tecnología. Soy una persona curiosa y autodidacta en aquello que me gusta.
      </p>
      <p class="mt-5">
        En mi tiempo libre, me gusta dedicarme a la <span class="text-[#599b59] dark:text-yellow-200/90">entomología</span> y a la 
        <span class="text-[#599b59] dark:text-yellow-200/90">divulgación científica</span>. Además, desde que descubrí el desarrollo web, 
        me encanta crear proyectos personales y aprender nuevas tecnologías.
      </p>`,
    titleWorkExperiences: "Experiencia Laboral",
    titleFormation: "Formación",
  },
  en: {
    home: "Home",
    about: "About",
    experiences: "Experiences",
    projects: "Projects",
    contact: "Contact",
    greeting: "Hello! I am",
    name: "Sandro Suárez",
    title: "Junior Web Developer",
    availabilityBadge: "Available for work",
    description:
      "Web Application Developer with experience in technologies like Vue, TypeScript, PHP, Symfony, Vitest, Cypress, etc. Committed to continuous learning and creating efficient solutions.",
    viewCV: "VIEW CV",
    contactButton: "CONTACT",
    aboutTitle: "About me",
    aboutDescr: `
      <p>
        <span class="text-[#599b59] dark:text-yellow-200/90">Forest Manager, Environmental Educator</span> and 
        <span class="text-[#599b59] dark:text-yellow-200/90">Web Application Developer</span>. 
        A lover of science and technology. I am a curious and self-taught person in what I like.
      </p>
      <p class="mt-5">
        In my free time, I enjoy <span class="text-[#599b59] dark:text-yellow-200/90">entomology</span> and 
        <span class="text-[#599b59] dark:text-yellow-200/90">scientific divulgation</span>. Additionally, since discovering web development, 
        I love creating personal projects and learning new technologies.
      </p>`,
    titleWorkExperiences: "Work Experiences",
    titleFormation: "Formation",
  },
} as const;

export const EXPERIENCES: Experience = {
  es: [
    {
      date: "Abr 2024 - Jun 2024",
      title: "Desarrollador Full-stack || Enreach Labs",
      description:
        "Mi principal responsabilidad en Enreach Labs fue la creación de una biblioteca virtual para la empresa junto a un equipo de trabajo. Este proyecto me permitió profundizar en diferentes tecnologías, arquitecturas y patrones de diseño",
    },
    {
      date: "Jun 2023 - Nov 2024",
      title: "Técnico Especialista",
      description: "Identificación de artrópodos de suelos",
    },
    {
      date: "Jun 2022 - Jun 2023",
      title: "Educador Ambiental",
      description:
        "Desarrollo de talleres educativos sobre diversas temáticas ambientales y creación de material didáctico para su implementación. Impartición de talleres ambientales en los municipios de Vélez-Málaga, Campillos y labor como educador ambiental en el CIR Valsequillo en Antequera",
    },
    {
      date: "Ago 2021 - Feb 2022",
      title: "Auxiliar administrativo",
      description:
        "Ejecución de inventarios del mobiliario urbano en diversos municipios de Andalucía, con énfasis en Vélez Málaga y alrededores de la Axarquía. Análisis y digitalización de datos recopilados durante los inventarios utilizando el software QGIS",
    },
  ],
  en: [
    {
      date: "Apr 2024 - Jun 2024",
      title: "Full-stack Developer || Enreach Labs",
      description:
        "My main responsibility at Enreach Labs was the creation of a virtual library for the company along with a team. This project allowed me to delve into different technologies, architectures, and design patterns",
    },
    {
      date: "Jun 2023 - Nov 2024",
      title: "Specialist Technician",
      description: "Identification of soil arthropods",
    },
    {
      date: "Jun 2022 - Jun 2023",
      title: "Environmental Educator",
      description:
        "Development of educational workshops on various environmental topics and creation of didactic material for their implementation. Conducting environmental workshops in the municipalities of Vélez-Málaga, Campillos, and work as an environmental educator at CIR Valsequillo in Antequera",
    },
    {
      date: "Aug 2021 - Feb 2022",
      title: "Administrative Assistant",
      description:
        "Execution of inventories of urban furniture in various municipalities of Andalusia, with an emphasis on Vélez Málaga and the surroundings of the Axarquía. Analysis and digitization of data collected during the inventories using QGIS software",
    },
  ],
};

export const FORMATIONS: Formations = {
  es: [
    {
      title: "Técnico Superior en Gestión Forestal y del Medio Natural",
      institution: "Universidad Laboral de Málaga",
      date: "2018-2021",
    },
    {
      title: "Técnico Superior en Educación y Control Ambiental",
      institution: "Universidad Laboral de Málaga",
      date: "2020-2022",
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institution: "MEDAC",
      date: "2022-2024",
    },
  ],
  en: [
    {
      title: "Higher Technician in Forestry and Environmental Management",
      institution: "Universidad Laboral de Málaga",
      date: "2018-2021",
    },
    {
      title: "Higher Technician in Environmental Education and Control",
      institution: "Universidad Laboral de Málaga",
      date: "2020-2022",
    },
    {
      title: "Higher Technician in Web Applications Development",
      institution: "MEDAC",
      date: "2022-2024",
    },
  ],
};

export const languages: Lang = {
  es: "es",
  en: "en",
};
