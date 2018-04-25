<template>
  <div class="yu-picker">
    <yu-list @click="showPicker" click :title="title" :content="value || placeholder" arrow/>
    <div  v-show="visible" class="background">
      <div class="picker">
        <div class="header">
          <div class="cancel" @click="handleCancel">取消</div>
          <div>标题</div>
          <div class="confirm" @click="handleConfirm">确认</div>
        </div>
        <!--select-->
        <div v-if="type==='select'" class="scrolls"
             @mouseover="handleMouseover"
             @mouseleave="handleMouseleave"
             v-show="visible"
        >
          <div class="line"></div>
          <div class="scrollList" @scroll="firstScroll($event)">
            <ul>
              <li
                v-for="(item, index) in options[0]"
                v-bind:key="item.value"
                :class="{active:index === firstActive,disabled:item.disabled}"
                @click="firstClick(index, $event)"
              >{{item.label}}
              </li>
            </ul>
          </div>

          <div v-if="cols>=2" class="scrollList" @scroll="secondScroll($event)">
            <ul>
              <li
                v-for="(item, index) in options[1]"
                v-bind:key="item.value"
                :class="{active:index === secondActive,disabled:item.disabled}"
                @click="secondClick(index, $event)"
              >{{item.label}}
              </li>
            </ul>
          </div>

          <div v-if="cols===3" class="scrollList" @scroll="thirdScroll($event)">
            <ul>
              <li
                v-for="(item, index) in options[2]"
                v-bind:key="item.value"
                :class="{active:index === thirdActive,disabled:item.disabled}"
                @click="thirdClick(index, $event)"
              >{{item.label}}
              </li>
            </ul>
          </div>
        </div>

        <!--cascader-->
        <div v-if="type==='cascader'" class="scrolls"
             @mouseover="handleMouseover"
             @mouseleave="handleMouseleave"
             v-show="visible"
        >
          <div class="line"></div>
          <div class="scrollList" @scroll="firstScroll($event)">
            <ul>
              <li
                v-for="(item, index) in options"
                v-bind:key="item.value"
                :class="{active:index === firstActive,disabled:item.disabled}"
                @click="firstClick(index, $event)"
              >{{item.label}}
              </li>
            </ul>
          </div>

          <div v-if="cols>=2" class="scrollList" @scroll="secondScroll($event)">
            <ul>
              <li
                v-for="(item, index) in secondOptions"
                v-bind:key="item.value"
                :class="{active:index === secondActive,disabled:item.disabled}"
                @click="secondClick(index, $event)"
              >{{item.label}}
              </li>
            </ul>
          </div>

          <div v-if="cols===3" class="scrollList" @scroll="thirdScroll($event)">
            <ul>
              <li
                v-for="(item, index) in thirdOptions"
                v-bind:key="item.value"
                :class="{active:index === thirdActive,disabled:item.disabled}"
                @click="thirdClick(index, $event)"
              >{{item.label}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YuList from './list';

export default {
  name: 'YuPicker',
  data() {
    return {
      visible: false,
      value: null,
      label: '',
      selects: [],
      firstActive: 0,
      secondActive: 0,
      thirdActive: 0,
      secondOptions: this.options[0].children ? this.options[0].children : null,
      thirdOptions: this.options[0].children && this.options[0].children[0].children ? this.options[0].children[0].children : null,
      fix: false,
      scrollTop: 0,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    options: Array, // 不联动 [[][][]], 联动 [{}{}{}]
    cols: Number, // 列数
    type: {
      type: String,
      default: 'select', // select 不联动， cascader 联动
    },
    title: String,
    split: {
      type: String,
      default: '/',
    },
  },
  methods: {
    showPicker() {
      this.visible = true;
    },
    handleClear() {
      this.value = '';
    },
    handleMouseover() {
      this.scrollTop = document.getElementsByTagName('html')[0].scrollTop;
      document.addEventListener('scroll', this.stopScroll);
    },
    handleMouseleave() {
      document.removeEventListener('scroll', this.stopScroll);
    },
    stopScroll(e) {
      e.target.scrollingElement.scrollTop = this.scrollTop;
    },
    firstScroll($event) {
      if (this.fix) return;
      console.log(3);
      setTimeout(() => {
        console.log(2);
        this.firstActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.firstActive * 40;

        if (this.type === 'select') {
          this.selects[0] = this.options[0][this.firstActive];
        } else {
          // cascader
          const second = this.options[this.firstActive];
          if (second.disabled) {
            this.fix = false;
          } else {
            this.fix = false;
            if (this.remote) { // 异步加载
              this.$emit('firstFetch', second);
              return;
            }
            this.secondOptions = second.children;
            this.thirdOptions = this.secondOptions[0].children;
          }
        }
      }, 400);
    },
    firstClick(index, $event) {
      this.firstActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
      this.selects[0] = this.options[0][this.firstActive];
    },
    secondScroll($event) {
      if (this.fix) return;
      setTimeout(() => {
        this.secondActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.secondActive * 40;
        if (this.type === 'select') {
          this.selects[1] = this.options[1][this.secondActive];
        } else {
          // cascader
          const third = this.options[this.secondActive];
          if (third.disabled) {
            this.fix = false;
          } else {
            this.fix = false;
            if (this.remote) {
              this.$emit('secondFetch', third);
              return;
            }
            this.thirdOptions = third.children;
          }
        }
      }, 400);
    },
    secondClick(index, $event) {
      this.secondActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
      this.selects[1] = this.options[1][this.secondActive];
    },
    thirdScroll($event) {
      if (this.fix) return;
      const the = this;
      this.fix = true;
      setTimeout(() => {
        this.thirdActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.thirdActive * 40;
        this.selects[2] = this.options[2][this.thirdActive];
        the.fix = false;
      }, 400);
    },
    thirdClick(index, $event) {
      this.thirdActive = index;
      $event.target.parentNode.parentNode.scrollTop = index * 40;
      this.selects[2] = this.options[2][this.thirdActive];
    },
    handleCancel() {
      this.visible = false;
    },
    handleConfirm() {
      let first = {},
        second = {},
        third = {};
      if (this.type === 'select') {
        first = this.options[0];
        second = this.cols >= 2 ? this.options[1][this.secondActive] : {};
        third = this.cols === 3 ? this.options[2][this.thirdActive] : {};
      } else {
        first = this.options[this.firstActive];
        second = this.secondOptions ? this.secondOptions[this.secondActive] : {};
        third = this.thirdOptions ? this.thirdOptions[this.thirdActive] : {};
      }
      if (first.disabled || second.disabled || third.disabled) {
        alert('不可以选择无效选项');
        return;
      }
      let value = first.label;
      if (second.label) {
        value += (this.split + second.label);
      }
      if (third.label) {
        value += (this.split + third.label);
      }
      this.value = value;
      this.visible = false;
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

  .yu-picker {
    .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      .picker {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 300px;
        width: 100%;
        background-color: #fff;
        font-size: $big;
        .header {
          display: flex;
          justify-content: space-between;
          line-height: px2rem(50px);

          border-bottom: 1px solid $border;
          .cancel, .confirm {
            color: $primary;
            padding: 0 $normal;
            &:active {
              background-color: $active;
            }
          }
        }
        .line {
          position: absolute;
          top: 130px;
          border-top: 1px solid $border;
          border-bottom: 1px solid $border;
          height: 40px;
          width: 100%;
        }

        .scrolls {
          display: flex;
          justify-content: center;
          z-index: 10000;
          width: 100%;
          /*text-align: center;*/
          .scrollList {
            align-items: center;
            color: $text;
            font-size: 0;
            width: 33.3%;
            white-space: nowrap;
            box-sizing: border-box;
            display: inline-block;
            max-height: 200px;
            overflow-y: overlay;
            overflow-x: hidden;
            &::-webkit-scrollbar {
              width: 0;
            }
            &:hover {
              &::-webkit-scrollbar {
                width: 0px;
              }
            }
            &::-webkit-scrollbar-thumb {
              border-radius: 2px;
              background-color: $border;
            }

            ul {
              display: block;
              margin: 80px auto;
              padding: 0;
              li {
                font-size: $big;
                text-align: center;
                display: block;
                margin: 0 auto;
                list-style: none;
                height: $normal-height;
                line-height: $normal-height;
                color: $lighter-text;
                &.active:not(.disabled) {
                  color: $text;
                }
                &.disabled {
                  color: $lighter-text;
                  cursor: not-allowed;
                }
              }
            }
          }
        }

      }
    }

  }
</style>
