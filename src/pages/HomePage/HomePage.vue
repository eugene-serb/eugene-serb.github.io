<script setup lang="ts">
import { useHead, useHeadSafe } from '@vueuse/head';
import { HeroBlock, LinkButtons } from '@/widgets';
import { metaHomePage, personSchema } from './const';

useHead(metaHomePage);
useHeadSafe({
  script: [
    {
      type: 'application/ld+json',
      textContent: personSchema,
    },
  ],
});
</script>

<template>
  <main :class="$style.page">
    <h1 class="visually-hidden">{{ $t('pages.HomePage.H1') }}</h1>

    <div :class="$style.wrapper">
      <HeroBlock />
      <LinkButtons />
    </div>
  </main>
</template>

<style module lang="scss">
.page {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
}

.wrapper {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>
