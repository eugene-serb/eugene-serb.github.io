<script setup lang="ts">
import AvatarImgSrc from '@/shared/assets/images/avatar.jpg';
</script>

<template>
  <div :class="$style.hero" data-id="hero-block">
    <img :src="AvatarImgSrc" :class="$style.avatar" />

    <div :class="$style.bio">
      <h2 :class="$style.bio__name">Eugene Serb</h2>
      <h3 :class="$style.bio__description">Senior Software Engineer</h3>
    </div>
  </div>
</template>

<style module lang="scss">
.hero {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  aspect-ratio: 1 / 1;

  border: 4px solid var(--color-border);
  border-radius: 50%;
}

.bio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  &__name {
    font-size: var(--h2-size);
    margin-top: var(--space-lg);
  }

  &__description {
    margin-top: var(--space-md);
    font-size: var(--h3-size);
    font-weight: normal;
  }
}
</style>
