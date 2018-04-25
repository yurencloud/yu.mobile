<template>
  <div class="yu-checkbox">
    <yu-lists v-if="!bottom" :header="header" :footer="footer" >
      <yu-list v-for="item in options"
               :class="[{checked: item.checked}]"
               :disabled="disabled || item.disabled"
               :title="item.label"
               :description="item.description"
               click
               @click="handleClick(item)"
      >
        <span class="checkbox" slot="prepend">
             <input type="checkbox"
                    ref="input"
                    :name="name"
                    :value="item.value">
         </span>
      </yu-list>
    </yu-lists>
    <!--footer 如果没有label就显示插件，如果有就只显示label-->
    <yu-text v-if="bottom" :class="[{checked: bottomOption.checked}]" :disabled="bottomOption.disabled" @click="handleClick(bottomOption)">
        <span class="checkbox">
         <input type="checkbox"
                ref="input2"
                :name="name"
                :value="bottomOption.value">
         </span>
         {{bottomOption.label}}
         <slot v-if="!bottomOption.label" name="footer" />
    </yu-text>
  </div>
</template>

<script>
import YuList from './list';
import YuLists from './lists';
import YuText from './text';

export default {
  name: 'YuCheckbox',
  data() {
    return {
      values: [],
      bottomOption: this.options[0],
    };
  },
  props: {
    options: Array,
    value: String,
    name: String,
    disabled: Boolean,
    bottom: Boolean,
    header: String,
    footer: String,
  },
  methods: {
    handleClick(item) {
      // 如果禁用，直接返回
      if (this.disabled) return;
      item.checked = !item.checked;
      if (item.checked) {
        this.values.push(item.value);
      } else {
        this.values.splice(this.values.indexOf(item.value), 1);
      }

      this.$emit('change', this.values, this.name, item.checked);
      this.$emit('click');
      if (this.$parent.isField) {
        this.$parent.handleChange({ value: this.values, name: this.name });
      }
    },
  },
  components: {
    YuList,
    YuLists,
    YuText,
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";

  .yu-checkbox {
    input {
      display: none;
    }

    .checked {
      .checkbox {
        position: relative;
        border: 1px solid $primary;
        border-radius: 50%;
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
          width: px2rem(14px);
          height: px2rem(6px);
          -webkit-transform: rotate(-50deg);
          position: absolute;
          top: 4px;
          left: 1px;
        }
      }
    }

    .checkbox {
      position: relative;
      margin-right: 6px;
      margin-bottom: -6px;
      display: inline-block;
      width: px2rem(20px);
      height: px2rem(20px);
      border: 1px solid $dark-border;
      border-radius: 50%;
      background-color: #fff;
      &:hover {
        border: 1px solid $primary;
      }
    }

    .disabled {
      .checkbox {
        &:hover {
          border: 1px solid $dark-border;
        }
      }
    }

  }
</style>
