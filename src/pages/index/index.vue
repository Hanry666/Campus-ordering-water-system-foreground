<template>
<view class="index">
  <u-toast ref="toast"></u-toast>
  <senderIndex v-if="show"></senderIndex>
  <userIndex v-else></userIndex>
  
</view>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import senderIndex from "./sender/index.vue";
import userIndex from "./user/index.vue";
import {onPullDownRefresh,onReady} from "@dcloudio/uni-app";
import {getLoginApi} from "@/api/login/index";
const toast=ref();
// getLoginApi().then(res=>{

// })
onReady(()=>{
  console.log(toast.value);
  
})
onPullDownRefresh(()=>{
  console.log(toast.value);
  toast.value.show({
    type: 'loading',
		title: '正在加载',
		message: "正在加载",
		iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
    duration:6000
  });
  setTimeout(()=>{
  toast.value.hide();
  uni.stopPullDownRefresh();
  toast.value.show({
    message:"加载成功！"
  })
  },3000)

})
let show=ref(false);
</script>
<style lang="less" scoped>
    
</style>