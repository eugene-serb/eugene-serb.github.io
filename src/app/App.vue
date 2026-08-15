<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div :class="$style.root">
    <RouterView />
  </div>
</template>

<style lang="scss">
@use '@/shared/assets/styles/index.scss' as *;
</style>

<style module lang="scss">
.root {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: normal;
}
</style>
