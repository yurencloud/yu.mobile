<template>
  <div>
    <div>1234</div>
    <yu-refresh :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
      <yu-lists>
      <yu-list :title="item.date" v-bind:key="index" v-for="(item,index) in listdata" />
      </yu-lists>
    </yu-refresh>
  </div>
</template>
<script>
import YuRefresh from '../components/refresh';
import YuLists from '../components/lists';
import YuList from '../components/list';
import YuText from '../components/text';

export default {
  data() {
    return {
      counter: 1, // 当前页
      num: 10, // 一页显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      scrollData: {
        noFlag: false, // 暂无更多数据显示
      },
    };
  },
  components: {
    YuRefresh,
    YuLists,
    YuList,
    YuText,
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const response = [];
      for (let i = 0; i < 20; i++) {
        response.push({
          date: `2017-06-1${i}`,
          portfolio: `1.5195${i}`,
          drop: `${i}+.00 %`,
          state: 1,
        });
      }
      this.listdata = response.slice(0, this.num);
    },
    onRefresh(done) {
      this.getList();
      this.scrollData.noFlag = false;
      this.counter = 1;
      this.pageStart = 0; // 开始页数
      this.pageEnd = 0; // 结束页数
      done(); // call done
    },
    onInfinite(done) {
      this.counter++;
      const end = this.pageEnd = this.num * this.counter;
      let i = this.pageStart = this.pageEnd - this.num;

      const more = this.$el.querySelector('.load-more');
      for (i; i < end; i++) {
        if (i >= 30) {
          more.style.display = 'none'; // 隐藏加载条
          // 走完数据调用方法
          this.scrollData.noFlag = true;
          break;
        } else {
          this.listdata.push({
            date: `2017-06-1${i}`,
            portfolio: `1.5195${i}`,
            drop: `${i}+.00 %`,
            state: 2,
          });
          more.style.display = 'none'; // 隐藏加载条
        }
      }
      done();
    },
  },
};
</script>
<style lang="scss" type="text/scss">
  @import "../assets/css/varible";
  html {
    font-size: $rem;
  }

  h2 {
    font-size: $huge;
  }

  ul{
    margin: 0;
    padding: 0;
  }
</style>
