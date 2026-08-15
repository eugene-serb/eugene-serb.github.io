<script setup lang="ts">
import { FooterBlock } from '@/widgets';
import { RouterView } from 'vue-router';
</script>

<template>
  <div :class="$style.layout">
    <RouterView />
    <FooterBlock />
  </div>
</template>

<style module lang="scss">
.layout {
  width: 100%;
  max-width: 640px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;
}
</style>
