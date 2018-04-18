<template>
  <div class="yu-checkbox">
    <yu-lists>
      <yu-list v-for="item in checkboxOptions"  :title="item.label" click @click="handleClick($event, item)">
        <span class="checkbox" slot="prepend" >
             <input type="checkbox"
             ref="input"
             :name="name"
             :value="value">
         </span>
      </yu-list>
    </yu-lists>
  </div>
</template>

<script>
import YuList from './list';
import YuLists from './lists';

export default {
  name: 'YuCheckbox',
  data() {
    return {
      checkboxOptions: this.options,
      checked: [],
    };
  },
  props: {
    options: Array,
    value: String,
    name: String,
  },
  methods: {
    handleClick($event, item) {
      // 如果禁用，直接返回
      if (this.disabled) return;
      item.checked = !item.checked;
      // $event.target.classList.add('checked');

      this.$emit('change', this.value, this.name, item.checked);
      this.$emit('click');
      if (this.$parent.isField) {
        this.$parent.handleChange({ value: this.isChecked ? this.value : '', name: this.name });
      }
    },
  },
  components: {
    YuList,
    YuLists,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-checkbox {
    input {
      display: none;
    }
    .checked{
      .checkbox{
      position: relative;
      border: 1px solid $primary;
      border-radius: 2px;
      background-color: $primary;
      & + span {
        color: $primary;
      }
      &:after {
        content: '\00a0';
        display: inline-block;
        border: 2px solid #fff;
        border-top-width: 0;
        border-right-width: 0;
        width: 10px;
        height: 4px;
        -webkit-transform: rotate(-50deg);
        position: absolute;
        top: 3px;
        left: 1px;
      }
      }
    }
    .checkbox {
      margin-right: 6px;
      margin-bottom: -2px;
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid $dark-border;
      border-radius: 2px;
      background-color: #fff;
      &:hover {
        border: 1px solid $primary;
      }
    }

  }
</style>
