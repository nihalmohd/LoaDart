import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Enables loading translations from external files
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Connects i18next with react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if the user's language is unavailable
    supportedLngs: ['en', 'hi', 'kn', 'te', 'ta', 'ml', 'bn'], // Supported languages
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'querystring', 'navigator'], // Language detection priority
      caches: ['localStorage', 'cookie'], // Cache user language in localStorage and cookies
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: true, // Use React.Suspense for lazy loading translations
      wait: true, // Wait for translations to load before rendering
    },
    debug: false, // Set to true to debug language detection or translation loading
    preload: ['en'], // Preload the default language
  });

export default i18n;
