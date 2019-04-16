<template>
  <div class="home">
    <div class="banner">
      <img alt="Vue logo" src="../assets/logo.png" style="width: 64px; height: 64px">
      <h3 style="margin-top: 1rem">Welcome to Your Vue.js App</h3>
    </div>

    <br/>

    <h2># Trend 组件 </h2>

    <a-divider> 正常</a-divider>

    <a-card>

      <trend flag="up" style="margin-right: 16px;">
        <span slot="term">工资</span>
        5%
      </trend>
      <trend flag="up" style="margin-right: 16px;">
        <span slot="term">工作量</span>
        50%
      </trend>
      <trend flag="down">
        <span slot="term">身体状态</span>
        50%
      </trend>

    </a-card>

    <a-divider> 颜色反转</a-divider>

    <a-card style="margin-bottom: 3rem">

      <trend :reverse-color="true" flag="up" style="margin-right: 16px;">
        <span slot="term">工资</span>
        5%
      </trend>
      <trend :reverse-color="true" flag="down" style="margin-right: 16px;">
        <span slot="term">工作量</span>
        50%
      </trend>

    </a-card>

    <h2># AvatarList 组件 </h2>

    <a-divider> AvatarList</a-divider>
    <a-card style="margin-bottom: 3rem">
      <avatar-list :max-length="3">
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" tips="Jake"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" tips="Andy"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" tips="Niko"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" tips="Niko"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" tips="Niko"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" tips="Niko"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" tips="Niko"/>

      </avatar-list>

      <a-divider style="margin: 0 16px" type="vertical"/>

      <avatar-list size="mini">
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" tips="Jake"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" tips="Andy"/>
        <avatar-list-item src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" tips="Niko"/>
      </avatar-list>
    </a-card>

    <h2># CountDown 组件 </h2>

    <a-divider> CountDown</a-divider>
    <a-card style="margin-bottom: 3rem">
      <count-down
        :on-end="onEndHandle"
        :target="new Date().getTime() + 3000000"
        style="font-size: 2rem">
      </count-down>

      <a-divider style="margin: 0 16px" type="vertical"/>

      <count-down
        :on-end="onEndHandle2"
        :target="new Date().getTime() + 10000"
        style="font-size: 2rem">
      </count-down>
    </a-card>

    <h2># Ellipsis 组件 </h2>

    <a-divider> Ellipsis</a-divider>
    <a-card style="margin-bottom: 3rem">
      <ellipsis :length="100" tooltip>
        There were injuries alleged in three cases in 2015, and a
        fourth incident in September, according to the safety recall report. After meeting with US regulators in
        October, the firm decided to issue a voluntary recall.
      </ellipsis>
    </a-card>

    <h2># NumberInfo 组件 </h2>

    <a-divider> NumberInfo</a-divider>
    <a-card style="margin-bottom: 3rem">
      <number-info
        :sub-title="() => { return 'Visits this week' }"
        :sub-total="17.1"
        :total="12321"
        status="up"></number-info>
    </a-card>

    <h2># TagSelect 组件 </h2>

    <a-divider> TagSelect</a-divider>
    <a-card style="margin-bottom: 3rem">
      <!--<tag-select>-->
        <!--<tag-select-option value="cat1">类目1</tag-select-option>-->
        <!--<tag-select-option value="cat2">类目2</tag-select-option>-->
        <!--<tag-select-option value="cat3">类目3</tag-select-option>-->
        <!--<tag-select-option value="cat4">类目4</tag-select-option>-->
        <!--<tag-select-option value="cat5">类目5</tag-select-option>-->
        <!--<tag-select-option value="cat6">类目6</tag-select-option>-->
        <!--<tag-select-option value="cat7">类目7</tag-select-option>-->
      <!--</tag-select>-->
    </a-card>

    <h2># DescriptionList 组件 </h2>

    <a-divider> DescriptionList</a-divider>
    <a-card style="margin-bottom: 3rem">
      <description-list size="small" title="组名称">
        <description-list-item term="负责人">林东东</description-list-item>
        <description-list-item term="角色码">1234567</description-list-item>
        <description-list-item term="所属部门">XX公司-YY部</description-list-item>
        <description-list-item term="过期时间">2018-08-08</description-list-item>
        <description-list-item term="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</description-list-item>
      </description-list>
    </a-card>

    <a-divider> TagCloud</a-divider>
    <a-card style="margin-bottom: 3rem">
      <tag-cloud :tag-list="tagCloudData"></tag-cloud>
    </a-card>
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src

  import Trend from "@/components/trend/";
  import AvatarList from "@/components/avatar-list/list.vue";
  import AvatarItem from "@/components/avatar-list/item.vue";
  import CountDown from "@/components/count-down/";
  import Ellipsis from "@/components/ellipsis/";
  import NumberInfo from "@/components/number-info/number-info.vue";
  import TagSelect from "@/components/tag-select/tag-select";
  // import TagSelectOption from "@/components/tag-select/tag-select-option";
  import {DetailList, DetailListItem, TagCloud} from "@/components/";
  import {Component, Vue} from "vue-property-decorator";

  const AvatarListItem = AvatarItem;
  // const TagSelectOption = TagSelectOption;

  const DescriptionListItem = DetailListItem;

  @Component({
    components: {
      NumberInfo,
      Ellipsis,
      CountDown,
      Trend,
      AvatarList,
      AvatarListItem,
      // TagSelect,
      // TagSelectOption,
      TagCloud,
      DetailList,
      DescriptionListItem
    },
  })
  export default class Home extends Vue {
    targetTime: any = null;
    tagCloudData: any[] = [];

    constructor() {
      super();
      // this.targetTime = new Date().getTime() + 3900000;
    }

    created() {
      this.getTagCloudData();
    }

    onEndHandle() {
      this.$message.success("CountDown callback!!!");
    }

    onEndHandle2() {
      this.$notification.open({
        message: "Notification Title",
        description: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
      });
    }

    getTagCloudData() {
      this.$http.get("/data/antv/tag-cloud").then(res => {
        this.tagCloudData = res.result;
      });
    }
  }
</script>

<style scoped>
  .home {
    width: 900px;
    margin: 0 auto;
    padding: 25px 0;
  }

  .home > .banner {
    text-align: center;
    padding: 25px 0;
    margin: 25px 0;
  }
</style>
