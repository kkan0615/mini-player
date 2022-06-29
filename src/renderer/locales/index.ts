import { createI18n } from 'vue-i18n'
import { enDictionary } from './langs/en'

export const DEFAULT_FALLBACK_LOCALE = 'en'

const messages = {
  /* english */
  en: enDictionary,
  // @TODO: Add korean and chinese
}

export const i18n = createI18n({
  locale: DEFAULT_FALLBACK_LOCALE,
  fallbackLocale: DEFAULT_FALLBACK_LOCALE,
  messages,
})
