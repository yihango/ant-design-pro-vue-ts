import Vue from 'vue';
import VueRouter from 'vue-router';
import { constantRouterMap } from '@/config/router.config';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => { y: 0 },
  routes: constantRouterMap,
});
