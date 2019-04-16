<template>
    <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
            <router-link
                    v-if="item.name != name && index != 1"
                    :to="{ path: item.path === '' ? '/' : item.path }"
            >{{ item.meta.title }}</router-link>
            <span v-else>{{ item.meta.title }}</span>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script lang="ts">
    import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class Breadcrumb extends Vue {
        public name:string='';
        public breadList:any[]=[];

        constructor() {
            super();
        }

        created () {
            this.getBreadcrumb()
        }

        getBreadcrumb () {
            this.breadList = []
            // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})

            this.name = this.$route.name
            this.$route.matched.forEach(item => {
                // item.name !== 'index' && this.breadList.push(item)
                this.breadList.push(item)
            })
        }

        @Watch('$route')
        routeChanged(){
            this.getBreadcrumb()
        }
    }
    // export default {
    //     data () {
    //         return {
    //             name: '',
    //             breadList: []
    //         }
    //     },
    //     created () {
    //         this.getBreadcrumb()
    //     },
    //     methods: {
    //         getBreadcrumb () {
    //             this.breadList = []
    //             // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})
    //
    //             this.name = this.$route.name
    //             this.$route.matched.forEach(item => {
    //                 // item.name !== 'index' && this.breadList.push(item)
    //                 this.breadList.push(item)
    //             })
    //         }
    //     },
    //     watch: {
    //         $route () {
    //             this.getBreadcrumb()
    //         }
    //     }
    // }
</script>

<style scoped>
</style>
