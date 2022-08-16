import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const lngs = {
    "es-ES": { nativeName: "Español" },
    "de-DE": { nativeName: "Deutsch" },
    "fr-FR": { nativeName: "Français" },
    "en-EN": { nativeName: "English" },
  };
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(lngs).map((lng) => (
        <button
          className="btn btn-secondary mt-3"
          style={{ float: "right" }}
          type="submit"
          key={lng}
          onClick={() => {
            i18n.changeLanguage(lng);
          }}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </>
  );
};

export default LanguageSwitcher;
