<template>
  <div class="yu-radio">
    <yu-lists>
      <yu-list v-for="item in radioOptions"
               click
               :class="[{checked: item.checked}]"
               :title="item.label"
               :description="item.description"
               :disabled="disabled || item.disabled"
               @click="handleClick(item)">
        <span class="radio" slot="append">
             <input type="radio"
                    ref="input"
                    :name="name"
                    :value="item.value">
        </span>
      </yu-list>
    </yu-lists>
  </div>
</template>

<script>
import YuLists from './lists';
import YuList from './list';

export default {
  name: 'YuRadio',
  data() {
    return {
      value: '',
      radioOptions: this.options,
    };
  },
  props: {
    options: Array,
    name: String,
    disabled: Boolean,
  },
  methods: {
    handleClick(item) {
      // 如果禁用，直接返回
      if (this.disabled) return;
      this.radioOptions.forEach((i) => {
        i.checked = false;
      });
      item.checked = true;
      this.value = item.value;

      this.$emit('change', this.value, this.name, item.checked);
      this.$emit('click');
      if (this.$parent.isField) {
        this.$parent.handleChange({ value: this.value, name: this.name });
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

  .yu-radio {
    input {
      display: none;
    }

    .checked {
      .radio {
        margin-right: px2rem(20px);
        &:after {
          content: '\00a0';
          display: inline-block;
          border: 2px solid $primary;
          border-top-width: 0;
          border-right-width: 0;
          width: px2rem(12px);
          height: px2rem(8px);
          -webkit-transform: rotate(-50deg);
          position: absolute;
        }
      }
    }
  }
</style>
