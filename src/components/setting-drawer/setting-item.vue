<template>
    <div class="setting-drawer-index-item">
        <h3 class="setting-drawer-index-title">{{ title }}</h3>
        <slot></slot>
        <a-divider v-if="divider"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class SettingItem extends Vue {
        @Prop({type: String, default: ''})
        public title: string;
        @Prop({type: Boolean, default: false})
        public divider: boolean;

        constructor() {
            super();
        }
    }
    // export default {
    //     name: 'SettingItem',
    //     props: {
    //         title: {
    //             type: String,
    //             default: ''
    //         },
    //         divider: {
    //             type: Boolean,
    //             default: false
    //         }
    //     }
    // }
</script>

<style lang="less" scoped>

    .setting-drawer-index-item {
        margin-bottom: 24px;

        .setting-drawer-index-title {
            font-size: 14px;
            color: rgba(0, 0, 0, .85);
            line-height: 22px;
            margin-bottom: 12px;
        }

    }
</style>
