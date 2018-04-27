<template>
  <div class="yu-tabs">
      <div class="tab"
           v-bind:key="index"
           v-for="(item, index) in tabs"
           :class="[{active: index === activeIndex }]"
           @click="handleClick(index, item)"
           :style="{width: tabs.length>3?'30%':'33.3%'}"
      >
        <i v-if="item.icon" class="iconfont" :class="[item.icon]"></i>
        {{item.label}}
      </div>
  </div>
</template>
<script>
export default {
  name: 'YuTabs',
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    tabs: Array, // [{label,icon}]
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

  .yu-tabs {
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid $border;
    overflow-x: auto;
    white-space: nowrap;
    color: $text;
    font-size: 0;
    &::-webkit-scrollbar {
      height: 0;
    }
    .tab{
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: $big;
      display: inline-block;
      height: px2rem(50px);
      background-color: #fff;
      line-height: px2rem(50px);
      text-align: center;
      &.active{
        color: $primary;
        border-bottom: 2px solid $primary;
      }
    }
  }
</style>
