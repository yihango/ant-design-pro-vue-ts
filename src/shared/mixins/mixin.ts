import Vue from 'vue';
import Component from 'vue-class-component';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace,
} from 'vuex-class';

@Component
export default class Mixin extends Vue {

    @State(state=>state.app.layout)
    public layoutMode!:string;
    @State(state=>state.app.theme)
    public navTheme!:string;
    @State(state=>state.app.color)
    public primaryColor!:string;
    @State(state=>state.app.weak)
    public colorWeak!:boolean;
    @State(state=>state.app.fixedHeader)
    public fixedHeader!:boolean;
    @State(state=>state.app.fixSiderbar)
    public fixSiderbar!:boolean;
    @State(state=>state.app.contentWidth)
    public contentWidth!:any;
    @State(state=>state.app.autoHideHeader)
    public autoHideHeader!:boolean;
    @State(state=>state.app.sidebar)
    public sidebarOpened!:boolean;
    @State(state=>state.app.multiTab)
    public multiTab!:boolean;


    /**  */
    @Action
    public setSidebar;

    constructor() {
        super();
    }

    isTopMenu() {
        return this.layoutMode === 'topmenu';
    }

    isSideMenu() {
        return !this.isTopMenu();
    }

}
