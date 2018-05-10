<template>
  <yu-list>
    <div class="yu-switch append" slot="append" @click="handleClick" :class="[{disabled:disabled}]">
      <input type="checkbox" :disabled="disabled" :name="name" v-model="checked" :value="value">
      <span class="label" v-if="!after">{{checked?activeLabel||label:inactiveLabel||label}}</span>
      <span class="switch" v-if="visible" :class="[{on:checked},type,{disabled:disabled}]">
        <span class="circle"></span>
        </span>
      <span class="label" v-if="after">{{checked?activeLabel||label:inactiveLabel||label}}</span>
    </div>
  </yu-list>
</template>

<script>
import YuList from './list';

export default {
  name: 'YuSwitch',
  data() {
    return {
      visible: true,
      value: this.checked ? this.activeValue : this.inactiveValue,
      checked: this.on || false,
    };
  },
  props: {
    activeValue: {
      type: [Number, String, Boolean],
      default: true,
    },
    inactiveValue: {
      type: [Number, String, Boolean],
      default: false,
    },
    on: {
      type: Boolean,
      default: false,
    },
    label: String,
    activeLabel: String,
    inactiveLabel: String,
    type: {
      type: String,
      default: 'primary',
    },
    after: Boolean,
    name: String,
    disabled: Boolean,
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.checked = !this.checked;
      this.value = this.checked ? this.activeValue : this.inactiveValue;
      this.$emit('click', this.value);
      if (this.$parent.isField) {
        this.$parent.handleChange({ name: this.name, value: this.value });
      }
    },
  },
  components: {
    YuList,
  },
};
</script>
<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";
  .yu-switch {
    font-size: 0;
    color:$text;
    input{
      display: none;
    }
    display: inline-block;
    span{
      font-size: $big;
      line-height: 30px;
      vertical-align: middle;
    }
    span:nth-child(1){
      margin-right: 8px;
    }
    span:nth-child(3){
      margin-left: 8px;
    }
    .switch {
      font-size: $big;
      display: inline-block;
      width: px2rem(60px);
      height: px2rem(30px);
      background: $dark-border;
      border-radius: px2rem(25px);
      padding: 2px;
      box-sizing: border-box;
      .label{

      }
      .circle {
        box-sizing: border-box;
        display: inline-block;
        width: px2rem(26px);
        height: px2rem(26px);
        background: #fff;
        border-radius: px2rem(20px);
        transition: all .4s ease;
        transform: translateX(px2rem(-20px)) translateY(-4px);
      }
      transition: background-color .4s ease;
      &.on {
        .circle{
          transition: all .4s ease;
          transform: translateX(px2rem(8px)) translateY(-4px);
        }
        @include generalAllColorSwitch();
      }
    }
    &.disabled{
      color:lighten($text,25);
    }
  }
</style>
