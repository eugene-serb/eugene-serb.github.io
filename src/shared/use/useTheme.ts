import { onMounted, onUnmounted, ref, watch } from 'vue';

export const enum Theme {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
}

type PreferredTheme = Extract<Theme, 'light' | 'dark'>;

const ALL_THEMES: string[] = [Theme.SYSTEM, Theme.DARK, Theme.LIGHT];

const NEXT_THEME_BY_PREVIOUS: Record<Theme, Theme> = {
  [Theme.SYSTEM]: Theme.DARK,
  [Theme.DARK]: Theme.LIGHT,
  [Theme.LIGHT]: Theme.SYSTEM,
};

const LOCAL_STORAGE_KEY = 'es-theme';

export function useTheme() {
  const preferredTheme = ref<PreferredTheme>(Theme.LIGHT);

  function getThemeFromLocalStorage() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (!raw) {
        return Theme.SYSTEM;
      }

      const theme = JSON.parse(raw);

      if (!theme || typeof theme !== 'string' || !ALL_THEMES.includes(theme)) {
        return Theme.SYSTEM;
      }

      return theme as Theme;
    } catch {
      return Theme.SYSTEM;
    }
  }

  const currentTheme = ref(Theme.SYSTEM);

  function setThemeToLocalStorage(theme: Theme) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme));
    } catch (e) {
      console.error('[ERROR] Failed to save color scheme settings. Details:', e);
    }
  }

  watch(currentTheme, setThemeToLocalStorage);

  function setNextTheme() {
    currentTheme.value = NEXT_THEME_BY_PREVIOUS[currentTheme.value];
  }

  function setTheme() {
    const htmlEl = document.querySelector('html');
    const metaEl: HTMLMetaElement | null = document.querySelector('meta[name="color-scheme"]');

    if (!htmlEl || !metaEl) {
      return;
    }

    document.documentElement.dataset.theme = currentTheme.value;
    metaEl.content = currentTheme.value === Theme.SYSTEM ? 'light dark' : currentTheme.value;
    htmlEl.style.colorScheme = currentTheme.value === Theme.SYSTEM ? '' : currentTheme.value;
  }

  function changeTheme() {
    setNextTheme();
    setTheme();
  }

  const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');

  function handleThemeChange(event: MediaQueryListEvent) {
    if (event.matches) {
      preferredTheme.value = Theme.DARK;
    } else {
      preferredTheme.value = Theme.LIGHT;
    }
  }

  onMounted(() => {
    currentTheme.value = getThemeFromLocalStorage();
    setThemeToLocalStorage(currentTheme.value);

    darkModeMedia.addEventListener('change', handleThemeChange);
  });

  onUnmounted(() => {
    darkModeMedia.removeEventListener('change', handleThemeChange);
  });

  return {
    preferredTheme,
    currentTheme,
    setNextTheme,
    setTheme,
    changeTheme,
  };
}
