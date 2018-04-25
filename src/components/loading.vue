<template>
  <div v-if="loading" class="yu-loading" :class="[align,size,{inline:inline}]">
    <i class="iconfont icon-loading loading" ></i>
    <div class="loading-text"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'YuLoading',
  props: {
    size: String,
    align: String,
    inline: Boolean,
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  .yu-loading {
    font-size: $big;
    color:$text;
    margin-right: 8px;
    text-align: center;
    &.inline{
      display: inline-block;
      .loading-text{
        display: inline-block;
      }
    }
    &.large{
      height: px2rem(30px);
      font-size: px2rem(20px);
      i{
        font-size: px2rem(24px);
      }
    }
    &.big{
      height: px2rem(40px);
      font-size: px2rem(30px);
      i{
        font-size: px2rem(36px);
      }
    }
    // loading动画
    i.loading{
      display: inline-block;
      animation: loading 2s linear infinite;
      @keyframes loading {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    &.left{
      text-align: left;
    }
    &.right{
      text-align: right;
    }
    &.center{
      text-align: center;
    }
  }
</style>
