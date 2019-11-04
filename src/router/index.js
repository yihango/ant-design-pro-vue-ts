import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

// 
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.goto = function (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  } else {
    return originalPush.call(this, location, () => {
      console.log('vue-router push success');
    }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => { y: 0 },
  routes: constantRouterMap
})
