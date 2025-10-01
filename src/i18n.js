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


