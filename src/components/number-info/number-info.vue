<template>
    <div :class="[prefixCls]">
        <slot name="subtitle">
            <div :class="[`${prefixCls}-subtitle`]">{{ typeof subTitle === 'string' ? subTitle : subTitle() }}</div>
        </slot>
        <div class="number-info-value">
            <span>{{ total }}</span>
            <span class="sub-total">
        {{ subTotal }}
        <icon :type="`caret-${status}`" />
      </span>
        </div>
    </div>
</template>

<script lang="ts">
    import Icon from 'ant-design-vue/es/icon'
    import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

    @Component({
        components: {
            Icon
        },
    })
    export default class NumberInfo extends Vue {
        @Prop({type: String, default: 'ant-pro-number-info'})
        public prefixCls: string;
        @Prop({type: Number, required: true})
        public total: number;
        @Prop({type: Number, required: true})
        public subTotal: number;
        @Prop({type: [String, Function], default:''})
        public subTitle: any;
        @Prop({type: String, default: 'up'})
        public status: string;



        constructor() {
            super();
        }
    }

    // export default {
    //     name: 'NumberInfo',
    //     props: {
    //         prefixCls: {
    //             type: String,
    //             default: 'ant-pro-number-info'
    //         },
    //         total: {
    //             type: Number,
    //             required: true
    //         },
    //         subTotal: {
    //             type: Number,
    //             required: true
    //         },
    //         subTitle: {
    //             type: [String, Function],
    //             default: ''
    //         },
    //         status: {
    //             type: String,
    //             default: 'up'
    //         }
    //     },
    //     components: {
    //         Icon
    //     },
    //     data () {
    //         return {}
    //     }
    // }
</script>

<style lang="less" scoped>
    @import "index";
</style>
