<script setup lang="ts">
import { FooterBlock, HeaderBlock } from '@/widgets';
import { RouterView } from 'vue-router';
</script>

<template>
  <div :class="$style.layout">
    <div :class="$style.top">
      <HeaderBlock />
      <RouterView />
    </div>
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

.top {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
}
</style>
