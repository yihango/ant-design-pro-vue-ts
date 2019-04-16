import { Spin } from 'ant-design-vue'
import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

@Component({
    components: {},
})
export default class PageLoading extends Vue {

    constructor() {
        super();
    }

    render () {
        return (<div style={{ paddingTop: 100, textAlign: 'center' }}>
            <Spin size="large" />
        </div>)
    }
}
// export default {
//     name: 'PageLoading',
//     render () {
//         return (<div style={{ paddingTop: 100, textAlign: 'center' }}>
//             <Spin size="large" />
//         </div>)
//     }
// }
