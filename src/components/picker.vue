<template>
  <div class="yu-picker">
    <yu-list></yu-list>
    <div class="background">
      <div class="picker">
        <div class="header">
          <div class="cancel">取消</div>
          <div>标题</div>
          <div class="confirm">确认</div>
        </div>
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
                >{{item.label}}</li>
              </ul>
            </div>

            <div v-if="cols>=2" class="scrollList" @scroll="secondScroll($event)">
              <ul>
                <li
                  v-for="(item, index) in options[1]"
                  v-bind:key="item.value"
                  :class="{active:index === firstActive,disabled:item.disabled}"
                >{{item.label}}</li>
              </ul>
            </div>

            <div v-if="cols===3" class="scrollList" @scroll="thirdScroll($event)">
              <ul>
                <li
                  v-for="(item, index) in options[2]"
                  v-bind:key="item.value"
                  :class="{active:index === firstActive,disabled:item.disabled}"
                >{{item.label}}</li>
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
      visible: true,
      value: '',
      label: '',
      selects: [],
      firstActive: 0,
      secondActive: 0,
      thirdActive: 0,
      fix: false,
      scrollTop: 0,
    };
  },
  props: {
    options: Array, // 不联动 [[][][]], 联动 [{}{}{}]
    cols: Number, // 列数
    type: {
      type: String,
      default: 'select', // select 不联动， cascader 联动
    },
  },
  methods: {
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
      }, 400);
    },
    secondScroll($event) {
      if (this.fix) return;
      setTimeout(() => {
        this.secondActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.secondActive * 40;
      }, 400);
    },
    thirdScroll($event) {
      if (this.fix) return;
      setTimeout(() => {
        this.thirdActive = parseInt($event.target.scrollTop / 40, 0);
        $event.target.scrollTop = this.thirdActive * 40;
      }, 400);
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
    width: 100%;
    height: 100%;
    position: relative;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.6);
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
            &:active{
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
            justify-content:center;
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
                  font-size: $normal;
                  text-align: center;
                  display: block;
                  margin: 0 auto;
                  list-style: none;
                  height: $normal-height;
                  line-height: $normal-height;
                  &:hover:not(.disabled) {
                    background-color: $background;
                    line-height: $normal-height;
                  }
                  &.active:not(.disabled){
                    font-weight: bold;
                  }
                  &.disabled{
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
