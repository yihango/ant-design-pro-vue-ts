import { Component, Vue } from 'vue-property-decorator';
import MixinDevice from '@/shared/mixins/mixin-device';
import RouteView from '../commons/route-view.vue';

@Component({
  components: {
    RouteView,
  },
})
export default class AccountLayoutComponent extends MixinDevice {
  constructor() {
    super();
  }


  mounted() {
    document.body.classList.add('userLayout')
  }

  beforeDestroy() {
    document.body.classList.remove('userLayout')
  }
}