import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    nav: {
      projects: "Projects",
      stages: "Internships",
      about: "About",
      contact: "Contact",
      certification: "Certifications",
      resume: "Resume",
      toggle: "FR",
    },
    sections: {
      projects: "Projects",
      stages: "Internships",
      about: "About Me",
      certifications: "Certifications",
      contact: "Get In Touch",
    },
    hero: {
      greeting: "Hi, I'm ZAKI EL IDRISSI ABDALLAH.",
      roles: {
        fullstack: "A Full-Stack Developer.",
        creative: "A Creative Thinker.",
        problem: "A problem solver.",
        innovator: "A Digital Innovator.",
      },
      scrollDown: "Scroll down",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    contact: {
      email: "zakielidrissiabdallah@gmail.com",
      copied: "Copied!",
      sendEmail: "Send Email",
    },
    about: {
      intro: "Hi! My name is <strong>ZAKI EL IDRISSI ABDALLAH</strong>. originally from Morocco. I am passionate about technology and web development, constantly seeking to learn and grow in this ever-evolving field..",
      experience: "Through my journey, I have gained valuable experience by working on diverse projects, which have sharpened my skills in problem-solving, adaptability, and communication. I am dedicated to delivering high-quality solutions and always strive to enhance user experiences through innovative designs and efficient code.",
      closing: "I'm always excited about new opportunities and collaborations. Feel free to look around my portfolio and reach out – let's create something great together!",
      skillsTitle: "I have become confident using the following technologies:",
    },
    stages: {
      bcskills: {
        title: "BCSkills — Safi",
        description: "Internship completed at <strong>BCSkills</strong> in <strong>Safi</strong>. Main responsibilities: contributing to application development, UI integration, and collaborating with the team to improve code quality and deliverables.",
      },
      norsys: {
        title: "NORSYS Afrique — Marrakech",
        description: "Internship completed at <strong>NORSYS Afrique</strong> in <strong>Marrakech</strong>. Main responsibilities: contributing to web projects, implementing features, following best practices, and working in an agile environment.",
      },
    },
  },
  fr: {
    nav: {
      projects: "Projets",
      stages: "Stages",
      about: "À propos",
      contact: "Contact",
      certification: "Certifications",
      resume: "CV",
      toggle: "EN",
    },
    sections: {
      projects: "Projets",
      stages: "Stages",
      about: "À propos de moi",
      certifications: "Certifications",
      contact: "Contactez-moi",
    },
    hero: {
      greeting: "Salut, je suis ZAKI EL IDRISSI ABDALLAH.",
      roles: {
        fullstack: "Un développeur Full-Stack.",
        creative: "Un penseur créatif.",
        problem: "Un résolveur de problèmes.",
        innovator: "Un innovateur numérique.",
      },
      scrollDown: "Défiler vers le bas",
      viewWork: "Voir mes projets",
      getInTouch: "Me contacter",
    },
    contact: {
      email: "zakielidrissiabdallah@gmail.com",
      copied: "Copié !",
      sendEmail: "Envoyer un email",
    },
    about: {
      intro: "Salut ! Je m'appelle <strong>ZAKI EL IDRISSI ABDALLAH</strong>. Originaire du Maroc. Je suis passionné par la technologie et le développement web, cherchant constamment à apprendre et à grandir dans ce domaine en constante évolution.",
      experience: "À travers mon parcours, j'ai acquis une expérience précieuse en travaillant sur divers projets, ce qui a affiné mes compétences en résolution de problèmes, adaptabilité et communication. Je suis dédié à fournir des solutions de haute qualité et je m'efforce toujours d'améliorer les expériences utilisateur grâce à des designs innovants et un code efficace.",
      closing: "Je suis toujours enthousiaste à propos de nouvelles opportunités et collaborations. N'hésitez pas à parcourir mon portfolio et à me contacter – créons quelque chose de grand ensemble !",
      skillsTitle: "J'ai acquis de la confiance en utilisant les technologies suivantes :",
    },
    stages: {
      bcskills: {
        title: "BCSkills — Safi",
        description: "Stage réalisé chez <strong>BCSkills</strong> à <strong>Safi</strong>. Missions principales : participation au développement d'applications, intégration d'interfaces et collaboration avec l'équipe pour améliorer la qualité du code et des livrables.",
      },
      norsys: {
        title: "NORSYS Afrique — Marrakech",
        description: "Stage réalisé chez <strong>NORSYS Afrique</strong> à <strong>Marrakech</strong>. Missions principales : contribution à des projets web, mise en place de fonctionnalités, bonnes pratiques et travail en environnement agile.",
      },
    },
  },
};

const I18nContext = createContext({ lang: "en", t: (k) => k, toggle: () => {} });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = window?.localStorage?.getItem("lang");
      return saved || "en";
    } catch (_) {
      return "en";
    }
  });

  useEffect(() => {
    try {
      window?.localStorage?.setItem("lang", lang);
    } catch (_) {
      // ignore storage errors
    }
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "en" ? "fr" : "en"));

  const t = useMemo(() => {
    const dict = translations[lang] || translations.en;
    return (key) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        cur = cur?.[p];
        if (cur == null) return key;
      }
      return cur;
    };
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}


