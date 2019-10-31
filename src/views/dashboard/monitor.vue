<template>
  <div>
    Monitor
  </div>
</template>

<script lang="ts">
  import {Component } from 'vue-property-decorator';
  import MonitorComponent from './monitor.component';

  @Component({
    components: {},
  })
  export  default  class Monitor extends MonitorComponent {
    constructor(){
      super();
    }
  }


</script>

<style scoped lang="less">
@import "./monitor";
</style>
