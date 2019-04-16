<template>
    <div :class="[prefixCls, reverseColor && 'reverse-color' ]">
    <span>
      <slot name="term"></slot>
      <span class="item-text">
        <slot></slot>
      </span>
    </span>
        <span :class="[flag]"><a-icon :type="`caret-${flag}`"/></span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class Trend extends Vue {
        @Prop({type: String, default: 'ant-pro-trend'})
        public prefixCls: string;
        /**
         * 上升下降标识：up|down
         */
        @Prop({type: String, required: true})
        public flag: string;
        /**
         * 颜色反转
         */
        @Prop({type: Boolean,  default: false})
        public reverseColor: boolean;

        constructor() {
            super();
        }
    }
    // export default {
    //     name: 'Trend',
    //     props: {
    //         prefixCls: {
    //             type: String,
    //             default: 'ant-pro-trend'
    //         },
    //         /**
    //          * 上升下降标识：up|down
    //          */
    //         flag: {
    //             type: String,
    //             required: true
    //         },
    //         /**
    //          * 颜色反转
    //          */
    //         reverseColor: {
    //             type: Boolean,
    //             default: false
    //         }
    //     }
    // }
</script>

<style lang="less" scoped>
    @import "index";
</style>
