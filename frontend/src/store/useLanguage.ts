import type { Language } from "@/ i18n/types";
import { create } from "zustand";
import { persist } from 'zustand/middleware'

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}


const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (lang) => set({ language: lang })
    }),
    { name: 'language' }
  ),
)


export default useLanguageStore