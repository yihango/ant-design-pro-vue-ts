<template>
    <a-layout-sider
            :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
            width="256px"
            :collapsible="collapsible"
            v-model="collapsed"
            :trigger="null">
        <logo />
        <s-menu
                :collapsed="collapsed"
                :menu="menus"
                :theme="theme"
                :mode="mode"
                @select="onSelect"
                style="padding: 16px 0px;"></s-menu>
    </a-layout-sider>

</template>

<script lang="ts">
    import Logo from '@/components/tools/logo.vue'
    import SMenu from './index'
    import MixinDevice from '@/shared/mixins/mixin-device';

    import {Component, Prop, Vue,Watch,Emit,Provide,Inject} from "vue-property-decorator";

    @Component({
        components: {
            Logo,
            SMenu,
        },
    })
    export default class SideMenu extends MixinDevice {
        @Prop({type: String, default: 'inline',required: false})
        public  mode: string;
        @Prop({type: String, default: 'dark',required: false})
        public  theme: string;
        @Prop({type: Boolean, default: false,required: false})
        public collapsible: boolean;
        @Prop({type: Boolean, default: false,required: false})
        public collapsed: boolean;
        @Prop({type: Array, required: true})
        public menus: any[];


        constructor() {
            super();
        }

        @Emit('menuSelect')
        onSelect (obj) {
            //this.$emit('menuSelect', obj)
        }
    }


    // export default {
    //     name: 'SideMenu',
    //     components: { Logo, SMenu },
    //     mixins: [mixin, mixinDevice],
    //     props: {
    //         mode: {
    //             type: String,
    //             required: false,
    //             default: 'inline'
    //         },
    //         theme: {
    //             type: String,
    //             required: false,
    //             default: 'dark'
    //         },
    //         collapsible: {
    //             type: Boolean,
    //             required: false,
    //             default: false
    //         },
    //         collapsed: {
    //             type: Boolean,
    //             required: false,
    //             default: false
    //         },
    //         menus: {
    //             type: Array,
    //             required: true
    //         }
    //     },
    //     methods: {
    //         onSelect (obj) {
    //             this.$emit('menuSelect', obj)
    //         }
    //     }
    // }
</script>
