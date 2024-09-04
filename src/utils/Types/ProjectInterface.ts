interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: Array<string>;
  links: Link;
}

interface Link {
  githubLink: string;
  pageLink: string;
}

export default interface Projects {
  es: Project[];
  en: Project[];
}
