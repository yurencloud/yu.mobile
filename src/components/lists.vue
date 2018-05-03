<template>
  <div class="yu-lists" @click="handleClick($event)">
    <div class="lists"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'YuLists',
  methods: {
    handleClick($event) {
      this.$emit('click', $event);
    },
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-lists {
    .yu-list{
      border: none!important;
      .list-box{
        padding-left: $normal;
        border-bottom: 1px solid $border;
        .list{
          padding-left: 0;
        }
      }
      &:last-child{
        .list-box{
          border-bottom: none;
        }
      }
    }
    .lists{
      background: #fff;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
    }

  }
</style>
