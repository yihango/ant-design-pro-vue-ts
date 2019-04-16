import PropTypes from 'ant-design-vue/es/_util/vue-types';
import TagSelectOption from './tag-select-option';
import {filterEmpty} from '@/components/_util/util';

import {Component, Model, Prop, Vue} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class TagSelect extends Vue {

    @Prop({type: Boolean})
    @Model('change')
    public checked: boolean;

    @Prop({type: String, default: 'ant-pro-tag-select'})
    public prefixCls: string;
    @Prop({type: PropTypes.array, default: null})
    public defaultValue: any;
    @Prop({type: PropTypes.array, default: null})
    public value: any;
    @Prop({type: Boolean, default: false})
    public expandable: boolean;
    @Prop({type: Boolean, default: false})
    public hideCheckAll: boolean;

    public expand= false;
    public localCheckAll= false;
    public items= this.getItemsKey(filterEmpty(this.$slots.default));
    public val= this.value || this.defaultValue || [];

    constructor() {
        super();
    }

    onChange(checked) {
        const key = Object.keys(this.items).filter(key => key === checked.value);
        // @ts-ignore
        this.items[key] = checked.checked;
        const bool = Object.values(this.items).lastIndexOf(false);
        if (bool === -1) {
            this.localCheckAll = true;
        } else {
            this.localCheckAll = false;
        }
    }
    onCheckAll(checked) {
        Object.keys(this.items).forEach(v => {
            this.items[v] = checked.checked;
        });
    }
    getItemsKey(items):any {
        const totalItem = {};
        items.forEach(item => {
            totalItem[item.componentOptions.propsData && item.componentOptions.propsData.value] = false;
        });
        return totalItem;
    }
    // CheckAll Button
    renderCheckAll() {
      // // key={'total'}
      //   return !this.hideCheckAll
      //     && (<TagSelectOption  checked={this.localCheckAll} onChange={this.onCheckAll}>All</TagSelectOption>) || null;
    }
    // expandable
    renderExpandable() {

    }
    // render option
    renderTags(items) {
        const listeners = {
            change: (checked) => {
                this.onChange(checked);
                this.$emit('change', checked);
            }
        };

        return items.map(vnode => {
            const options = vnode.componentOptions;
            options.listeners = listeners;
            return vnode;
        });
    }

    render() {
        // const {$props: {prefixCls}} = this;
        const classString = {
            [`${this.prefixCls}`]: true
        };
        const tagItems = filterEmpty(this.$slots.default);
        return (
            <div class={classString}>
                {/*{this.renderCheckAll()}*/}
                {this.renderTags(tagItems)}
            </div>
        );
    }

}


//export default {
//     Option,
//     name: 'TagSelect',
//     model: {
//         prop: 'checked',
//         event: 'change'
//     },
//     props: {
//         prefixCls: {
//             type: String,
//             default: 'ant-pro-tag-select'
//         },
//         defaultValue: {
//             type: PropTypes.array,
//             default: null
//         },
//         value: {
//             type: PropTypes.array,
//             default: null
//         },
//         expandable: {
//             type: Boolean,
//             default: false
//         },
//         hideCheckAll: {
//             type: Boolean,
//             default: false
//         }
//     },
//     data() {
//         return {
//             expand: false,
//             localCheckAll: false,
//             items: this.getItemsKey(filterEmpty(this.$slots.default)),
//             val: this.value || this.defaultValue || []
//         };
//     },
//     methods: {
//         onChange(checked) {
//             const key = Object.keys(this.items).filter(key => key === checked.value);
//             this.items[key] = checked.checked;
//             const bool = Object.values(this.items).lastIndexOf(false);
//             if (bool === -1) {
//                 this.localCheckAll = true;
//             } else {
//                 this.localCheckAll = false;
//             }
//         },
//         onCheckAll(checked) {
//             Object.keys(this.items).forEach(v => {
//                 this.items[v] = checked.checked;
//             });
//         },
//         getItemsKey(items) {
//             const totalItem = {};
//             items.forEach(item => {
//                 totalItem[item.componentOptions.propsData && item.componentOptions.propsData.value] = false;
//             });
//             return totalItem;
//         },
//         // CheckAll Button
//         renderCheckAll() {
//             return !this.hideCheckAll && (
//                 <Option key={'total'} checked={this.localCheckAll} onChange={this.onCheckAll}>All</Option>) || null;
//         },
//         // expandable
//         renderExpandable() {
//
//         },
//         // render option
//         renderTags(items) {
//             const listeners = {
//                 change: (checked) => {
//                     this.onChange(checked);
//                     this.$emit('change', checked);
//                 }
//             };
//
//             return items.map(vnode => {
//                 const options = vnode.componentOptions;
//                 options.listeners = listeners;
//                 return vnode;
//             });
//         }
//     },
//     render() {
//         const {$props: {prefixCls}} = this;
//         const classString = {
//             [`${prefixCls}`]: true
//         };
//         const tagItems = filterEmpty(this.$slots.default);
//         return (
//             <div class={classString}>
//                 {this.renderCheckAll()}
//                 {this.renderTags(tagItems)}
//             </div>
//         );
//     }
// };
