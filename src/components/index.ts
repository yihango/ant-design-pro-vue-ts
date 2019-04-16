// import NumberInfo from './numberinfo/Index.vue';
// import PageHeader from './pageheader/Index.vue';
// import FooterToolbar from './footertoolbar/Index.vue';
// import Result from './result/Index.vue';
// import StandardTable from './standardtable/Index.vue';
// import BreadcrumbList from './breadcrumblist/Index.vue';
//
// export default {
//     install: ( Vue: any ) => {
//         Vue.component('av-number-info', NumberInfo);
//         Vue.component('av-page-header', PageHeader);
//         Vue.component('av-footer-toolbar', FooterToolbar);
//         Vue.component('av-result', Result);
//         Vue.component('av-standard-table', StandardTable);
//         Vue.component('av-breadcrumb-list', BreadcrumbList);
//     },
// };
//

// chart
import Bar from '@/components/charts/bar.vue'
import ChartCard from '@/components/charts/chart-card.vue'
import Liquid from '@/components/charts/liquid.vue'
import MiniArea from '@/components/charts/mini-area.vue'
import MiniSmoothArea from '@/components/charts/mini-smooth-area.vue'
import MiniBar from '@/components/charts/mini-bar.vue'
import MiniProgress from '@/components/charts/mini-progress.vue'
import Radar from '@/components/charts/radar.vue'
import RankList from '@/components/charts/rank-list.vue'
import TransferBar from '@/components/charts/transfer-bar.vue'
import TagCloud from '@/components/charts/tag-cloud.vue'

// pro components
import AvatarList from '@/components/avatar-list';
import CountDown from '@/components/count-down'
import Ellipsis from '@/components/ellipsis'
import FooterToolbar from '@/components/footer-tool-bar'
import NumberInfo from '@/components/number-info'
import DetailList from '@/components/detail-list'
import DetailListItem from '@/components/detail-list/detail-list-item.vue'
import Tree from '@/components/tree/s-tree'
import Trend from '@/components/trend'
import MultiTab from '@/components/multi-tab'
import Result from '@/components/result'
import IconSelector from '@/components/icon-selector'
import TagSelect from '@/components/tag-select/'
import ExceptionPage from '@/components/exception'

export {
    AvatarList,
    Bar,
    ChartCard,
    Liquid,
    MiniArea,
    MiniSmoothArea,
    MiniBar,
    MiniProgress,
    Radar,
    TagCloud,
    RankList,
    TransferBar,
    Trend,
    CountDown,
    Ellipsis,
    FooterToolbar,
    NumberInfo,
    DetailList,
    DetailListItem,
    Tree,
    MultiTab,
    Result,
    ExceptionPage,
    IconSelector,
    TagSelect
}
