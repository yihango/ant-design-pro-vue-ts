import '@babel/polyfill'; // ie polyfill
import Vue from 'vue';
import VueRouter from 'vue-router';
import {Store} from 'vuex';
// mock
import './mock';


import {VueAxios} from './utils/request'; // 请求
import appRouter from './router'; // 路由
import appStore from './store/'; // vuex store
import appBootstrap from './core/bootstrap'; // 启动器
import './core/use';
import './permission'; // 权限
import './utils/filter'; // 全局过滤
import App from './App.vue'; // 主页面


Vue.config.productionTip = false;


// 挂载使用 axios 做http请求库,调用方式 Vue.$http 或者 this.$http
Vue.use(VueAxios);


// 路由 和 vuex store 的类型转换
const router: VueRouter = appRouter;
const store: Store<any> = appStore;


// 初始化 app 容器的 Vue 对象
new Vue({
  router: router,
  store: store,
  created: appBootstrap,
  render: h => h(App)
}).$mount('#app');
