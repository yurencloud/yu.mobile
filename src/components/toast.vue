<template>
  <div v-show="visible" class="yu-toast">
      <i v-if="icon || status" class="iconfont" :class="[icon,statusIcon[status]]"></i>
      12
  </div>
</template>

<script>
export default {
  name: 'YuToast',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    icon: String,
    status: String,
    time: {
      type: Number,
      default: 2000,
    },
    statusIcon: {
      type: Object,
      default: () => ({
        success: 'icon-check-circle',
        fail: 'icon-close-circle',
        offline: 'icon-sad',
        loading: 'icon-loading',
      }),
    },
  },
  methods: {
    show() {
      this.visible = true;
      if (this.status === 'loading') return;
      setTimeout(() => {
        this.visible = false;
      }, 2000);
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-toast {
    position: fixed;
    top: 45%;
    left: 30%;
    width: 40%;
    background-color: rgba(0, 0, 0, .5);
    font-size: $big;
    padding: px2rem(8px) px2rem(14px);
    border-radius: 4px;
    color: #fff;
    text-align: center;
    i{
      display: block;
      font-size: px2rem(50px);
      &.icon-loading{
      display: block;
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
    }

  }
</style>
