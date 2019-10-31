<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script lang="ts">
  import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
  import {Component, Prop} from "vue-property-decorator";
  import AppDeviceEnquire from "@/shared/mixins/app-device-enquire";

  @Component({
    components: {},
  })
  export default class Liquid extends AppDeviceEnquire {
    @Prop({type: Number, default: 0})
    public height: number;
    @Prop({type: Number, default: 0})
    public width: number;

    locale = zhCN;

    constructor() {
      super();
    }

    mounted() {

    }
  }

  // export default {
  //   mixins: [AppDeviceEnquire],
  //   data () {
  //     return {
  //       locale: zhCN
  //     }
  //   },
  //   mounted () {
  //
  //   }
  // }
</script>
<style>
  #app {
    height: 100%;
  }
</style>
