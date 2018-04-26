<template>
  <div id="container" style="margin: 30px">
    <h2>YU.MOBILE</h2>

    <div class="title">按钮</div>


    <div class="mobile-box">
      <yu-text>屏宽按钮</yu-text>
      <div class="addPadding">
        <yu-button fluid>默认按钮</yu-button>
        <yu-button type="primary" fluid>主要按钮</yu-button>
      </div>

      <yu-text>基础用法</yu-text>
      <div class="addPadding">
        <yu-button>默认按钮</yu-button>
        <yu-button type="primary">主要按钮</yu-button>
        <yu-button type="success">成功按钮</yu-button>
        <yu-button type="warming">警告按钮</yu-button>
        <yu-button type="danger">危险按钮</yu-button>
        <yu-button type="info">信息按钮</yu-button>
        <br/>
        <yu-button plain>朴素按钮</yu-button>
        <yu-button type="primary" plain>主要按钮</yu-button>
        <yu-button type="success" plain>成功按钮</yu-button>
        <yu-button type="warming" plain>警告按钮</yu-button>
        <yu-button type="danger" plain>危险按钮</yu-button>
        <yu-button type="info" plain>信息按钮</yu-button>
      </div>

      <yu-text>图标按钮</yu-text>
      <div class="addPadding">
        <yu-button icon="icon-edit" type="primary"/>
        <yu-button icon="icon-accessory" type="primary"/>
        <yu-button icon="icon-trash" type="primary"/>
        <yu-button icon="icon-search-o" type="primary">搜索</yu-button>
        <yu-button icon="icon-upload" type="primary">上传</yu-button>
      </div>

      <yu-text>按钮组</yu-text>
      <!--<yu-buttons>-->
      <!--<yu-button type="primary">-->
      <!--<i class="iconfont icon-angle-left"></i>-->
      <!--上一页-->
      <!--</yu-button>-->
      <!--<yu-button type="primary">-->
      <!--下一页-->
      <!--<i class="iconfont icon-angle-right"></i>-->
      <!--</yu-button>-->
      <!--</yu-buttons>-->
      <!--<yu-buttons>-->
      <!--<yu-button icon="icon-edit" type="primary"/>-->
      <!--<yu-button icon="icon-accessory" type="primary"/>-->
      <!--<yu-button icon="icon-trash" type="primary"/>-->
      <!--</yu-buttons>-->

      <yu-text>禁用状态</yu-text>
      <div class="addPadding">
        <yu-button disabled>默认按钮</yu-button>
        <yu-button type="primary" disabled>主要按钮</yu-button>
        <yu-button type="success" disabled>成功按钮</yu-button>
        <yu-button type="warming" disabled>警告按钮</yu-button>
        <yu-button type="danger" disabled>危险按钮</yu-button>
        <yu-button type="info" disabled>信息按钮</yu-button>
        <br/>
        <yu-button plain disabled>朴素按钮</yu-button>
        <yu-button type="primary" plain disabled>主要按钮</yu-button>
        <yu-button type="success" plain disabled>成功按钮</yu-button>
        <yu-button type="warming" plain disabled>警告按钮</yu-button>
        <yu-button type="danger" plain disabled>危险按钮</yu-button>
        <yu-button type="info" plain disabled>信息按钮</yu-button>
      </div>

      <yu-text>加载中</yu-text>
      <div class="addPadding">
        <yu-button loading type="primary">按钮</yu-button>
      </div>

      <yu-text>不同尺寸</yu-text>
      <div class="addPadding">
        <yu-button type="primary">正常按钮</yu-button>
        <yu-button type="primary" size="medium">中等按钮</yu-button>
        <yu-button type="primary" size="small">小型按钮</yu-button>
        <yu-button type="primary" size="mini">超小按钮</yu-button>
      </div>

      <yu-text>圆形按钮</yu-text>
      <div class="addPadding">
        <yu-button shape="circle" icon="icon-user"/>
        <yu-button shape="circle" icon="icon-user" size="medium"/>
        <yu-button shape="circle" icon="icon-user" size="small"/>
        <yu-button shape="circle" icon="icon-user" size="mini"/>
      </div>

    </div>

    <div class="title">列表</div>
    <div class="mobile-box">
      <yu-text>普通用法</yu-text>
      <yu-list title="我是标题" content="我是内容"/>

      <yu-text>带副标题</yu-text>
      <yu-list title="我是标题" content="我是内容" description="带副标题"/>

      <yu-text>内容为箭头</yu-text>
      <yu-list title="我是标题" arrow/>

      <yu-text>前置图标/图片/自定义</yu-text>
      <yu-list title="我是标题" icon="icon-user" arrow/>
      <yu-list title="我是标题" imgSrc="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow/>
      <yu-list title="我是标题"  arrow>
        <div slot="prepend">
          <yu-button shape="circle" icon="icon-user" style="margin-top: 8px"/>
        </div>
      </yu-list>

      <yu-text>列表组</yu-text>
      <yu-lists>
        <yu-list title="我是标题"  icon="icon-user" arrow description="带副标题"/>
        <yu-list title="我是标题" imgSrc="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow
                 description="带副标题"/>
        <yu-list title="我是标题" arrow description="带副标题">
          <div slot="prepend">
            <yu-button shape="circle" icon="icon-user" style="margin-top: 8px"/>
          </div>
        </yu-list>
      </yu-lists>

      <div class="sub-title">段落</div>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题"/>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" short/>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" content="我是内容"/>

      <div class="sub-title">内容对齐</div>
      <yu-list title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题"
               content="我是内容"
               content-align="flex-end"
      />

      <div class="sub-title">自定义内容</div>
      <yu-list title="我是标题">
        <yu-button type="primary" slot="append" style="margin: 0;" size="mini">确认</yu-button>
      </yu-list>

      <div class="sub-title">禁用列表</div>
      <yu-list title="我是标题" disabled/>

      <yu-list/>
    </div>

    <div class="title">文本</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-text>我是普通文本</yu-text>
    </div>

    <div class="title">复选框</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-checkbox name="b" :options="options"/>

      <div class="sub-title">禁止选项</div>
      <yu-checkbox name="a" :options="options2"/>

      <div class="sub-title">禁止全部</div>
      <yu-checkbox name="a" :options="options2" disabled/>

      <div class="sub-title">列表外底部选项</div>
      <yu-checkbox name="c" :options="options3" bottom>
        <span slot="footer">我已经阅读 <a href="">协议</a></span>
      </yu-checkbox>
      >
    </div>

    <div class="title">单选框</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-radio name="d" :options="options"/>

      <div class="sub-title">禁用选项</div>
      <yu-radio name="d" :options="options2"/>

      <div class="sub-title">禁止全部</div>
      <yu-radio name="d" :options="options" disabled/>
    </div>

    <div class="title">输入框</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname1"/>

      <div class="sub-title">多行输入</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname1" textarea :rows="2" :max="5" wordCount/>

      <div class="sub-title">自动光标</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname2" autofocus />

      <div class="sub-title">可清除输入</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname3" clear/>

      <div class="sub-title">无标题</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname4"/>

      <div class="sub-title">自定义图标/图片/组件</div>
      <yu-input icon="icon-user" placeholder="请输入名字" name="myname"/>
      <yu-input img-src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" placeholder="请输入名字"
                name="myname5"/>

      <div class="sub-title">自定义后缀</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname5" extra="元"/>
      <div class="sub-title">格式</div>
      <yu-input title="银行卡" placeholder="请输入" name="myname5" format="bank" type="tel"/>
      <yu-input title="手机号" placeholder="请输入" name="myname5" format="phone" type="tel"/>
      <yu-input title="密码" placeholder="请输入" name="myname5" type="password"/>
      <yu-input title="数字键盘" placeholder="请输入" name="myname5" type="number"/>
      <div class="sub-title">只读</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname2" readonly/>
      <div class="sub-title">禁用</div>
      <yu-input title="名字" placeholder="请输入名字" name="myname2" disabled/>
      <div class="sub-title">输入组</div>
      <yu-lists>
        <yu-input title="名字" placeholder="请输入名字" name="myname1"/>
        <yu-input title="名字" placeholder="请输入名字" name="myname2" autofocus/>
        <yu-input title="名字" placeholder="请输入名字" name="myname3" clear/>
      </yu-lists>

      <div style="margin: 50px"></div>
    </div>

    <div class="title">选择器</div>
    <div class="mobile-box">
      <!--<div class="sub-title">单列不联动</div>-->
      <!--<yu-picker :options="pickerOptions"/>-->

      <!--<div class="sub-title">多列不联动</div>-->
      <!--<yu-picker :options="pickerOptions" :cols="3"/>-->

      <div class="sub-title">多列联动</div>
      <yu-picker title="输入地址" :options="cascaderOptions" :cols="3" type="cascader"/>

    </div>

    <div class="title">滑动开关</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-switch />
    </div>

    <div class="title">搜索栏</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-search/>
    </div>

    <div class="title">通告栏</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-notice>中华人民共合国万岁中华人民共合国万岁中华人民共合国万岁</yu-notice>

      <div class="sub-title">滚动文字</div>
      <yu-notice marquee>中华人民共合国万岁中华人民共合国万岁中华人民共合国万岁</yu-notice>

      <div class="sub-title">可点击</div>
      <yu-notice arrow>中华人民共合国万岁</yu-notice>

      <div class="sub-title">可关闭</div>
      <yu-notice close>中华人民共合国万岁</yu-notice>


    </div>

    <div class="title">加载器</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <yu-loading />

      <div class="sub-title">添加提示语</div>
      <yu-loading >加载中...</yu-loading>
      <div class="sub-title">变换大小</div>
      <yu-loading size="large" >加载中...</yu-loading>
      <yu-loading size="big" >加载中...</yu-loading>
      <div class="sub-title" >同行</div>
      <yu-loading inline >加载中...</yu-loading>
      <yu-loading inline size="large" >加载中...</yu-loading>
      <yu-loading inline size="big" >加载中...</yu-loading>
      <div class="sub-title">左右</div>
      <yu-loading align="left" >加载中...</yu-loading>
      <yu-loading align="center" >加载中...</yu-loading>
      <yu-loading align="right" >加载中...</yu-loading>
    </div>

    <div class="title">动作菜单</div>
    <div class="mobile-box">
      <div class="sub-title">普通用法</div>
      <div class="addPadding">
      <yu-button fluid @click="activeAction">默认状态</yu-button>
      <yu-button fluid>默认状态</yu-button>
      </div>
      <yu-action ref="action" title="我是标题">
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </yu-action>
    </div>

    <div class="title">对话框</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-text>
        <yu-button fluid @click="activeModal">默认状态</yu-button>
      </yu-text>
      <yu-modal ref="modal" title="我是标题">
          确认确认确认确认
      </yu-modal>
    </div>

    <div class="title">提示框</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-text>
        <yu-button fluid @click="activeToast('one')">纯文字</yu-button>
      </yu-text>
      <yu-text>
        <yu-button fluid @click="activeToast('two')">带图标</yu-button>
      </yu-text>
      <yu-text>
        <yu-button fluid @click="activeToast('three')">不同状态</yu-button>
      </yu-text>
      <yu-toast ref="one" content="纯文字"/>
      <yu-toast ref="two" content="带图标" icon="icon-check"/>
      <yu-toast ref="three" content="不同状态" status="success"/>
    </div>

    <div class="title">结果页</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-result title="支付成功" content="恭喜啊" status="alipay"/>
      <yu-result title="支付成功" content="恭喜啊" status="wechat"/>
      <yu-result title="支付成功" content="恭喜啊" status="success"/>
      <yu-result title="支付成功" content="恭喜啊" status="fail"/>
      <yu-result title="支付成功" content="恭喜啊" status="wait"/>
      <yu-result title="支付成功" content="恭喜啊" status="warn"/>
    </div>

    <div class="title">标签页</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-tabs :tabs="tabs" @switch="handleSwitch"/>
      <yu-text v-show="activeTab === 0">1</yu-text>
      <yu-text v-show="activeTab === 1">2</yu-text>
      <yu-text v-show="activeTab === 2">3</yu-text>
      <yu-text v-show="activeTab === 3">4</yu-text>
    </div>

    <div class="title">标签栏</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-tab-bar :tabBar="tabBar" @switch="handleSwitchBar"/>
      <yu-text v-show="activeTabBar === 0">1</yu-text>
      <yu-text v-show="activeTabBar === 1">2</yu-text>
      <yu-text v-show="activeTabBar === 2">3</yu-text>
      <yu-text v-show="activeTabBar === 3">4</yu-text>
    </div>

    <div class="title">头部导航</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-nav-bar @clickMenu="showPopover"/>
    </div>

    <div class="title">气泡菜单</div>
    <div class="mobile-box" style="box-sizing: padding-box">
      <div class="sub-title">普通用法</div>
      <yu-popover ref="popover">
        <li>
          <i class="iconfont icon-camera"></i>相机
        </li>
        <li>
          <i class="iconfont icon-qrcode"></i>二维码
        </li>
        <li>
          <i class="iconfont icon-question"></i>帮助
        </li>
      </yu-popover>
    </div>





    <div style="margin-bottom: 400px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';
