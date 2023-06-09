<template>
    <view class="user-list">
        <view class="nav">
            <u-subsection :list="navList" :current="navNowPage" @change="navChangeHandler"></u-subsection>
        </view>
        <view class="list">
            <view class="item"></view>
        </view>
        <button>test</button>
    </view>
</template>
<script setup lang="ts">
import {reactive,ref} from 'vue';
import {useUserStore} from "@/store/modules/user"
const navList=reactive(['未下单', '已下单']);
const navNowPage=ref(0);
function navChangeHandler(num:number) {
    navNowPage.value=num;
    if(navNowPage.value===0){
    }else {
    }
}
</script>
<style lang="less" scoped>

</style>