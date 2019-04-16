<template>
    <div :class="prefixCls">
        <div style="float: left">
            <slot name="extra">{{ extra }}</slot>
        </div>
        <div style="float: right">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class FooterToolBar extends Vue {
        @Prop({type: String, default: 'ant-pro-footer-tool-bar'})
        public prefixCls: number;
        @Prop({type: [String, Object], default: ''})
        public extra: any;

        constructor() {
            super();
        }
    }
    // export default {
    //     name: 'FooterToolBar',
    //     props: {
    //         prefixCls: {
    //             type: String,
    //             default: 'ant-pro-footer-tool-bar'
    //         },
    //         extra: {
    //             type: [String, Object],
    //             default: ''
    //         }
    //     }
    // }
</script>

<style lang="less" scoped>

</style>
