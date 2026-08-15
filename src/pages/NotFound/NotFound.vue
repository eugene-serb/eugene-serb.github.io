<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ROUTES } from '../routes';
</script>

<template>
  <div :class="$style.page">
    <h1 class="visually-hidden">Eugene Serb — 404</h1>

    <div :class="$style.banner">
      <h1>404</h1>
      <p>
        <span>File not found. Please, go to the </span>
        <RouterLink :to="ROUTES.homepage.path" target="_self">homepage</RouterLink>
      </p>
    </div>
  </div>
</template>

<style module lang="scss">
.page {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  margin-top: 32px;
}

.banner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}
</style>
