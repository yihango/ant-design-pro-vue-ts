<template>
  <tooltip v-if="tips !== ''">
    <template slot="title">{{ tips }}</template>
    <avatar :size="avatarSize" :src="src" />
  </tooltip>
  <avatar v-else :size="avatarSize" :src="src" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Avatar from 'ant-design-vue/es/avatar'
import Tooltip from 'ant-design-vue/es/tooltip'


@Component({
    components:{
        Avatar,
        Tooltip,
    },
})
export default class AvatarItem extends Vue{
    @Prop({ type: String, default: '', required: false})
    public tips: string;
    @Prop({ type: String, default: ''})
    public src: string;

    public size:any;

    public get avatarSize(): any{
        return this.size !== 'mini' && this.size || 20;
    }

    constructor() {
        super();
    }

    mounted() { }
    
    @Watch("$parent.size")
    sizeChange(val){
        this.size = val;
    }
}

// export default {
//   name: 'AvatarItem',
//   components: {
//     Avatar,
//     Tooltip
//   },
//   props: {
//     tips: {
//       type: String,
//       default: '',
//       required: false
//     },
//     src: {
//       type: String,
//       default: ''
//     }
//   },
//   data () {
//     return {
//       size: this.$parent.size
//     }
//   },
//   computed: {
//     avatarSize () {
//       return this.size !== 'mini' && this.size || 20
//     }
//   },
//   watch: {
//     '$parent.size' (val) {
//       this.size = val
//     }
//   }
// }
</script>
