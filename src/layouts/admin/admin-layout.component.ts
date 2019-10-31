import { triggerWindowResizeEvent } from '@/utils/util'
import { mapState, mapActions } from 'vuex'
import config from '@/config/default-settings'

import RouteView from '@/layouts/commons/route-view.vue';
import MultiTab from '@/components/multi-tab'
import SideMenu from '@/components/menu/side-menu.vue'
import GlobalHeader from '@/components/global-header'
import GlobalFooter from '@/components/global-footer'
import SettingDrawer from '@/components/setting-drawer'

import { Component, Prop, Vue, Watch, Emit, Provide, Inject, Mixins } from "vue-property-decorator";
import Mixin from '@/shared/mixins/mixin';
import MixinDevice from '@/shared/mixins/mixin-device';
import { State } from 'vuex-class';


@Component({
  components: {
    RouteView,
    MultiTab,
    SideMenu,
    GlobalHeader,
    GlobalFooter,
    SettingDrawer,
  },
})
export default class AdminLayoutComponent extends MixinDevice {
  get contentPaddingLeft() {
    if (!this.fixSiderbar || this.isMobile()) {
      return '0'
    }
    if (this.sidebarOpened) {
      return '256px'
    }
    return '80px'
  }

  @State(state => state.permission.addRouters)
  mainMenu: any[];

  public production = config.production;
  public collapsed = false;
  public menus: any[] = [];


  constructor() {
    super();
  }

  created() {
    this.menus = this.mainMenu.find(item => item.path === '/').children
    this.collapsed = !this.sidebarOpened
  }

  mounted() {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }
  }

  @Watch('sidebarOpened')
  sidebarOpenedChanged(val) {
    this.collapsed = !val
  }

  toggle() {
    this.collapsed = !this.collapsed
    this.setSidebar(!this.collapsed)
    triggerWindowResizeEvent()
  }

  paddingCalc() {
    let left = ''
    if (this.sidebarOpened) {
      left = this.isDesktop() ? '256px' : '80px'
    } else {
      left = (this.isMobile() && '0') || ((this.fixSiderbar && '80px') || '0')
    }
    return left
  }

  menuSelect() {
    if (!this.isDesktop()) {
      this.collapsed = false
    }
  }

  drawerClose() {
    this.collapsed = false
  }

}