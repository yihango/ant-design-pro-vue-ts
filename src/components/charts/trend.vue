<template>
  <div class="chart-trend">
    {{ term }}
    <span>{{ rate }}%</span>
    <span :class="['trend-icon', trend]"><a-icon :type="'caret-' + trend"/></span>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class Trend extends Vue {
    @Prop({type: String, default: 0, required: true})
    public term: string;
    @Prop({type: Number, default: null})
    public percentage: number;
    @Prop({type: Boolean, default: null})
    public type: boolean;
    @Prop({type: Number, default: 0})
    public target: number;
    @Prop({type: Number, default: 0})
    public value: number;
    @Prop({type: Number, default: 2})
    public fixed: number;

    public trend: any = this.type && "up" || "down";
    public rate: any = this.percentage;

    constructor() {
      super();
    }

    created() {
      const type = this.type === null ? this.value >= this.target : this.type;
      this.trend = type ? "up" : "down";
      this.rate = (this.percentage === null ? Math.abs(this.value - this.target) * 100 / this.target : this.percentage)
        .toFixed(this.fixed);
    }
  }
  // export default {
  //     name: 'Trend',
  //     props: {
  //         term: {
  //             type: String,
  //             default: '',
  //             required: true
  //         },
  //         percentage: {
  //             type: Number,
  //             default: null
  //         },
  //         type: {
  //             type: Boolean,
  //             default: null
  //         },
  //         target: {
  //             type: Number,
  //             default: 0
  //         },
  //         value: {
  //             type: Number,
  //             default: 0
  //         },
  //         fixed: {
  //             type: Number,
  //             default: 2
  //         }
  //     },
  //     data () {
  //         return {
  //             trend: this.type && 'up' || 'down',
  //             rate: this.percentage
  //         }
  //     },
  //     created () {
  //         const type = this.type === null ? this.value >= this.target : this.type
  //         this.trend = type ? 'up' : 'down'
  //         this.rate = (this.percentage === null ? Math.abs(this.value - this.target) * 100 / this.target : this.percentage).toFixed(this.fixed)
  //     }
  // }
</script>

<style lang="less" scoped>
  .chart-trend {
    display: inline-block;
    font-size: 14px;
    line-height: 22px;

    .trend-icon {
      font-size: 12px;

      &.up, &.down {
        margin-left: 4px;
        position: relative;
        top: 1px;

        i {
          font-size: 12px;
          transform: scale(.83);
        }
      }

      &.up {
        color: #f5222d;
      }

      &.down {
        color: #52c41a;
        top: -1px;
      }
    }
  }
</style>
