// 参照文档: https://cn.vuejs.org/v2/guide/typescript.html

// 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue';

/**
 * 自定义声明补充到 types/vue.d.ts 中
 */
declare module 'vue/types/vue' {
  /**
   * 声明为 Vue实例对象 增加的内容;
   * 调用方式: let vm = new Vue({ // ... });
   *          vm.xxx
   */
  interface Vue {

  }

  /**
   * 声明为 Vue 增加的内容;
   * 调用方式: Vue.xxx
   */
  interface VueConstructor {
    $ls: VueLs;
  }
}

/**
 * 自定义内容到 Vue 对象的组件选项中
 */
declare module 'vue/types/options' {
  /**
   * 声明自定义组件选项
   */
  interface ComponentOptions<V extends Vue> {

  }
}
