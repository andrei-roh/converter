import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Russian from './translations/Russian.json';
import English from './translations/English.json';
import Belarusian from './translations/Belarusian.json';

const resources = {
  en: {
    translation: English,
  },
  ru: {
    translation: Russian,
  },
  be: {
    translation: Belarusian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'be',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
