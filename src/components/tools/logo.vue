<template>
    <div class="logo">
        <router-link :to="{name:'dashboard'}">
            <!--<LogoSvg alt="logo" />-->
            <h1 v-if="showTitle">{{ title }}</h1>
        </router-link>
    </div>
</template>

<script lang="ts">
    // import LogoSvg from '@/assets/logo.svg?inline'
    import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

    @Component({
        components: {
            //LogoSvg
        },
    })
    export default class Logo extends Vue {
        @Prop({type: String, default: 'Ant Design Pro',required: false})
        public title: string;
        @Prop({type: Boolean, default: true, required: false})
        public showTitle: boolean;

        constructor() {
            super();
        }
    }
    // export default {
    //     name: 'Logo',
    //     components: {
    //         LogoSvg
    //     },
    //     props: {
    //         title: {
    //             type: String,
    //             default: 'Ant Design Pro',
    //             required: false
    //         },
    //         showTitle: {
    //             type: Boolean,
    //             default: true,
    //             required: false
    //         }
    //     }
    // }
</script>
