<template>
  <div v-show="visible" class="yu-notice" @click="handleClick">
    <div class="left">
      <i class="iconfont" :class="[icon]"></i>
      <marquee v-if="marquee" class="text">
        <slot/>
      </marquee>
      <div v-if="!marquee" class="text">
        <slot/>
      </div>
    </div>
    <div class="right">
      <i v-if="arrow" class="iconfont icon-angle-right"></i>
      <i v-if="close" class="iconfont icon-close right" @click="handleClose"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuNotice',
  data() {
    return {
      visible: true,
    };
  },
  props: {
    icon: {
      type: String,
      default: 'icon-voice',
    },
    marquee: Boolean,
    close: Boolean,
    arrow: Boolean,
  },
  methods: {
    handleClick(){
      this.$emit('click');
    },
    handleClose(){
      this.visible = false;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-notice {
    width: 100%;
    padding: 8px 0;
    background-color: #FEFCEC;
    color: $danger;
    font-size: $large;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    box-sizing: border-box;
    .left {
      width: 90%;
      i{
        margin-left: 20px;
      }
      marquee.text {
        width: 88%;
        white-space: nowrap;
        vertical-align: top;
        display: inline-block;
        overflow: hidden;
      }
      div.text {
        vertical-align: bottom;
        width: 88%;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
      }
    }
    .right{
      width: 10%;
      text-align: center;
      i {
        font-size: $huge;
        padding-right: 8px;
      }
    }

  }
</style>
