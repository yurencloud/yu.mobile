<template>
  <div class="yu-lists">
    <yu-text v-if="header">{{header}}</yu-text>
    <div class="lists"><slot/></div>
    <yu-text v-if="footer">{{footer}}</yu-text>
  </div>
</template>

<script>
import YuText from './text';

export default {
  name: 'YuLists',
  props: {
    header: String,
    footer: String,
  },
  components: {
    YuText,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-lists {
    .lists{
      background: #fff;
      border-top: 1px solid $border;
      border-bottom: 1px solid $border;
    }
    .yu-list{
      .list-box{
        padding-left: $normal;
      }
      &:first-child{
        .list{
          border-top: none;
        }
      }
      &:last-child{
        .list{
          border-bottom: none;
          margin-bottom: 1px;
        }
      }
    }


  }
</style>
