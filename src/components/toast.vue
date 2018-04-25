<template>
  <div v-show="visible" class="yu-toast">
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
  },
  methods: {
    show() {
      this.visible = true;
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
    left: 45%;
    width: 30%;
    background-color: rgba(0, 0, 0, .5);
  }
</style>
