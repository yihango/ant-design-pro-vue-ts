import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device'
import { State, Action, Getter } from "vuex-class";

@Component({
    components: {},
})
export default class AppDeviceEnquire extends Vue {

    constructor() {
        super();
    }

    mounted () {
        const { $store } = this
        deviceEnquire(deviceType => {
            switch (deviceType) {
                case DEVICE_TYPE.DESKTOP:
                    $store.commit('TOGGLE_DEVICE', 'desktop')
                    $store.dispatch('setSidebar', true)
                    break
                case DEVICE_TYPE.TABLET:
                    $store.commit('TOGGLE_DEVICE', 'tablet')
                    $store.dispatch('setSidebar', false)
                    break
                case DEVICE_TYPE.MOBILE:
                default:
                    $store.commit('TOGGLE_DEVICE', 'mobile')
                    $store.dispatch('setSidebar', true)
                    break
            }
        })
    }
}
