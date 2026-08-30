<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LanguageIcon from '@/shared/assets/icons/language.svg';
import { ThemeButton } from './ui/ThemeButton';
import { onMounted } from 'vue';
import { Locale, useLocale } from '@/shared/use';

const { locale } = useI18n();
const { preferredLocale } = useLocale(locale);

function changeLanguage() {
  locale.value = locale.value === Locale.EN ? Locale.RU : Locale.EN;
}

onMounted(() => {
  locale.value = preferredLocale.value;
});
</script>

<template>
  <header :class="$style.header" data-id="header-block">
    <div :class="$style.rightMenu">
      <div :class="$style.iconWrapper">
        <ThemeButton :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper">
        <LanguageIcon :class="$style.icon" @click="changeLanguage" />
      </div>
    </div>
  </header>
</template>

<style module lang="scss">
.header {
  width: 100%;
  margin: 8px 0 0 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.rightMenu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}

.iconWrapper {
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.icon {
  cursor: pointer;
  color: var(--color-text-tertiary);
  transition: all 0.4s ease;

  &:hover {
    color: var(--color-primary);
    transition: all 0.2s ease;
  }
}
</style>
