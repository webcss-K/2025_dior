import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
import langKo from './ko';
import langEn from './en';
 
const resource = {
  ko: {
    translation: langKo
  },
  en: {
    translation: langEn
  }
};

const search = window.location.search;
const params = new URLSearchParams(search);
const lang = params.get('lang');

i18n
  .use(initReactI18next)
  .init({
    resources: resource,
    lng: 'ko',
    fallbackLng: {
      default:['ko'],
      'en':['en']
    },
    debug: true,
    defaultNS: 'translation',
    ns: 'translation',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
  });
  i18n.changeLanguage(lang?lang:'ko'); // ?lang=ko 방식으로 언어 변경

export default i18n;