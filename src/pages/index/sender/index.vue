<template>
<view class="sender-index">
    <view class="order-box">
        <view class="item" v-for="(item,index) in 5" :key="index">
            <view class="top">
                <view class="price">100元</view>

            </view>
            <view class="address">
                <text>
                    测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                </text>
            </view>
            <view class="bottom">
                <u-button text="抢单" plain type="primary"></u-button>
            </view>
        </view>
    </view>
</view>
</template>
<script setup lang="ts">
import {} from 'vue';

</script>
<style lang="less" scoped>
    .sender-index {
        width: 100%;
        padding-bottom: 50px;
        .order-box {
            margin: 0 15px;
            margin-top: 10px;
            
            .item {
                margin-bottom: 20px;
                border-radius: 10px;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
                overflow: hidden;
                .top {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content:flex-end;
                    .price {
                        margin-right: 10px;
                        color: red;
                    }
                }
                .address {
                    margin: 10px 20px;
                    margin-top: 5px;
                    font-size: 32rpx;
                    font-weight: 500;
                }
                .bottom {
                    height: 45px;
                    margin: 0 20px;
                    margin-bottom: 10px;
                }
                }
            }
        }
</style>