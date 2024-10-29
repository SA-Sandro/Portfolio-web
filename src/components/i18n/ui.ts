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
      "Desarrollador de Aplicaciones Web con experiencia en tecnologías como Vue, TypeScript, PHP, Symfony, MySql, React, etc. Comprometido con el aprendizaje continuo y la creación de soluciones eficientes.",
    viewCV: "VER CV",
    contactButton: "CONTACTO",
    aboutTitle: "Sobre mí",
    aboutDescr: `
      <p>
      <span class="text-[#235da4] dark:text-yellow-200/90 text-lg">Ciencia</span
      > y <span class="text-[#235da4] dark:text-yellow-200/90 text-lg">Tecnología</span>
      son dos palabras que me definen a la perfección. Por un lado, soy un gran apasionado
      de las ciencias naturales, al que le encanta explorar la naturaleza, identificando
      animales y plantas en cada salida al campo, y, por otro lado, también me fascina la
      tecnología y el desarrollo de software.
    </p>
    <p class="mt-2">
      Antes de descubrir el mundo del desarrollo, siempre soñé con dedicarme a
      la <span class="text-[#235da4] dark:text-yellow-200/90 text-lg"
        >divulgación</span> e <span class="text-[#235da4] dark:text-yellow-200/90 text-lg"
        >investigación</span> de la fauna, ya que era lo que más me
      llenaba. Sin embargo, al adentrarme en el sector tecnológico, supe que
      quería enfocar mi carrera en este ámbito. La frase "Si puedes soñarlo, lo
      puedes programar" me impactó profundamente y fue lo que despertó en mí un
      amor inmediato por la programación.
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
    experienced: "Con experiencia",
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
      "Web Application Developer with experience in technologies like Vue, TypeScript, PHP, Symfony, MySql, React, etc. Committed to continuous learning and creating efficient solutions.",
    viewCV: "VIEW CV",
    contactButton: "CONTACT",
    aboutTitle: "About me",
    aboutDescr: `
      <p> <span class="text-[#235da4] dark:text-yellow-200/90 text-lg">Science</span > and <span class="text-[#235da4] dark:text-yellow-200/90 text-lg">Technology</span> 
      are two words that define me perfectly. On one hand, I am deeply passionate about natural sciences, and I love exploring nature, identifying animals and plants on every 
      outdoor adventure. On the other hand, I am also fascinated by technology and software development. </p> <p class="mt-2"> Before discovering the world of development, 
      I always dreamed of dedicating myself to the <span class="text-[#235da4] dark:text-yellow-200/90 text-lg"
        >dissemination</span> and <span class="text-[#235da4] dark:text-yellow-200/90 text-lg"
        >research</span> of wildlife, as it was what fulfilled me the most. However, as I delved into the tech sector, 
      I knew that I wanted to focus my career in this field. The phrase "If you can dream it, you can program it" profoundly impacted me and sparked an immediate love 
      for programming within me. </p>
      `,
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
    experienced: "Experienced",
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
      id: 1,
      title: "Portfolio Web personal",
      image: "images/portfolio.webp",
      description: `Un pequeño portfolio donde, además de contaros un poco más sobre mí, muestro las tecnologías en las que tengo experiencia y los proyectos en los que he ido trabajando. 
        Destacar que, se usa LocalStorage para perdurar el estado de la aplicación y el estándar i18n para la disponibilidad de la página en Inglés y Español.`,
      technologies: ["Astro", "Vue", "TypeScript", "Tailwind"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Portfolio-web",
        pageLink: "https://sandro-suarez-portfolio.netlify.app",
      },
    },
    {
      id: 2,
      title: "Innovadent || Clínica Dental",
      image: "images/innovadent.webp",
      description: `Innovadent es una clínica dental comprometida con la prestación de servicios dentales de alta calidad adaptados a las necesidades únicas de cada paciente.
       Con su propio sitio web, Innovadent permite a los clientes concertar citas cómodamente en línea.`,
      technologies: ["React", "TypeScript", "Tailwind", "Nextjs", "PostgreSQL"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Innovadent",
        pageLink: "https://innovadent.vercel.app",
      },
    },
    {
      id: 3,
      title: "Katapiercing: Professional Body Piercing",
      image: "images/katapiercing.webp",
      description: `Este sitio web es una landing page diseñada para un pequeño negocio de perforación de piercings, gestionado por mi cliente. 
      Su objetivo es presentar el trabajo de Kata y destacar los distintos tipos de piercings que ofrece a sus clientes.`,
      technologies: ["Astro", "Tailwind", "TypeScript"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Piercing_webpage",
        pageLink: "https://katapiercing.netlify.app/",
      },
    },
    {
      id: 4,
      title: "Nature Register",
      image: "images/Nature_Register.webp",
      description: `Nature Register consiste en una aplicación de escritorio desarrollada en Java que te permite almacenar
      y organizar todas tus observaciones de fauna y flora en una base de datos, para luego poder visualizarlas y filtrarlas 
      según su nombre científico, familia, fecha de observación, localidad, etc.`,
      technologies: ["Java", "Sqlite"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Nature-Register",
        pageLink: "",
      },
    },
    {
      id: 5,
      title: "Green-Clothes: Tienda Online de ropa ecológica",
      image: "images/Ecommerce.webp",
      description: `Green-Clothes se trata de una página web dedicada a la venta de ropas ecológicas, es decir,
      ropas que son fabricadas utilizando materiales y procesos eco-friendly.`,
      technologies: ["PHP", "MySql", "Bootstrap"],
      links: {
        githubLink: "https://github.https://github.com/SA-Sandro/Tienda-Online",
        pageLink: "",
      },
    },
  ],
  en: [
    {
      id: 1,
      title: "Personal Portfolio Web",
      image: "images/portfolio.webp",
      description: `A small portfolio where, besides telling you a little more about me, I show the technologies in which I have experience and the projects in which I have been working. 
        I would like to point out that LocalStorage is used to maintain the state of the application and the i18n standard for the availability of the page in English and Spanish.`,
      technologies: ["Astro", "Vue", "TypeScript", "Tailwind"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Portfolio-web",
        pageLink: "https://sandro-suarez-portfolio.netlify.app",
      },
    },
    {
      id: 2,
      title: "Innovadent: A dental clinic website",
      image: "images/innovadent.webp",
      description: `Innovadent is a dental clinic committed to providing high-quality dental services tailored to each patient's unique needs. 
        With its own website, Innovadent allows clients to conveniently schedule appointments online.`,
      technologies: ["React", "TypeScript", "Tailwind", "Nextjs", "PostgreSQL"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Innovadent",
        pageLink: "https://innovadent.vercel.app",
      },
    },
    {
      id: 3,
      title: "Katapiercing: Professional Body Piercing",
      image: "images/katapiercing.webp",
      description: `This website is a landing page designed for a small piercing business managed by my client. 
      Its purpose is to showcase Kata's work and highlight the various types of piercings she offers to her clients.`,
      technologies: ["Astro", "Tailwind", "TypeScript"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Piercing_webpage",
        pageLink: "https://katapiercing.netlify.app/",
      },
    },
    {
      id: 4,
      title: "Nature Register",
      image: "images/Nature_Register.webp",
      description: `Nature Register is a desktop application developed in Java that allows you to store and organize
      all your observations of fauna and flora in a database, enabling you to view and filter them by scientific name,
      family, date of observation, location, and more.`,
      technologies: ["Java", "Sqlite"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Nature-Register",
        pageLink: "",
      },
    },
    {
      id: 5,
      title: "Green-Clothes: Eco-Friendly Clothing Ecommerce",
      image: "images/Ecommerce.webp",
      description: `Green-Clothes is a website dedicated to selling eco-friendly clothing,
      meaning garments crafted using sustainable materials and environmentally friendly processes.`,
      technologies: ["PHP", "MySql", "Bootstrap"],
      links: {
        githubLink: "https://github.com/SA-Sandro/Tienda-Online",
        pageLink: "",
      },
    },
  ],
};

export const languages: Lang = {
  es: "es",
  en: "en",
};
