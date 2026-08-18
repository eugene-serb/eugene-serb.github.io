import type { MergeHead, UseHeadInput } from '@vueuse/head';

export const metaHomePage: UseHeadInput<MergeHead> = {
  title: 'Eugene Serb — Homepage',
  meta: [
    {
      name: 'keywords',
      content:
        'Eugene Serb, eugene-serb, eugene_serb, eugene.serb, Evgeniy Serb, Евгений Серб, Novorossiysk, Новороссийск, contacts, CV, resume, portfolio, repositories, services, coder, developer, software engineer, development, frontend, backend, fullstack, homepage',
    },
    {
      name: 'description',
      content:
        'Hi, friends! My name is Eugene Serb, and there is my personal page with my contact info, links, services, repositories and biography.',
    },
    {
      property: 'og:title',
      content: 'Eugene Serb — Homepage',
    },
    {
      property: 'og:description',
      content:
        'Hi, friends! My name is Eugene Serb, and there is my personal page with my contact info, links, services, repositories and biography.',
    },
    {
      property: 'og:url',
      content: 'https://eugene-serb.github.io/',
    },
    {
      name: 'twitter:title',
      content: 'Eugene Serb — Homepage',
    },
    {
      name: 'twitter:description',
      content:
        'Hi, friends! My name is Eugene Serb, and there is my personal page with my contact info, links, services, repositories and biography.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://eugene-serb.github.io/',
    },
  ],
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: [
    { '@value': 'Eugene Serb', '@language': 'en' },
    { '@value': 'Евгений Серб', '@language': 'ru' },
  ],
  jobTitle: 'Senior Software Developer',
  url: 'https://eugene-serb.github.io/',
  email: 'mailto:eugene.serb@gmail.com',
  sameAs: [
    'https://github.com/eugene-serb',
    'https://www.npmjs.com/~eugene-serb',
    'https://www.linkedin.com/in/eugene-serb/',
    'https://t.me/eugene_serb',
    'https://x.com/EugeneSerb',
    'https://vk.ru/eugene.serb',
  ],
};
