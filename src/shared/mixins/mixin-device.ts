import {Component, Prop, Vue, Watch, Emit, Provide, Inject, Mixins} from 'vue-property-decorator';
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device';
import { State, Action, Getter } from 'vuex-class';
import {mapState} from 'vuex';
import Mixin from './mixin';

@Component({
    components: {},
})
export default class MixinDevice extends Mixin {

    @State(state=>state.app.device)
    public device!:string;

    constructor(){
        super();
    }

    isMobile() {
        return this.device === DEVICE_TYPE.MOBILE;
    }

    isDesktop() {
        return this.device === DEVICE_TYPE.DESKTOP;
    }

    isTablet() {
        return this.device === DEVICE_TYPE.TABLET;
    }
}
