<template>
  <div id="container" style="margin: 30px">
    <h2>YU.MOBILE</h2>

    <div class="title">按钮</div>

    <div class="sub-title">基础用法</div>

    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';

export default {
  name: 'ViewContainer',
  components: {
    YuButton,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .title {
    color: $text;
    padding: 14px 0;
    margin: 20px 0;
    border-bottom: 1px solid $border;
  }

  .sub-title {
    color: $text;
    padding: 0 8px;
    margin: 20px 0;
    border-left: 4px solid $primary;
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
