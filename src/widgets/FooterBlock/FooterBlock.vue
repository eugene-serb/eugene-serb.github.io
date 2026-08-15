<script setup lang="ts">
import { ROUTES } from '@/pages';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const currentYear = computed<number>(() => new Date().getFullYear());
</script>

<template>
  <div :class="$style.footer" data-id="footer-block">
    <span
      >© {{ currentYear }}
      <RouterLink :to="ROUTES.homepage.path" target="_self" translate="no">Eugene Serb</RouterLink>.
      Content licensed under
    </span>
    <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a>
    <br />
    <span class="annotation__text">This site does not track you or&nbsp;collect any data.</span>
  </div>
</template>

<style module lang="scss">
.footer {
  width: 100%;
  padding: 0 0 8px 0;
}
</style>
