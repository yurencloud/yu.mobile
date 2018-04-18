<template>
  <div id="container" style="margin: 30px">
    <h2>YU.MOBILE</h2>

    <div class="title">按钮</div>


    <div class="mobile-box">
      <yu-text>屏宽按钮</yu-text>
      <div class="addPadding">
        <yu-button fluid>默认按钮</yu-button>
        <yu-button type="primary" fluid>主要按钮</yu-button>
      </div>

      <yu-text>基础用法</yu-text>
      <div class="addPadding">
        <yu-button>默认按钮</yu-button>
        <yu-button type="primary">主要按钮</yu-button>
        <yu-button type="success">成功按钮</yu-button>
        <yu-button type="warming">警告按钮</yu-button>
        <yu-button type="danger">危险按钮</yu-button>
        <yu-button type="info">信息按钮</yu-button>
        <br/>
        <yu-button plain>朴素按钮</yu-button>
        <yu-button type="primary" plain>主要按钮</yu-button>
        <yu-button type="success" plain>成功按钮</yu-button>
        <yu-button type="warming" plain>警告按钮</yu-button>
        <yu-button type="danger" plain>危险按钮</yu-button>
        <yu-button type="info" plain>信息按钮</yu-button>
      </div>

      <yu-text>图标按钮</yu-text>
      <div class="addPadding">
        <yu-button icon="icon-edit" type="primary"/>
        <yu-button icon="icon-accessory" type="primary"/>
        <yu-button icon="icon-trash" type="primary"/>
        <yu-button icon="icon-search-o" type="primary">搜索</yu-button>
        <yu-button icon="icon-upload" type="primary">上传</yu-button>
      </div>

      <yu-text>按钮组</yu-text>
      <!--<yu-buttons>-->
      <!--<yu-button type="primary">-->
      <!--<i class="iconfont icon-angle-left"></i>-->
      <!--上一页-->
      <!--</yu-button>-->
      <!--<yu-button type="primary">-->
      <!--下一页-->
      <!--<i class="iconfont icon-angle-right"></i>-->
      <!--</yu-button>-->
      <!--</yu-buttons>-->
      <!--<yu-buttons>-->
      <!--<yu-button icon="icon-edit" type="primary"/>-->
      <!--<yu-button icon="icon-accessory" type="primary"/>-->
      <!--<yu-button icon="icon-trash" type="primary"/>-->
      <!--</yu-buttons>-->

      <yu-text>禁用状态</yu-text>
      <div class="addPadding">
        <yu-button disabled>默认按钮</yu-button>
        <yu-button type="primary" disabled>主要按钮</yu-button>
        <yu-button type="success" disabled>成功按钮</yu-button>
        <yu-button type="warming" disabled>警告按钮</yu-button>
        <yu-button type="danger" disabled>危险按钮</yu-button>
        <yu-button type="info" disabled>信息按钮</yu-button>
        <br/>
        <yu-button plain disabled>朴素按钮</yu-button>
        <yu-button type="primary" plain disabled>主要按钮</yu-button>
        <yu-button type="success" plain disabled>成功按钮</yu-button>
        <yu-button type="warming" plain disabled>警告按钮</yu-button>
        <yu-button type="danger" plain disabled>危险按钮</yu-button>
        <yu-button type="info" plain disabled>信息按钮</yu-button>
      </div>

      <yu-text>加载中</yu-text>
      <div class="addPadding">
        <yu-button loading type="primary">按钮</yu-button>
      </div>

      <yu-text>不同尺寸</yu-text>
      <div class="addPadding">
        <yu-button type="primary">正常按钮</yu-button>
        <yu-button type="primary" size="medium">中等按钮</yu-button>
        <yu-button type="primary" size="small">小型按钮</yu-button>
        <yu-button type="primary" size="mini">超小按钮</yu-button>
      </div>

      <yu-text>圆形按钮</yu-text>
      <div class="addPadding">
        <yu-button shape="circle" icon="icon-user"/>
        <yu-button shape="circle" icon="icon-user" size="medium"/>
        <yu-button shape="circle" icon="icon-user" size="small"/>
        <yu-button shape="circle" icon="icon-user" size="mini"/>
      </div>

    </div>

    <div class="title">列表</div>
    <div class="mobile-box">
      <yu-text>普通用法</yu-text>
      <yu-list title="我是标题" content="我是内容" />

      <yu-text>显示头部，底部文本</yu-text>
      <yu-list title="我是标题" header="我是头部文本" content="我是内容" />
      <yu-list title="我是标题" footer="我是底部文本" content="我是内容" />

      <yu-text>带副标题</yu-text>
      <yu-list title="我是标题" header="我是头部文本" content="我是内容" description="带副标题"/>

      <yu-text>内容为箭头</yu-text>
      <yu-list title="我是标题" arrow description="带副标题"/>


      <yu-text>前置图标/图片/自定义</yu-text>
      <yu-list title="我是标题" icon="icon-user" arrow description="带副标题"/>
      <yu-list title="我是标题" imgSrc="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow description="带副标题"/>
      <yu-list title="我是标题" click arrow description="带副标题">
        <div slot="prepend">
          <yu-button shape="circle" icon="icon-user" style="margin-top: 8px"/>
        </div>
      </yu-list>

      <yu-text>列表组</yu-text>
      <yu-lists>
        <yu-list title="我是标题" click icon="icon-user" arrow description="带副标题"/>
        <yu-list title="我是标题" imgSrc="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow description="带副标题"/>
        <yu-list title="我是标题" arrow description="带副标题">
          <div slot="prepend">
            <yu-button shape="circle" icon="icon-user" style="margin-top: 8px"/>
          </div>
        </yu-list>
      </yu-lists>

      <yu-text>列表组显示头部和底部文本</yu-text>
      <yu-lists header="我是头部文本" footer="我是底部文本">
        <yu-list title="我是标题"  click icon="icon-user" arrow description="带副标题"/>
        <yu-list title="我是标题"  click icon="icon-user" arrow description="带副标题"/>
      </yu-lists>

      <div class="sub-title">段落</div>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题"/>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" short/>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" content="我是内容"/>

      <div class="sub-title">内容对齐</div>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题"
               content="我是内容"
               content-align="flex-end"
      />

      <div class="sub-title">自定义内容</div>
      <yu-list title="我是标题">
        <yu-button type="primary" slot="append" style="margin: 0;" size="mini">确认</yu-button>
      </yu-list>

      <div class="sub-title">禁用列表</div>
      <yu-list title="我是标题" disabled />

      <yu-list />
    </div>

    <div class="title">文本</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-text>我是普通文本</yu-text>
    </div>

    <div class="title">复选框</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-checkbox :options="options"/>
    </div>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';
