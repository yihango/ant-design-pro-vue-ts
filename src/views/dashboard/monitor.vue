<template>
  <div>
    Monitor
  </div>
</template>

<script lang="ts">
  import {Component } from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import MonitorComponent from './monitor.component';

  @Component({
    components: {},
  })
  export  default  class Monitor extends mixins(MonitorComponent) {
    constructor(){
      super();
    }
  }


</script>

<style scoped lang="less">
@import "./monitor";
</style>
