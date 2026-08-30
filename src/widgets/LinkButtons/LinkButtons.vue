<script setup lang="ts">
import TelegramIcon from '@/shared/assets/icons/telegram.svg';
import GithubIcon from '@/shared/assets/icons/github.svg';
import NpmIcon from '@/shared/assets/icons/npm.svg';
import LinkedInIcon from '@/shared/assets/icons/linkedin.svg';
import WaveloversIcon from '@/shared/assets/icons/wavelovers.svg';
import { LinkButton } from './ui';
</script>

<template>
  <section :class="$style.buttons" data-id="link-buttons">
    <LinkButton link="https://t.me/eugene_serb">
      <template #icon>
        <TelegramIcon :class="$style.telegramIcon" />
      </template>
      <template #default>Telegram</template>
    </LinkButton>
    <LinkButton link="https://github.com/eugene-serb">
      <template #icon>
        <GithubIcon :class="$style.githubIcon" />
      </template>
      <template #default>GitHub</template>
    </LinkButton>
    <LinkButton link="https://www.npmjs.com/~eugene-serb">
      <template #icon>
        <NpmIcon :class="$style.npmIcon" />
      </template>
      <template #default>npm</template>
    </LinkButton>
    <LinkButton link="https://www.linkedin.com/in/eugene-serb/">
      <template #icon>
        <LinkedInIcon :class="$style.linkedinIcon" />
      </template>
      <template #default>LinkedIn</template>
    </LinkButton>
    <LinkButton link="https://wavelovers.ru/">
      <template #icon>
        <WaveloversIcon :class="$style.waveloversIcon" />
      </template>
      <template #default>Wavelovers</template>
    </LinkButton>
  </section>
</template>

<style module lang="scss">
.buttons {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

.linkedinIcon {
  width: 100%;
  color: var(--color-linkedin);
}

.telegramIcon {
  width: 100%;
  color: var(--color-telegram);
}

.npmIcon {
  width: 100%;
  color: var(--color-npm);
}

.githubIcon {
  width: 100%;
  color: var(--color-github);
}

.waveloversIcon {
  width: 100%;
  color: var(--color-wavelovers);
  padding: 4px;
}
</style>