import YuList from '../components/list';
import YuLists from '../components/lists';
import YuText from '../components/text';
import YuCheckbox from '../components/checkbox';

export default {
  name: 'ViewContainer',
  data() {
    return {
      options: [
        { value: 0, label: '博士' },
        { value: 1, label: '本科' },
        { value: 2, label: '高中' },
      ],
    };
  },
  components: {
    YuButton,
    YuList,
    YuLists,
    YuText,
    YuCheckbox,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  html {
    font-size: $rem;
  }

  h2 {
    font-size: $huge;
  }

  #container>.title{
      color: $text;
      padding: $normal 0;
      margin: $huge 0;
      font-size: $huge;
      border-bottom: 1px solid $border;
  }


  .mobile-box {
    height: 667px;
    width: 375px;
    border: 1px solid $border;
    border-radius: 10px;
    background: $background;
    overflow-y: scroll;
    font-size: 0;
    padding: 0;
    &::-webkit-scrollbar {
      width: 0;
    }
    &:hover {
      &::-webkit-scrollbar {
        width: 4px;
      }
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: $border;
    }
    .addPadding {
      padding: 0 px2rem(14px);
    }
  }

  .sub-title {
    color: $light-text;
    margin: px2rem(8px) $normal;
    font-size: $large;
  }

  .noPadding > .sub-title {
    margin: $huge px2rem(12px);
  }

  .dropdown-list {
    .list-content {
      display: inline-block;
      float: left;
      margin-right: 50px;
    }
  }

  .my-description {
    float: right;
    color: $lighter-text;
  }

  .message {
    width: 100%;
    height: 40px;
    background: $success;
    line-height: 40px;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    margin: 20px 0;
  }
</style>
