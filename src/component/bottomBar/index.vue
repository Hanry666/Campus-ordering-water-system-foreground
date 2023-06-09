<template>
<view class="bottom-bar">
    <view class="left">
        <text>合计</text>
            <u-icon name="rmb" color="red" size="18"></u-icon>
        <text class="money">{{money||'--'}}</text>
    </view>
    <view class="right">
        <u-button type="primary" :text="btnText"></u-button>
    </view>
</view>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const btnText=ref("去登录")
const money=ref<number>();
</script>
<style lang="less" scoped>
    .bottom-bar {
        background-color: #fff;
        border-top:.5rpx solid rgba(0,0,0,.3);
        width: 100%;
        display: flex;
        height: 45px;
        .left {
            display: flex;
            align-items: center;
            padding-left: 20px;
            width: 67%;
            .money {
                color:red;
            }
        }
        .right {
            flex: 1;
            display: flex;
            background-color: #fff;
            z-index: 2;
            ::v-deep button {
                border-radius: 0;
                height: 100%;
                width: 100%;
            }
        }
    }
</style>