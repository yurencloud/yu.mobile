<template>
  <div class="yu-search">
    <input type="text"
           :placeholder="placeholder"
           @focus="handleFocus"
           @blur="handleBlur"
           ref="input"
           v-model="value"
    >
    <i class="iconfont icon-search-o search" :class="[{focus:focus||value.length>0},{showCancel:showCancel}]"></i>
    <i v-if="clear" v-show="value.length>0" class="iconfont icon-close-circle clear" @click="handleClear"></i>
    <div class="cancel" :class="[{focus:focus||value.length>0},{showCancel:showCancel}]" @click="handleCancel">取消</div>
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
    showCancel: Boolean, // 一直显示取消按钮
    defaultValue: String,
    clear: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleFocus() {
      this.focus = true;
      this.$emit('focus');
    },
    handleBlur() {
      this.focus = false;
      this.$emit('blur');
    },
    handleCancel() {
      this.value = '';
    },
    handleClear() {
      this.focus = true;
      this.value = '';
      this.$refs.input.focus();
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

    i.search {
      position: absolute;
      left: 40%;
      top: 10px;
      font-size: px2rem(26px);
      color: $lighter-text;
      transition: left .4s;
      &.focus {
        left: 5%;
      }
      &.showCancel:not(.focus) {
        left: 36%;
      }
    }

    i.clear{
      position: absolute;
      right:18%;
      top: 12px;
      font-size: px2rem(22px);
      color: $lighter-text;
      transition: left .4s;
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
