import useLanguageStore from "@/store/useLanguage";
import type { Translations, Language } from "@/ i18n/types";
import translations from "@/ i18n";

export default function useTranslation(): { t: Translations; language: Language } {
  const { language } = useLanguageStore();
  const t = translations[language] ?? translations.es;

  return { t, language };
}
