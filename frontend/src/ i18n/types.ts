export type Language = 'es' | 'en';

export type Translations = {
  navbar: {
    projects: string;
  }
  home: {
    title: string;
    description: string;
    button: string
  }
  project: {
    title: string;
    description: string
  }
  skills: {
    description: string
    languages: string
    database: string
    versionControl: string
    others: string
  },
  education: {
    title: string,
    desarrolloWeb: string,
    python: string
    certificates: string
  }
};
