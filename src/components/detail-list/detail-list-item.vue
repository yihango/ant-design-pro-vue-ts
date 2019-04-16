<template>

</template>

<script lang="tsx">
    import { Col } from 'ant-design-vue/es/grid/'
    import {Component, Prop, Vue,Inject} from "vue-property-decorator";

    const responsive = {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 6 }
    }

    @Component({
        components: {
            Col,
        },
    })
    export default class DetailListItem extends Vue {
        @Prop({type: String, default: '', required: false})
        public term: string;

        @Inject('col')
        public col:number;

        constructor() {
            super();
        }
        render () {
            return (
                <Col {...{ props: responsive[this.col] }}>
                    <div class="term">{this.term}</div>
                    <div class="content">{this.$slots.default}</div>
                </Col>
            )
        }

    }
    // const Item = {
    //     name: 'DetailListItem',
    //     props: {
    //         term: {
    //             type: String,
    //             default: '',
    //             required: false
    //         }
    //     },
    //     inject: {
    //         col: {
    //             type: Number
    //         }
    //     },
    //     render () {
    //         return (
    //             <Col {...{ props: responsive[this.col] }}>
    //                 <div class="term">{this.$props.term}</div>
    //                 <div class="content">{this.$slots.default}</div>
    //             </Col>
    //         )
    //     }
    // }
    //
</script>

<style scoped>

</style>
