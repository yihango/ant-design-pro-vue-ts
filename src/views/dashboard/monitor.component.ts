import {Component, Vue } from "vue-property-decorator";



@Component({
  components: {},
})
export default class MonitorComponent extends Vue {

  myName: string = 'by. 玩双截棍的熊猫';

  constructor() {
    super();
  }
}