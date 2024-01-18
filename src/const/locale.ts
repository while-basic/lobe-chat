import { Locales, normalizeLocale, supportLocales } from '@/locales/resources';

export const DEFAULT_LANG = 'en-US';
export const LOBE_LOCALE_COOKIE = 'LOBE_LOCALE';

/**
 * Check if the language is supported
 * @param locale
 */
export const isLocaleNotSupport = (locale: Locales) => {
  return normalizeLocale(locale) === DEFAULT_LANG || !supportLocales.includes(locale);
};
