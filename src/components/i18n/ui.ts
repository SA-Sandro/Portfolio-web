import type Lang from "@/utils/Types/LangInterface";
import type Experience from "@/utils/Types/ExperienceInterface";
import type Formations from "@/utils/Types/FormationInterface";
import type Projects from "@/utils/Types/ProjectInterface";

export const ui = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    experiences: "Experiencias",
    skills: "Habilidades",
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
    titleCertificates: "Certificados",
    certificatesButton: "Mostrar certificados",
    cert_1_title: "Curso de React para principiantes",
    cert_1_date: "Abril 2024",
    cert_1_link:
      "Ver <a target='_blank' href='https://openwebinars.net/cert/mCIP'><span class='underline'>aquí</span></a>",
    cert_2_title: "Curso de React intermedio",
    cert_2_date: "Marzo 2024",
    cert_2_link:
      "Ver <a target='_blank' href='https://openwebinars.net/cert/qS28'><span class='underline'>aquí</span></a>",
    cert_3_title: "JavaScript Algorithms and Data Structures",
    cert_3_date: "Diciembre 2023",
    cert_3_link:
      "Ver <a target='_blank' href='https://www.freecodecamp.org/certification/fcc4010d557-eafe-4cb1-96f2-31d4ab5d077e/javascript-algorithms-and-data-structures'><span class='underline'>aquí</span></a>",
    tecnical_skills: "Habilidades técnicas",
    soft_skills: "Habilidades blandas",
    learning: "Aprendiendo...",
    learned: "Aprendidas",
    sk_1: "Trabajo en equipo",
    sk_2: "Resolutivo",
    sk_3: "Altas dotes comunicativas",
    sk_4: "Aprendizaje rápido",
    sk_5: "Responsabilidad",
    sk_6: "Adaptabilidad y flexibilidad",
    copy: "Copiar",
    copied: "Copiado",
    projectsSection: "Proyectos",
  },
  en: {
    home: "Home",
    about: "About",
    experiences: "Experiences",
    skills: "Skills",
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
    titleFormation: "Training",
    titleCertificates: "Certificates",
    certificatesButton: "Show certificates",
    cert_1_title: "Beginner React Course",
    cert_1_date: "April 2024",
    cert_1_link:
      "See <a target='_blank' href='https://openwebinars.net/cert/mCIP'><span class='underline'>here</span></a>",
    cert_2_title: "Intermediate React Course",
    cert_2_date: "March 2024",
    cert_2_link:
      "See <a target='_blank' href='https://openwebinars.net/cert/qS28'><span class='underline'>here</span></a>",
    cert_3_title: "JavaScript Algorithms and Data Structures",
    cert_3_date: "December 2023",
    cert_3_link:
      "See <a target='_blank' href='https://www.freecodecamp.org/certification/fcc4010d557-eafe-4cb1-96f2-31d4ab5d077e/javascript-algorithms-and-data-structures'><span class='underline'>here</span></a>",
    tecnical_skills: "Tecnical skills",
    soft_skills: "Soft skills",
    learning: "Learning...",
    learned: "Learned",
    sk_1: "Teamwork",
    sk_2: "Resolutive",
    sk_3: "High communication skills",
    sk_4: "Quick learning",
    sk_5: "Responsible",
    sk_6: "Adaptability and flexibility",
    copy: "Copy",
    copied: "Copied",
    projectsSection: "Projects",
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
      title: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institution: "MEDAC",
      date: "2022-2024",
    },
    {
      title: "Técnico Superior en Educación y Control Ambiental",
      institution: "Universidad Laboral de Málaga",
      date: "2020-2022",
    },
    {
      title: "Técnico Superior en Gestión Forestal y del Medio Natural",
      institution: "Universidad Laboral de Málaga",
      date: "2018-2021",
    },
  ],
  en: [
    {
      title: "Higher Technician in Web Applications Development",
      institution: "MEDAC",
      date: "2022-2024",
    },
    {
      title: "Higher Technician in Environmental Education and Control",
      institution: "Universidad Laboral de Málaga",
      date: "2020-2022",
    },
    {
      title: "Higher Technician in Forestry and Environmental Management",
      institution: "Universidad Laboral de Málaga",
      date: "2018-2021",
    },
  ],
};

export const PROJECTS: Projects = {
  es: [
    {
      id:1,
      title: "Portfolio Web personal",
      image: "images/portfolio.webp",
      description: `Un pequeño portfolio donde, además de contaros un poco más sobre mí, muestro las tecnologías en las que tengo experiencia y los proyectos en los que he ido trabajando. 
        Destacar que, se usa LocalStorage para perdurar el estado de la aplicación y el estándar i18n para la disponibilidad de la página en Inglés y Español.`,
      technologies: ["Astro", "Vue", "TypeScript", "Tailwind"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Portfolio-web",
        pageLink: "",
      },
    },
    {
      id:2,
      title: "Tienda Online || Green Clothes ",
      image: "images/tienda.webp",
      description: `Un E-commerce especializado en la venta de ropa ecológica. En cuanto a sus características más destacables, encontramos un sistema de inicio de sesión y de registro de usuario, 
        un carrito con todos los pedidos añadidos... `,
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySql"],
      links: {
        githubLink: "",
        pageLink: "",
      },
    },
  ],
  en: [
    {
      id:1,
      title: "Personal Portfolio Web",
      image: "images/portfolio.webp",
      description: `A small portfolio where, besides telling you a little more about me, I show the technologies in which I have experience and the projects in which I have been working. 
        I would like to point out that LocalStorage is used to maintain the state of the application and the i18n standard for the availability of the page in English and Spanish.`,
      technologies: ["Astro", "Vue", "TypeScript", "Tailwind"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Portfolio-web",
        pageLink: "",
      },
    },
    {
      id:2,
      title: "Tienda Online || Green Clothes ",
      image: "images/tienda.webp",
      description:
        "Un E-commerce especializado en la venta de ropa ecológica. ",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySql"],
      links: {
        githubLink: "",
        pageLink: "",
      },
    },
  ],
};

export const languages: Lang = {
  es: "es",
  en: "en",
};
