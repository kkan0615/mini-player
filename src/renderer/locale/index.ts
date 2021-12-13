import { createI18n } from 'vue-i18n'
import { koreanDictionary } from './langs/ko'
import { englishDictionary } from './langs/en'
import { getCurrentLanguage } from '@/utils/commons/lang'

/* Default fallback locale */
export const DEFAULT_FALLBACK_LOCALE = 'en'

const messages = {
  /* korean */
  ko: koreanDictionary,
  /* english */
  en: englishDictionary,
}

export const i18n = createI18n({
  // legacy: false,
  locale: getCurrentLanguage(), // set locale
  fallbackLocale: DEFAULT_FALLBACK_LOCALE, // set fallback locale
  messages, // set locale messages
})

export default i18n
