import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LangDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  /// plugins
  .use(initReactI18next)
  .use(LangDetector)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "ru",
  });
