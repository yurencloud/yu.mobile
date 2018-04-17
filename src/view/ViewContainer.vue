<template>
  <div id="container" style="margin: 30px">
    <h2>YU.MOBILE</h2>

    <div class="title">按钮</div>


    <div class="mobile-box">
      <div class="sub-title">屏宽按钮</div>
      <div class="addPadding">
        <yu-button fluid>默认按钮</yu-button>
        <yu-button type="primary" fluid>主要按钮</yu-button>
      </div>

      <div class="sub-title">基础用法</div>
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

      <div class="sub-title">图标按钮</div>
      <div class="addPadding">
        <yu-button icon="icon-edit" type="primary"/>
        <yu-button icon="icon-accessory" type="primary"/>
        <yu-button icon="icon-trash" type="primary"/>
        <yu-button icon="icon-search-o" type="primary">搜索</yu-button>
        <yu-button icon="icon-upload" type="primary">上传</yu-button>
      </div>

      <div class="sub-title">按钮组</div>
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

      <div class="sub-title">禁用状态</div>
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

      <div class="sub-title">加载中</div>
      <div class="addPadding">
        <yu-button loading type="primary">按钮</yu-button>
      </div>

      <div class="sub-title">不同尺寸</div>
      <div class="addPadding">
        <yu-button type="primary">正常按钮</yu-button>
        <yu-button type="primary" size="medium">中等按钮</yu-button>
        <yu-button type="primary" size="small">小型按钮</yu-button>
        <yu-button type="primary" size="mini">超小按钮</yu-button>
      </div>

      <div class="sub-title">圆形按钮</div>
      <div class="addPadding">
        <yu-button shape="circle" icon="icon-user"/>
        <yu-button shape="circle" icon="icon-user" size="medium"/>
        <yu-button shape="circle" icon="icon-user" size="small"/>
        <yu-button shape="circle" icon="icon-user" size="mini"/>
      </div>

    </div>

    <div class="title">列表</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-list title="我是标题" content="我是内容" />

      <div class="sub-title">带副标题</div>
      <yu-list title="我是标题" content="我是内容" description="带副标题"/>

      <div class="sub-title">内容为箭头</div>
      <yu-list title="我是标题" arrow description="带副标题"/>

      <div class="sub-title">前置图标/图片/自定义</div>
      <yu-list title="我是标题" icon="icon-user" arrow description="带副标题"/>
      <yu-list title="我是标题" imgSrc="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow description="带副标题"/>
      <yu-list title="我是标题" arrow description="带副标题">
        <div slot="prepend">
          <yu-button shape="circle" icon="icon-user" style="margin-top: 8px"/>
        </div>
      </yu-list>

    </div>
    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';
import YuList from '../components/list';

export default {
  name: 'ViewContainer',
  components: {
    YuButton,
    YuList,
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
