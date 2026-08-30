import type { Ref } from 'vue';
import { onMounted, ref, watch } from 'vue';

export const enum Locale {
  EN = 'en',
  RU = 'ru',
}

const ALLOWED_LOCALES: string[] = [Locale.EN, Locale.RU];

const LOCAL_STORAGE_KEY = 'es-locale';

export function useLocale(locale: Ref<string>) {
  const preferredLocale = ref(Locale.EN);

  function setLocaleToLocalStorage(locale: string) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locale));
    } catch (e) {
      console.error('[ERROR] Failed to save locale settings. Details:', e);
    }
  }

  watch(locale, setLocaleToLocalStorage);

  function getLocaleFromLocaleStorage() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (!raw) {
        return Locale.EN;
      }

      const locale = JSON.parse(raw);

      if (!ALLOWED_LOCALES.includes(locale)) {
        return Locale.EN;
      }

      return locale;
    } catch {
      return Locale.EN;
    }
  }

  onMounted(() => {
    preferredLocale.value = getLocaleFromLocaleStorage();
    setLocaleToLocalStorage(preferredLocale.value);
  });

  return {
    preferredLocale,
  };
}
