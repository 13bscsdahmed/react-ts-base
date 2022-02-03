import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_EN } from './en/translations';
import { TRANSLATIONS_FR } from './fr/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      fr: {
        translation: TRANSLATIONS_FR
      },
    }
  });

i18n.changeLanguage('en');