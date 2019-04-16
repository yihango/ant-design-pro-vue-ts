<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import RouteView from '@/layouts/commons/route-view.vue';

  @Component({
    components: {
      RouteView
    },
  })
  export default class BlankLayout extends Vue {

    constructor() {
      super();
    }

  }
</script>

<style scoped>

</style>