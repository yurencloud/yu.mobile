<template>
  <div v-show="visible" class="yu-action">
      <ul class="action">
          <li class="title" v-if="title">{{title}}</li>
          <slot />
          <li class="cancel" @click="handleCancel">取消</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'YuAction',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    handleCancel() {
      this.visible = false;
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-action {
    font-size: $big;
    background-color: rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    .action{
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 0;
      margin: 0;
      background-color: $background;
      li{
        list-style: none;
        display: block;
        width: 100%;
        height: px2rem(50px);
        background: #fff;
        text-align: center;
        line-height: px2rem(50px);
        border-bottom: 1px solid $border;
        /*取消移动端的点击阴影*/
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-size: $big;
        &:active:not(.title){
          transition: background-color .2s;
          background: $active;
        }
        &.title{
          color: $light-text;
        }
        &.cancel{
          margin-top: 8px;
          border-bottom: none;
          border-top: 1px solid $border;
        }
      }
    }
  }
</style>
