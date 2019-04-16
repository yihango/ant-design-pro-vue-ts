<template>
    <div :class="prefixCls">
        <div class="chart-wrapper" :style="{ height: 46 }">
            <v-chart :force-fit="true" :height="100" :data="dataSource" :scale="scale" :padding="[36, 0, 18, 0]">
                <v-tooltip />
                <v-smooth-line position="x*y" :size="2" />
                <v-smooth-area position="x*y" />
            </v-chart>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class MiniSmoothArea extends Vue {
        @Prop({type: String, default: 'ant-pro-smooth-area'})
        public prefixCls: string;
        @Prop({type: [Object, Array], required: true})
        public scale: any;
        @Prop({type: Array, required: true})
        public dataSource: any[];

        public height: 100;

        constructor() {
            super();
        }
    }
    // export default {
    //     name: 'MiniSmoothArea',
    //     props: {
    //         prefixCls: {
    //             type: String,
    //             default: 'ant-pro-smooth-area'
    //         },
    //         scale: {
    //             type: [Object, Array],
    //             required: true
    //         },
    //         dataSource: {
    //             type: Array,
    //             required: true
    //         }
    //     },
    //     data () {
    //         return {
    //             height: 100
    //         }
    //     }
    // }
</script>

<style lang="less" scoped>
    @import "smooth.area.less";
</style>
