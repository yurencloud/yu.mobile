<template>
  <div id="container">
    <yu-picker :options="pickerOptions" :cols="3"/>
  </div>
</template>

<script>
import 'whatwg-fetch';
import YuButton from '../components/button';
import YuPicker from '../components/picker';

export default {
  name: 'ViewContainer2',
  data() {
    return {
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
    }
  },
  components: {
    YuButton,
    YuPicker,
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
  body{
     margin: 0;
  }
  #container{
    height: 600px;
    width: 100%;
  }
</style>
