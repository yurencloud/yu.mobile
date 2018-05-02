<template>
  <yu-list :show-title="showTitle" :title="title" class="yu-input" :icon="icon" :imgSrc="imgSrc" :disabled="disabled">
    <div slot="append" class="append">
      <input v-if="!textarea" :type="type"
             :name="name"
             :placeholder="placeholder"
             :autofocus="autofocus"
             @blur="handleBlur($event)"
             @keyup="handleKeyup($event)"
             :readonly="readonly || disabled"
             v-model="value"
      >
      <textarea v-if="textarea" :type="type"
                :name="name"
                :placeholder="placeholder"
                :autofocus="autofocus"
                @blur="handleBlur($event)"
                @keyup="handleKeyup($event)"
                :readonly="readonly || disabled"
                v-model="value"
                :rows="rows"
      >
      </textarea>
      <span v-if="wordCount" class="wordCount">{{value.length}}<span>/{{max}}</span></span>
      <i v-if="clear&&showClear" class="iconfont icon-close-circle yu-close" @click="handleClear($event)"></i>
      <span class="extra">{{extra}}</span>
    </div>
  </yu-list>
</template>

<script>
import YuList from './list';
import YuText from './text';

export default {
  name: 'YuInput',
  data() {
    return {
      value: this.defaultValue || '',
      showClear: false,
    };
  },
  props: {
    title: String,
    options: Array,
    showTitle: {
      type: Boolean,
      default: true,
    },
    icon: String,
    imgSrc: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    name: String,
    placeholder: String,
    autofocus: Boolean,
    readonly: Boolean,
    defaultValue: String,
    clear: Boolean,
    extra: String,
    format: String,
    rows: Number, // 多行显示
    textarea: Boolean,
    max: Number, // 字数限制
    wordCount: Boolean,
  },
  methods: {
    handleClear($event) {
      this.value = '';
      this.showClear = false;
      this.$emit('clear', $event);
    },
    handleKeyup($event) {
      // 如果次数过长，则剪切
      if (this.max && this.value.length > this.max) {
        this.value = this.value.substr(0, this.max);
      }
      if (this.clear && this.value.trim().length > 0) {
        this.showClear = true;
      }
      if (this.format === 'bank') {
        const str = this.value.replace(/[^\d]/g, '');
        this.value = str.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
      }
      if (this.format === 'phone') {
        this.value = this.value.replace(/[^\d]/g, '');
      }
      this.$emit('keyup', $event);
    },
    handleBlur($event) {
      this.$emit('blur', $event);
    },
  },
  components: {
    YuList,
    YuText,
  },
};
</script>

<style lang="scss" type="text/scss">
  @import "../assets/css/varible";

  .yu-input {
    .list-box {
      &:active {
        background: #fff!important;
      }
      // TODO 修复list 样式
    }
    .title {
      width: 100px;
    }
    .content {
      width: 100%;
      .append {
        position: relative;
        .extra {
          float: right;
        }
        .yu-close {
          vertical-align: top;
          display: inline-block;
          font-size: 20px;
          color: $lighter-text;
          &:hover {
            color: $primary;
          }
        }
        input {
          display: inline-block;
          border: none;
          outline: none;
          font-size: $big;
          font-family: $font-family;
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: $lighter-text;
          }

          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: $lighter-text;
          }

          &:-ms-input-placeholder {
            color: $lighter-text;
          }

          &::-webkit-input-placeholder {
            color: $lighter-text;
          }
        }

        textarea {
          display: inline-block;
          border: none;
          outline: none;
          font-size: $big;
          font-family: $font-family;
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: $lighter-text;
          }

          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: $lighter-text;
          }

          &:-ms-input-placeholder {
            color: $lighter-text;
          }

          &::-webkit-input-placeholder {
            color: $lighter-text;
          }
          resize: none;
        }

        .wordCount {
          position: absolute;
          bottom: 4px;
          right: 6px;
        }
      }
    }
  }
</style>
