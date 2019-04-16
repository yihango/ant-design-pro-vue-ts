<template>
    <div :style="{ padding: '0 0 32px 32px' }">
        <h4 :style="{ marginBottom: '20px' }">{{ title }}</h4>
        <v-chart
                :data="data"
                :forceFit="true"
                :padding="['auto', 'auto', '40', '50']"
                height="254">
            <v-tooltip/>
            <v-axis/>
            <v-bar position="x*y"/>
        </v-chart>
    </div>
</template>

<script lang="ts">
    const data = [];
    for (let i = 0; i < 12; i += 1) {
        data.push({
            x: `${i + 1}月`,
            y: Math.floor(Math.random() * 1000) + 200
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
        max: 22
    }];
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class Bar extends Vue {
        @Prop({type: String, default: ""})
        public title: string;

        public  data = data;
        public  scale = scale;
        public tooltip = tooltip;

        constructor() {
            super();
        }

        mounted() {
        }

    }


    // export default {
    //     name: 'Bar',
    //     props: {
    //         title: {
    //             type: String,
    //             default: ''
    //         }
    //     },
    //     data () {
    //         return {
    //             data,
    //             scale,
    //             tooltip
    //         }
    //     }
    // }
</script>
