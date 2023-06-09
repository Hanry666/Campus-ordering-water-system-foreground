<template>
    <view class="item-list">
        <view class="empty"  v-show="itemList.length === 0">
            <u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/car.png">
        </u-empty>
        </view>

        <view class="item-box" v-for="(item,index) in 15" :key="index">
            <view class="item">
                <view class="img-box"></view>
                <view class="right">
                    <view class="title">
                        <u-text :lines="1" text="测试测试测试测试测测试测试测试测试试12318294"></u-text>
                    </view>
                    <view class="bottom">
                        <view class="money">
                            <u-text mode="price" text="100"></u-text>
                        </view>
                        <view class="add">
                            <u-number-box :min="0" v-model="addValue" ></u-number-box>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import { reactive,ref } from 'vue';
const props=withDefaults(defineProps<{
    
}>(),{

})
const itemList = reactive([
    {
        name:1
    }
]);
const addValue=ref<number>(0);
</script>
<style lang="less" scoped>
.item-list {
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 10px;
    padding-bottom: 50px;
    overflow: hidden;
    .item-box {
        // height: 3000px;
        width: 95%;
        margin: 0 10px;

        .item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            width: 100%;
            height: 80px;
            border-radius: 10px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
            overflow: hidden;

            .img-box {
                width: 30%;
                background-color: red;
                height: 100%;
                flex-shrink: 0;
            }

            .right {
                display: flex;
                flex-direction: column;
                height: 100%;
                flex-grow: 1;
                .title {
                    display: flex;
                    align-items: center;
                    margin:0 8px;
                    width: 85%;
                    height: 60%;
                    overflow: hidden;

                }

                .bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .money {
                        padding-left: 8px;
                    }
                    .add {
                        height: 80%;
                        margin-right: 10px;
                        overflow: hidden;
                        ::v-deep > view {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>