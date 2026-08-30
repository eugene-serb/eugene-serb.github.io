import { createI18n } from 'vue-i18n';

import en from '@/shared/assets/locales/en.json';
import ru from '@/shared/assets/locales/ru.json';
import { Locale } from '@/shared/use';

export const i18n = createI18n({
  legacy: false,
  locale: Locale.EN,
  fallbackLocale: Locale.EN,
  messages: {
    en,
    ru,
  },
  globalInjection: true,
});
