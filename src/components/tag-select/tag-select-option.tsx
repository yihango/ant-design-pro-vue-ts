import { Tag } from 'ant-design-vue'
const { CheckableTag } = Tag

import {Component, Prop, Vue,Watch,Emit,Provide,Inject,Mixins} from "vue-property-decorator";

@Component({
    components: {},
})
export default class TagSelectOption extends Vue {
    @Prop({type: String, default: 'ant-pro-tag-select-option'})
    public prefixCls: string;
    @Prop({type: [String, Number, Object], default: ''})
    public value: any;
    @Prop({type: Boolean, default: false})
    public checked: number;
    @Prop({type: Object,default:null})
    public key: any;

    public localChecked= this.checked || false;

    constructor() {
        super();
    }

    @Watch('checked')
    checkedChanged(val){
        this.localChecked = val;
    }

    @Watch('$parent.items',{deep:true})
    parentItemsChanged(val){
        this.value && val.hasOwnProperty(this.value) && (this.localChecked = val[this.value]);
    }


    render () {
        const { $slots, value } = this
        const onChange = (checked) => {
            this.$emit('change', { value, checked })
        }
        return (<CheckableTag key={value} vModel={this.localChecked} onChange={onChange}>
            {$slots.default}
        </CheckableTag>)
    }
}


//export default {
//     name: 'TagSelectOption',
//     props: {
//         prefixCls: {
//             type: String,
//             default: 'ant-pro-tag-select-option'
//         },
//         value: {
//             type: [String, Number, Object],
//             default: ''
//         },
//         checked: {
//             type: Boolean,
//             default: false
//         }
//     },
//     data () {
//         return {
//             localChecked: this.checked || false
//         }
//     },
//     watch: {
//         'checked' (val) {
//             this.localChecked = val
//         },
//         '$parent.items': {
//             handler: function (val) {
//                 this.value && val.hasOwnProperty(this.value) && (this.localChecked = val[this.value])
//             },
//             deep: true
//         }
//     },
//     render () {
//         const { $slots, value } = this
//         const onChange = (checked) => {
//             this.$emit('change', { value, checked })
//         }
//         return (<CheckableTag key={value} vModel={this.localChecked} onChange={onChange}>
//             {$slots.default}
//         </CheckableTag>)
//     }
// }
