import YuButton from './components/button';
import YuList from './components/list';
import YuLists from './components/lists';
import YuText from './components/text';
import YuCheckbox from './components/checkbox';
import YuRadio from './components/radio';
import YuInput from './components/input';
import YuPicker from './components/picker';
import YuSwitch from './components/switch';
import YuSearch from './components/search';
import YuNotice from './components/notice';
import YuLoading from './components/loading';
import YuAction from './components/action';
import YuModal from './components/modal';
import YuToast from './components/toast';
import YuResult from './components/result';
import YuTabs from './components/tabs';
import YuTabBar from './components/tab-bar';
import YuNavBar from './components/nav-bar';
import YuPopover from './components/popover';
import YuRefresh from './components/refresh';
import YuButtons from './components/buttons';

// 在Vue全局安装一些快捷方法
function install(Vue, opts = {}) {
  // Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = '1.0.19';

const components = {
  version,
  install,
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
  YuButtons,
};

export default components;

export {
  version,
  install,
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
  YuButtons,
};
