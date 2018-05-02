<template>
  <div class="yu-list">
    <div v-if="showPrepend" class="prepend">
      <i v-if="icon" class="iconfont" :class="[icon]"></i>
      <img v-if="imgSrc" :src="imgSrc"/>
      <slot name="prepend"/>
    </div>
    <div class="list-box" :class="[{disabled:disabled},{noPaddingLeft:showPrepend}]" @click="handleClick">
      <div class="list">
        <div v-if="showTitle" class="title">
          <div class="after">
            <div class="main" :class="[{short:short,disabled:disabled}]">{{title}}</div>
            <div v-if="description" class="description">{{description}}</div>
          </div>
        </div>
        <div v-if="showAppend" class="content" :class="[{middle: description}]" :style="{alignItems:contentAlign}">
          <div>
            {{content}}
            <i v-if="arrow" class="iconfont icon-angle-right arrow"></i>
            <slot name="append"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuList',
  props: {
    title: String,
    content: String,
    description: String,
    arrow: Boolean,
    icon: String,
    imgSrc: String,
    header: String,
    footer: String,
    short: Boolean,
    contentAlign: String, // alignItems:flex-start | flex-end | center | baseline | stretch；
    disabled: Boolean,
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit('click');
    },
  },
  computed: {
    showPrepend() {
      return this.icon || this.imgSrc || this.$slots.prepend;
    },
    showAppend() {
      return this.content || this.arrow || this.$slots.append;
    },
  },
  mounted() {
    document.body.addEventListener('touchstart', () => {
    });
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  @import "../assets/css/function";

  .yu-list {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    align-items:center;/*指定垂直居中*/
    .prepend {
       padding: 0 12px;
      i {
        color: $text;
        display: block;
        font-size: px2rem(30px);

      }
      img {
        width: px2rem(30px);
      }
    }
    .list-box {
      display: inline-block;
      width: 100%;

      /*取消移动端的点击阴影*/
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &:active:not(.disabled) {
        transition: background-color .2s;
        background: $active;
      }
      .list {

        font-size: $big;
        padding: 0 px2rem(14px);
        vertical-align: middle;
        display: flex;
        justify-content: space-between;
      }

      &.noPaddingLeft{
        padding-left: 0;
      }
    }

    .title {

      .after {
        display: inline-block;
        vertical-align: middle;
      }

      .main {
        font-size: $big;
        color: $dark-text;
        padding: px2rem(12px) 0;
        &.short{
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          width: 300px;
        }
        &.disabled{
          color: $lighter-text;
        }
      }
      .description {
        font-size: $normal;
        color: $lighter-text;
        padding: 0 0 px2rem(12px) 0;
      }
    }

    .content {
      display:flex;/*Flex布局*/
      align-items:center;/*指定垂直居中*/
      &>div{
        /*display: inline-block;*/
        color: $light-text;
        padding: px2rem(12px) 0;
        min-width: 100px;
        text-align: right;
        .arrow {
          color: $lighter-text;
          font-size: px2rem(22px);
          vertical-align: middle;
        }
      }

    }

  }
</style>
