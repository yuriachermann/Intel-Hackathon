import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import es from './translations/es.json';
import de from './translations/de.json';
import pt from './translations/pt-br.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    es: es,
    de: de,
    pt: pt,
  }
}).catch((err) => {
  console.log('i18n initialization error', err);
});

export default i18n;