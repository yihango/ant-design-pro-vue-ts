<template>
  <div>
    <h1 class="demo">DemoComponent</h1>
    <h3>{{myName}}</h3>
  </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import DemoComponent from "./demo.component";

  @Component({
    components: {},
  })
  export default class Demo extends DemoComponent {
    constructor() {
      super();
    }
  }
</script>

<style scoped lang="less">
  @import './demo';
</style>