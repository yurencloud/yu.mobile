<template>
  <div class="yu-nav-bar">
    <div v-if="showBack" class="back" @clikc="handleClickBack">
      <i class="iconfont icon-angle-left"></i>
      <span v-if="back">{{back}}</span>
    </div>
    <div class="title" >{{title}}</div>
    <div v-if="showMenu" class="menu" @click="handleClickMenu">
      <span v-if="menu">{{menu}}</span>
      <i class="iconfont icon-bar-dot-h"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuNavBar',
  data() {
    return {};
  },
  props: {
    back: String,
    menu: String,
    title: String,
    showBack: {
      type: Boolean,
      default: true,
    },
    showMenu: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClickBack() {
      this.$emit('clickBack');
    },
    handleClickMenu() {
      this.$emit('clickMenu');
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-nav-bar {
    z-index: 1000;
    font-size: $big;
    height: px2rem(50px);
    background-color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    line-height: px2rem(50px);
    text-align: center;
    display: flex;
    .back {
      span {
        display: inline-block;
        vertical-align: top;
      }
      width: 20%;
      i {
        font-size: px2rem(24px);
      }
      /*取消移动端的点击阴影*/
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &:active{
        background-color: $active;
      }
    }
    .title {
      width: 80%;
    }
    .menu {
      width: 20%;
      span {
        display: inline-block;
        vertical-align: top;
      }
      i {
        font-size: px2rem(24px);
      }
      /*取消移动端的点击阴影*/
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &:active{
        background-color: $active;
      }
    }
  }
</style>
