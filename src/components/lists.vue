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
      .list-box{
        padding-left: $normal;
        .list{
          border-top: none!important;
          margin-bottom: 0!important;
        }
      }
      &:first-child{
        .list{
          border-top: none!important;
        }
      }
      &:last-child{
        .list{
          border-bottom: none!important;
          margin-bottom: 1px;
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
