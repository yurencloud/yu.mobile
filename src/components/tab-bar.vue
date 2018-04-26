<template>
  <div class="yu-tab-bar" :class="[{hide: hide}]">
      <div class="tab-bar"
           v-bind:key="index"
           v-for="(item, index) in tabBar"
           :class="[{active: index === activeIndex, icon: item.icon }]"
           @click="handleClick(index, item)"
      >

          <i v-if="item.icon" class="iconfont" :class="[item.icon]">
            <span v-if="item.badge" class="badge">{{item.badge}}</span>
            <span v-if="item.dot" class="dot"></span>
          </i>
          {{item.label}}
      </div>
  </div>
</template>
<script>
export default {
  name: 'YuTabBar',
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    tabBar: Array, // [{label,icon}]
    hide: Boolean,
  },
  methods: {
    handleClick(index, item) {
      this.activeIndex = index;
      this.$emit('switch', index, item);
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-tab-bar {
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid $border;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    color: $text;
    transition: all .4s;
    &.hide{
      transform: translateY(50px);
    }
    i{
      display: block;
      font-size: $huge;
      position: relative;
      width: 30px;
      height: 20px;
      margin: 3px auto 2px auto;
      .dot{
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #FF5B05;
      }
      .badge{
        display: block;
        position: absolute;
        top: 0;
        right: -10px;
        height: 16px;
        line-height: 16px;
        font-size: px2rem(12px);
        padding: 0 4px;
        text-align: center;
        font-family: $font-family;
        color: #fff;
        border-radius: 12px;
        background-color: #FF5B05;
      }
    }
    .tab-bar{
      flex-grow: 1;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: $big;
      display: inline-block;
      height: px2rem(50px);
      background-color: #fff;
      line-height: px2rem(50px);
      text-align: center;
      &.active{
        color: $primary;
      }
      &.icon{
        font-size: $tiny;
        line-height: px2rem(25px);
      }
    }
  }
</style>
