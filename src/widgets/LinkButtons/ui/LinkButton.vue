<script setup lang="ts">
defineProps<{
  link: string;
}>();
</script>

<template>
  <a :href="link" target="_blank" :class="$style.button">
    <div :class="$style.button__wrapper">
      <div :class="$style.button__iconWrapper">
        <slot name="icon" />
      </div>
      <div :class="$style.button__text">
        <slot name="default" />
      </div>
    </div>
  </a>
</template>

<style module lang="scss">
.button {
  width: 100%;
  height: 50px;
  border: var(--number-border-size) solid var(--color-border);
  border-radius: 8px;
  padding: 8px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0;

  @media only screen and (min-width: 320px) {
    justify-content: center;
  }

  background-color: var(--color-surface);
  overflow: hidden;

  text-decoration: none;
  transition: all 0.4s ease;

  &__wrapper {
    width: 100%;
    overflow: visible;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    @media only screen and (min-width: 320px) {
      width: 30%;
    }

    @media only screen and (min-width: 440px) {
      width: 20%;
    }
  }

  &__iconWrapper {
    width: 32px;
    height: 32px;
    overflow: visible;

    font-size: 24px;
    line-height: 24px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
  }

  &__text {
    font-size: 16px;
    color: var(--color-text-primary);
  }

  &:hover {
    border: var(--number-border-size) solid var(--color-primary-hover);
    background-color: var(--color-primary-light);

    transition: all 0.2s ease;
    transform: translateX(4px);
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
}
</style>
