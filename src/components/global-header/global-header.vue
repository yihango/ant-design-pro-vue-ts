<template>
  <transition name="showHeader">
    <div class="header-animat" v-if="visible">
      <a-layout-header
        :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed', ]"
        :style="{ padding: '0' }"
        v-if="visible">
        <div class="header" v-if="mode === 'sidemenu'">
          <a-icon :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle" class="trigger"
                  v-if="device==='mobile'"/>
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle" class="trigger" v-else/>
          <user-menu></user-menu>
        </div>
        <div :class="['top-nav-header-index', theme]" v-else>
          <div class="header-index-wide">
            <div class="header-index-left">
              <logo :show-title="device !== 'mobile'" class="top-nav-header"/>
              <s-menu :menu="menus" :theme="theme" mode="horizontal" v-if="device !== 'mobile'"/>
              <a-icon :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle" class="trigger" v-else/>
            </div>
            <user-menu class="header-index-right"></user-menu>
          </div>
        </div>
      </a-layout-header>
    </div>
  </transition>
</template>

<script lang="ts">
  import UserMenu from "../tools/user-menu.vue";
  import SMenu from "../menu/";
  import Logo from "../tools/logo.vue";
  import {Component, Prop} from "vue-property-decorator";
  import Mixin from "@/shared/mixins/mixin";

  @Component({
    components: {
      UserMenu,
      SMenu,
      Logo,
    },
  })
  export default class GlobalHeader extends Mixin {
    @Prop({type: String, default: "sidemenu"})
    public mode: number;
    @Prop({type: Array, required: true})
    public menus: any[];
    @Prop({type: String, default: "dark", required: false})
    public theme: string;
    @Prop({type: Boolean, default: false, required: false})
    public collapsed: boolean;
    @Prop({type: String, default: "desktop", required: false})
    public device: string;

    visible: boolean = true;
    oldScrollTop: number = 0;


    ticking: boolean = false;

    constructor() {
      super();
    }

    mounted() {
      document.body.addEventListener("scroll", this.handleScroll, {passive: true});
    }

    beforeDestroy() {
      document.body.removeEventListener("scroll", this.handleScroll, true);
    }

    handleScroll() {
      if (!this.autoHideHeader) {
        return;
      }

      const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
      if (!this.ticking) {
        this.ticking = true;
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true;
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false;
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true;
          }
          this.oldScrollTop = scrollTop;
          this.ticking = false;
        });
      }
    }

    toggle() {
      this.$emit("toggle");
    }
  }


  // export default {
  //     name: 'GlobalHeader',
  //     components: {
  //         UserMenu,
  //         SMenu,
  //         Logo
  //     },
  //     mixins: [mixin],
  //     props: {
  //         mode: {
  //             type: String,
  //             // sidemenu, topmenu
  //             default: 'sidemenu'
  //         },
  //         menus: {
  //             type: Array,
  //             required: true
  //         },
  //         theme: {
  //             type: String,
  //             required: false,
  //             default: 'dark'
  //         },
  //         collapsed: {
  //             type: Boolean,
  //             required: false,
  //             default: false
  //         },
  //         device: {
  //             type: String,
  //             required: false,
  //             default: 'desktop'
  //         }
  //     },
  //     data () {
  //         return {
  //             visible: true,
  //             oldScrollTop: 0
  //         }
  //     },
  //     mounted () {
  //         document.body.addEventListener('scroll', this.handleScroll, { passive: true })
  //     },
  //     methods: {
  //         handleScroll () {
  //             if (!this.autoHideHeader) {
  //                 return
  //             }
  //
  //             const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
  //             if (!this.ticking) {
  //                 this.ticking = true
  //                 requestAnimationFrame(() => {
  //                     if (this.oldScrollTop > scrollTop) {
  //                         this.visible = true
  //                     } else if (scrollTop > 300 && this.visible) {
  //                         this.visible = false
  //                     } else if (scrollTop < 300 && !this.visible) {
  //                         this.visible = true
  //                     }
  //                     this.oldScrollTop = scrollTop
  //                     this.ticking = false
  //                 })
  //             }
  //         },
  //         toggle () {
  //             this.$emit('toggle')
  //         }
  //     },
  //     beforeDestroy () {
  //         document.body.removeEventListener('scroll', this.handleScroll, true)
  //     }
  // }
</script>

<style lang="less">
  .header-animat {
    position: relative;
    z-index: 999;
  }

  .showHeader-enter-active {
    transition: all 0.25s ease;
  }

  .showHeader-leave-active {
    transition: all 0.5s ease;
  }

  .showHeader-enter, .showHeader-leave-to {
    opacity: 0;
  }
</style>
