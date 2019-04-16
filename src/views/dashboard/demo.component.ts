import {Component, Vue } from "vue-property-decorator";



@Component({
  components: {},
})
export default class DemoComponent extends Vue {

  myName: string = 'by. 玩双截棍的熊猫';

  constructor() {
    super();
  }
}