import YuList from '../components/list';
import YuLists from '../components/lists';
import YuText from '../components/text';
import YuCheckbox from '../components/checkbox';
import YuRadio from '../components/radio';
import YuInput from '../components/input';
import YuPicker from '../components/picker';
import YuSwitch from '../components/switch';
import YuSearch from '../components/search';
import YuNotice from '../components/notice';
import YuLoading from '../components/loading';
import YuAction from '../components/action';
import YuModal from '../components/modal';
import YuToast from '../components/toast';
import YuResult from '../components/result';
import YuTabs from '../components/tabs';
import YuTabBar from '../components/tab-bar';
import YuNavBar from '../components/nav-bar';
import YuPopover from '../components/popover';
import YuRefresh from '../components/refresh';

export default {
  name: 'ViewContainer',
  data() {
    return {

      activeTab: 0,
      activeTabBar: 0,
      tabs: [
        { label: '标签一', icon: 'icon-user' },
        { label: '标签二', icon: 'icon-home' },
        { label: '标签三' },
        { label: '标签四' },
      ],
      tabBar: [
        { label: '标签一', icon: 'icon-user' },
        { label: '标签二', icon: 'icon-home' },
        { label: '标签三' },
        { label: '标签四' },
      ],
      options: [
        { value: 0, label: '博士', description: '正经的', checked: false },
        { value: 1, label: '本科', checked: false },
        { value: 2, label: '高中', checked: false },
      ],
      options2: [
        { value: 0, label: '博士', checked: false },
        { value: 1, label: '本科', checked: false, disabled: true },
        { value: 2, label: '高中', checked: false },
      ],
      options3: [
        { value: 0, checked: false },
      ],
      inputOptions: [
        { title: '名字', type: 'text', placeholder: '请输入名字', name: 'myname' },
        { title: '名字', type: 'text', placeholder: '请输入名字', name: 'myname1', autofocus: true },
        { title: '名字', type: 'text', placeholder: '请输入名字', name: 'myname2', clear: true },
        { type: 'text', placeholder: '请输入名字', name: 'myname2', icon: 'icon-user' },
        {
          type: 'text',
          placeholder: '请输入名字',
          name: 'myname2',
          imgSrc: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        },
        { type: 'text', placeholder: '请输入名字', name: 'myname2', showTitle: false },
        { title: '名字', type: 'text', placeholder: '请输入名字', name: 'myname2', extra: '元' },
        { title: '银行卡', type: 'tel', placeholder: '请输入', name: 'myname2', format: 'bank' },
        { title: '手机号', type: 'tel', placeholder: '请输入', name: 'myname2', format: 'phone' },
        { title: '密码', type: 'password', placeholder: '请输入', name: 'myname2' },
        { title: '数字键盘', type: 'number', placeholder: '请输入', name: 'myname2' },
        { title: '默认值', type: 'text', placeholder: '请输入', name: 'myname2', value: '默认值' },
        { title: '只读', type: 'text', placeholder: '请输入', name: 'myname2', value: '默认值', readonly: true },
        { title: '禁用', type: 'text', placeholder: '请输入', name: 'myname2', disabled: true },
      ],
      pickerOptions: [
        [
          { value: 0, label: '博士' },
          { value: 1, label: '本科' },
          { value: 2, label: '高中' },
        ],
        [
          { value: 0, label: '博士' },
          { value: 1, label: '本科' },
          { value: 2, label: '高中' },
        ],
        [
          { value: 0, label: '博士' },
          { value: 1, label: '本科' },
          { value: 2, label: '高中' },
        ],
      ],
      cascaderOptions: [
        {
          label: '浙江',
          value: '1',
          children: [
            {
              label: '杭州',
              value: '11',
              children: [{ label: '滨江', value: '111' }],
            },
          ],
        },
        {
          label: '山东',
          value: '2',
          children: [
            {
              label: '济南',
              value: '22',
              children: [{ label: '小区', value: '222' }],
            },
          ],
        },
        {
          label: '福建',
          value: '3',
          children: [
            {
              label: '厦门',
              value: '33',
              children: [{ label: '思明', value: '333' }],
            },
          ],
        },
      ],
    };
  },
  methods: {
    activeAction() {
      this.$refs.action.visible = true;
    },
    activeModal() {
      this.$refs.modal.visible = true;
    },
    activeToast(item) {
      this.$refs[item].show();
    },
    handleSwitch(index, item) {
      this.activeTab = index;
    },
    handleSwitchBar(index, item) {
      this.activeTabBar = index;
    },
    showPopover() {
      this.$refs.popover.visible = true;
    },

  },
  components: {
    YuButton,
    YuList,
    YuLists,
    YuText,
    YuCheckbox,
    YuRadio,
    YuInput,
    YuPicker,
    YuSwitch,
    YuSearch,
    YuNotice,
    YuLoading,
    YuAction,
    YuModal,
    YuToast,
    YuResult,
    YuTabs,
    YuTabBar,
    YuNavBar,
    YuPopover,
    YuRefresh,
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

  #container > .title {
    color: $text;
    padding: $normal 0;
    margin: $huge 0;
    font-size: $huge;
    border-bottom: 1px solid $border;
  }

  .mobile-box {
    height: 667px;
    width: 375px;
    border: 1px solid $border;
    border-radius: 10px;
    background: $background;
    overflow-y: scroll;
    font-size: 0;
    padding: 0;
    &::-webkit-scrollbar {
      width: 0;
    }
    &:hover {
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: $border;
    }
    .addPadding {
      padding: 0 px2rem(14px);
    }
  }

  .sub-title {
    color: $light-text;
    margin: px2rem(8px) $normal;
    font-size: $big;
  }

  .noPadding > .sub-title {
    margin: $huge px2rem(12px);
  }

  .dropdown-list {
    .list-content {
      display: inline-block;
      float: left;
      margin-right: 50px;
    }
  }

  .my-description {
    float: right;
    color: $lighter-text;
  }

  .message {
    width: 100%;
    height: 40px;
    background: $success;
    line-height: 40px;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    margin: 20px 0;
  }
</style>
