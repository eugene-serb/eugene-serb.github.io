<script setup lang="ts">
import TelegramIcon from '@/shared/assets/icons/telegram.svg';
import GithubIcon from '@/shared/assets/icons/github.svg';
import NpmIcon from '@/shared/assets/icons/npm.svg';
import LinkedInIcon from '@/shared/assets/icons/linkedin.svg';
import WaveloversIcon from '@/shared/assets/icons/wavelovers.svg';
import { LinkButton } from './ui';
</script>

<template>
  <div :class="$style.buttons" data-id="link-buttons">
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
  </div>
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
  color: #0a66c2;
}

.telegramIcon {
  width: 100%;
  color: #29a9eb;
}

.npmIcon {
  width: 100%;
  color: #cb3837;
}

.githubIcon {
  width: 100%;
  color: #1f2328;

  @media (prefers-color-scheme: dark) {
    color: #f0f6fc;
  }
}

.waveloversIcon {
  width: 100%;
  color: #aa8dd8;
  padding: 4px;
}
</style>
