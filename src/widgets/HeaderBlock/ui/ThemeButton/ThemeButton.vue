<script setup lang="ts">
import LightModeAutoIcon from '@/shared/assets/icons/light-mode-auto.svg';
import LightModeIcon from '@/shared/assets/icons/light-mode.svg';
import DarkModeAutoIcon from '@/shared/assets/icons/dark-mode-auto.svg';
import DarkModeIcon from '@/shared/assets/icons/dark-mode.svg';
import { computed, onMounted } from 'vue';
import { Theme, useTheme } from '@/shared/use';

const { preferredTheme, currentTheme, setTheme, changeTheme } = useTheme();

const themeIcon = computed(() => {
  if (currentTheme.value === Theme.SYSTEM) {
    if (preferredTheme.value === Theme.LIGHT) {
      return LightModeAutoIcon;
    } else {
      return DarkModeAutoIcon;
    }
  } else if (currentTheme.value === Theme.LIGHT) {
    return LightModeIcon;
  } else if (currentTheme.value === Theme.DARK) {
    return DarkModeIcon;
  } else {
    return LightModeIcon;
  }
});

onMounted(() => {
  setTheme();
});
</script>

<template>
  <component :is="themeIcon" @click="changeTheme" />
</template>
