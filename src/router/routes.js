export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(`@/views/Index.vue`),
    meta: {},
  },
  {
    path: '/nested',
    name: 'nested',
    component: () => import(`@/views/Nested.vue`),
    meta: {},
  },
];
