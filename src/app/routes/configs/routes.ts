import { ROUTES } from '@/pages';

export const routes = [
  {
    path: ROUTES.root.path,
    name: ROUTES.root.name,
    component: () => import('@/pages/LayoutDefault/LayoutDefault.vue'),
    children: [
      {
        path: ROUTES.homepage.path,
        name: ROUTES.homepage.name,
        component: () => import('@/pages/HomePage/HomePage.vue'),
      },
      {
        path: ROUTES.notFound.path,
        name: ROUTES.notFound.name,
        component: () => import('@/pages/NotFound/NotFound.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: ROUTES.notFound.path,
  },
];
