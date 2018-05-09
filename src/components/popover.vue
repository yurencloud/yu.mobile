<template>
  <div v-show="visible" class="yu-popover" @click="handleClick($event)">
    <div class="popover">
      <div class="pointer"></div>
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuPopover',
  data() {
    return {
      visible: false,
    };
  },
  props: {
  },
  methods: {
    handleClick($event) {
      if ($event.target.tagName !== 'DIV') return;
      this.visible = false;
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-popover {
    font-size: $big;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .popover{
      position: absolute;
      margin-top: px2rem(60px);
      right: 5%;
      .pointer{
        position: absolute;
        right: px2rem(14px);
        top: px2rem(-4px);
        width: px2rem(8px);
        height: px2rem(8px);
        background-color: #fff;
        transform: rotate(45deg);
      }
      ul{
        margin: 0;
        padding: 0 px2rem(14px);
        background-color: #fff;
        border-radius: 4px;
        li{
          list-style: none;
          display: block;
          height: px2rem(40px);
          line-height: px2rem(40px);
          border-bottom: 1px solid $border;
          min-width: px2rem(100px);
          &:last-child{
            border-bottom: none;
          }
          color: $text;
          i{
            font-size: $huge;
            padding-right: px2rem(14px);
          }
          padding: 0 px2rem(8px);
          /*取消移动端的点击阴影*/
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          &:active{
            background-color: $active;
          }
        }
      }
    }
  }
</style>
