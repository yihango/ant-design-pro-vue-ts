import Vue from 'vue';

/** 增加 Vue 下默认没有的内容 */
declare module 'vue/types/vue' {
  interface Vue {
    $ls: any;
  }
}