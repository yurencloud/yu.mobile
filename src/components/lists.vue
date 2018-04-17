<template>
  <div class="yu-lists">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YuLists',
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-lists {
    padding: 0 px2rem(14px);
  }
</style>
