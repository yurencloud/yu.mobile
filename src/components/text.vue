<template>
  <div class="yu-text">
      <slot/>
  </div>
</template>

<script>

export default {
  name: 'YuText',
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-text {
    color: $light-text;
    font-size: $large;
    padding: $tiny $normal;
  }
</style>
