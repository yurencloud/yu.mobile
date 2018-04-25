<template>
  <div class="yu-search">
    <input type="text"
           :placeholder="placeholder"
           @focus="handleFocus"
           @blur="handleBlur"
           v-model="value"
    >
    <i class="iconfont icon-search-o" :class="[{focus:focus||value.length>0}]"></i>
    <div class="cancel" :class="[{focus:focus||value.length>0},{showCancel:showCancel}]">取消</div>
  </div>
</template>

<script>
export default {
  name: 'YuSearch',
  data() {
    return {
      value: this.defaultValue || '',
      focus: this.autoFocus,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '搜索',
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    showCancel: Boolean,
    defaultValue: String,
  },
  methods: {
    handleFocus() {
      this.focus = true;
    },
    handleBlur() {
      this.focus = false;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-search {
    display: flex;
    background-color: darken($background, 2.5);
    border-bottom: 1px solid $border;
    padding: 8px;
    position: relative;
    overflow: hidden;

    i {
      position: absolute;
      left: 40%;
      top: 12px;
      font-size: px2rem(26px);
      color: $lighter-text;
      transition: left .4s;
      &.focus {
        left: 5%;
      }
    }
    ::-webkit-input-placeholder {
      transition: all .4s;
      padding-left: 45%;
      font-family: $font-family;
      color: $lighter-text;
    }
    input {
      transition: all .4s;
      outline: none;
      border: none;
      border-radius: 4px;
      width: 100%;
      height: px2rem(30px);
      padding-left: 10%;
      box-sizing: border-box;
      font-family: $font-family;
      font-size: $big;
      &:focus {
        &::-webkit-input-placeholder {
          padding-left: 1%;
        }
      }
    }

    .cancel {
      margin-right: -50px;
      font-size: $big;
      text-align: right;
      color: $primary;
      display: inline-block;
      transition: margin-right .4s;
      width: 50px;
      line-height: px2rem(30px);
      &.focus {
        transition: margin-right .4s;
        margin-right: 0;
      }
      &.showCancel {
        margin-right: 0;
      }
    }
  }
</style>
