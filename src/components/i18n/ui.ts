import type Lang from "@/utils/Types/LangInterface";

export const ui = {
  es: {
    home: "Inicio",
    about: "Acerca de",
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
  },
} as const;

export const languages: Lang = {
  es: "es",
  en: "en",
};
