<template>
  <div class="yu-text" @click="handleClick" :class="[{disabled: disabled}]">
      <slot/>
  </div>
</template>

<script>

export default {
  name: 'YuText',
  props: {
    disabled: Boolean,
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-text {
    color: $light-text;
    font-size: $big;
    padding: $tiny $normal;
  }
</style>
