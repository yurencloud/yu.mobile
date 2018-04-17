<template>
  <div class="yu-list">
    <div class="prepend">
      <i v-if="icon" class="iconfont" :class="[icon]"></i>
      <img v-if="imgSrc" :src="imgSrc" />
      <slot name="prepend" />
    </div>
    <div class="title">
      <div class="main">{{title}}</div>
      <div v-if="description" class="description">{{description}}</div>
    </div>
    <div class="content" :class="[{middle: description}]">
      {{content}}
      <i v-if="arrow" class="iconfont icon-angle-right arrow"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuList',
  props: {
    title: String,
    content: String,
    description: String,
    arrow: Boolean,
    icon: String,
    imgSrc: String,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-list {
    background: #fff;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    font-size: $large;
    padding: 0 px2rem(14px);
    vertical-align: middle;

    .prepend{
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: $tiny;
      i{
        color: $text;
        display: block;
        font-size: px2rem(30px);
      }
      img{
        width: px2rem(30px);
      }
    }

    .title{
      display: inline-block;
      vertical-align: middle;
      .main{
        font-size: $large;
        color: $dark-text;
        padding: px2rem(12px) 0;
      }
      .description{
        font-size: $normal;
        color: $lighter-text;
        padding: 0 0 px2rem(12px) 0;
      }
    }

    .content{
      display: inline-block;
      float: right;
      color: $light-text;
      padding: px2rem(12px) 0;
      &.middle{
      line-height: px2rem(50px);
      }
      .arrow{
        color: $lighter-text;
        font-size: px2rem(26px);
        vertical-align: middle;
      }
    }

  }
</style>
