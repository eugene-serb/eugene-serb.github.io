<script setup lang="ts">
import { ROUTES } from '@/pages';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const currentYear = computed<number>(() => new Date().getFullYear());
</script>

<template>
  <footer :class="$style.footer" data-id="footer-block">
    <span
      >© {{ currentYear }}
      <RouterLink :to="ROUTES.homepage.path" target="_self" translate="no">{{
        $t('widgets.Footer.name')
      }}</RouterLink
      >.
      {{ $t('widgets.Footer.license') }}
    </span>
    <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"
      >CC&nbsp;BY&#8209;NC&#8209;ND&nbsp;4.0</a
    >
    <br />
    <span class="annotation__text">{{ $t('widgets.Footer.analytics') }}</span>
  </footer>
</template>

<style module lang="scss">
.footer {
  width: 100%;
  padding: 0 0 8px 0;
}
</style>
