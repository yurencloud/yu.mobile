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
        <div class="container"

        >
          <div class="scrolls">
            <div class="line"></div>
            <div class="scrollList" >
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <!--<li-->
                  <!--v-for="(item, index) in options"-->
                  <!--v-bind:key="item.value"-->
                  <!--:class="{active:index === firstActive,disabled:item.disabled}"-->
                  <!--@click="firstClick(index, $event)"-->
                <!--&gt;{{item.label}}</li>-->
              </ul>
            </div>
            <!--<div class="scrollList" >-->
              <!--<ul>-->
                <!--<li>1</li>-->
                <!--<li>2</li>-->
                <!--<li>3</li>-->
                <!--&lt;!&ndash;<li&ndash;&gt;-->
                  <!--&lt;!&ndash;v-for="(item, index) in secondOptions"&ndash;&gt;-->
                  <!--&lt;!&ndash;v-bind:key="item.value"&ndash;&gt;-->
                  <!--&lt;!&ndash;:class="{active:index === secondActive,disabled:item.disabled}"&ndash;&gt;-->
                  <!--&lt;!&ndash;@click="secondClick(index, $event)"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;{{item.label}}</li>&ndash;&gt;-->
              <!--</ul>-->
            <!--</div>-->
            <!--<div class="scrollList" >-->
              <!--<ul>-->
                <!--<li>1</li>-->
                <!--<li>2</li>-->
                <!--<li>3</li>-->
                <!--&lt;!&ndash;<li&ndash;&gt;-->
                  <!--&lt;!&ndash;v-for="(item, index) in thirdOptions"&ndash;&gt;-->
                  <!--&lt;!&ndash;v-bind:key="item.value"&ndash;&gt;-->
                  <!--&lt;!&ndash;:class="{active:index === thirdActive,disabled:item.disabled}"&ndash;&gt;-->
                  <!--&lt;!&ndash;@click="thirdClick(index, $event)"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;{{item.label}}</li>&ndash;&gt;-->
              <!--</ul>-->
            <!--</div>-->
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
    return {};
  },
  props: {
    cascader: Array,
  },
  methods: {},
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
        .container {
          z-index: 10000;
          width: 100%;
          .scrolls {
            color: $text;
            font-size: 0;
            .scrollList {
              white-space: nowrap;
              font-size: 0;
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
              width: 33.3%;
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

  }
</style>
