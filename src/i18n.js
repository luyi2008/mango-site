import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import zh from './locales/zh.json'
import en from './locales/en.json'

export const languages = ['zh', 'en']

export function documentLang(language) {
  return language === 'en' ? 'en' : 'zh-CN'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    fallbackLng: 'zh',
    supportedLngs: languages,
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    initImmediate: false,
    react: { useSuspense: false },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'mango-lang',
    },
  })

export default i18n
