<template>
  <div v-show="visible" class="yu-modal">
      <div class="modal">
        <i class="iconfont icon-close" @click="handleCancel"></i>
        <div v-if="title" class="title">{{title}}</div>
        <div class="content">
          <slot />
        </div>
        <div class="button" @click="handleConfirm">{{button}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'YuModal',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: String,
    button: {
      type: String,
      default: '确定',
    },
  },
  methods: {
    handleCancel() {
      this.visible = false;
      this.$emit('cancel');
    },
    handleConfirm() {
      this.visible = false;
      this.$emit('confirm');
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-modal {
    font-size: $big;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    left: 0;
    .modal{
      position: absolute;
      bottom: 35%;
      width: 80%;
      left: 10%;
      background-color: #fff;
      border-radius: px2rem(8px);
      text-align: center;
      i.icon-close{
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: px2rem(26px);
        color: $lighter-text;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        &:active{
          transition: background-color .2s;
          background: $active;
        }
      }
      .title{
        height: px2rem(50px);
        line-height: px2rem(50px);
      }
      .content{
        min-height: 50px;
        color: $light-text;
      }
      .button{
        height: px2rem(50px);
        border-top: 1px solid $border;
        line-height: px2rem(50px);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        &:active{
          transition: background-color .2s;
          background: $active;
          border-radius: 0 0 px2rem(8px) px2rem(8px);
        }
      }
    }
  }
</style>
