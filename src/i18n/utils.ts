import { translations, defaultLang } from "./translations";

export type KnownLocales = keyof typeof translations;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as KnownLocales;
  return defaultLang;
}

export function useTranslations(lang: KnownLocales) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}
