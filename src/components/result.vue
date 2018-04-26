<template>
  <div class="yu-result">
    <i v-if="status" class="iconfont icon-check-circle status" :class="[defaultStatus[status]]"></i>
    <slot />
    <div class="title">{{title}}</div>
    <div v-if="content" class="content">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'YuResult',
  data() {
    return {
    };
  },
  props: {
    title: String,
    content: String,
    status: String,
    defaultStatus: {
      type: Object,
      default: () => ({
        alipay: 'icon-alipay primary',
        wechat: 'icon-wechat success',
        success: 'icon-check-circle primary',
        fail: 'icon-close-circle danger',
        wait: 'icon-clock success',
        warn: 'icon-warning-circle warming',
      }),
    },
  },
  methods: {
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-result {
    font-size: $big;
    text-align: center;
    background-color: #fff;
    width: 100%;
    padding:  $normal 0;
    border-bottom: 1px solid $border;
    i.status{
      font-size: px2rem(80px);
    }

    i.primary{
      color: $primary;
    }
    i.success{
      color: $success;
    }
    i.warming{
      color: $warming;
    }
    i.danger{
      color: $danger;
    }
    .title{
      font-size: $huge;
      padding:  0 $normal;
    }
    .content{
      font-size: $big;
      color: $light-text;
      margin-top: $normal;
      padding:  0 $normal;
    }
  }
</style>
