<template>
    <div class="antv-chart-mini">
        <div :style="{ height: 46 }" class="chart-wrapper">
            <v-chart :data="data" :force-fit="true" :height="height" :padding="[36, 5, 18, 5]">
                <v-tooltip/>
                <v-bar position="x*y"/>
            </v-chart>
        </div>
    </div>
</template>

<script lang="ts">
    import moment from "moment";
    import {Component, Prop, Vue} from "vue-property-decorator";

    const data = [];
    const beginDay = new Date().getTime();

    for (let i = 0; i < 10; i++) {
        data.push({
            x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format("YYYY-MM-DD"),
            y: Math.round(Math.random() * 10)
        });
    }

    const tooltip = [
        "x*y",
        (x, y) => ({
            name: x,
            value: y
        })
    ];

    const scale = [{
        dataKey: "x",
        min: 2
    }, {
        dataKey: "y",
        title: "时间",
        min: 1,
        max: 30
    }];

    @Component({
        components: {},
    })
    export default class MiniBar extends Vue {
        @Prop({type: Number, default: 100})
        public height: number;

        public data = data;
        public tooltip = tooltip;
        public scale = scale;

        constructor() {
            super();
        }
    }

    // export default {
    //     name: 'MiniBar',
    //     data () {
    //         return {
    //             data,
    //             tooltip,
    //             scale,
    //             height: 100
    //         }
    //     }
    // }
</script>

<style lang="less" scoped>
    @import "chart";
</style>
