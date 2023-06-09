<template>
    <view class="content">
        <view class="content-user">
            <view class="swiper">
                <u-swiper :list="swiperList" indicator indicatorMode="line" circular></u-swiper>
            </view>


            <view class="notice">
                <u-notice-bar :text="noticeText"></u-notice-bar>
            </view>

            <!-- <u-sticky bgColor="#F5F5F5"> -->
            <view class="nav">
                <u-tabs @change="changeItemNavHandler" :scrollable="false" :list="itemNavList"></u-tabs>
            </view>
            <!-- </u-sticky> -->
            <itemListVue :itemList="itemList"></itemListVue>

        </view>
        <view class="bottom-bar">
            <bottomBar></bottomBar>
        </view>

    </view>
</template>
  
<script setup lang="ts">
import { ref, reactive } from 'vue'
import bottomBar from "@/component/bottomBar/index.vue";
import itemListVue from "@/component/itemList/index.vue";
import {getScrollingProductsApi,getProductCategoriesApi,getProductCategoriesItemApi} from "@/api/user-item/index";
const swiperList = reactive<Array<string>>([])  //轮播图图片
let noticeText = ref("欢迎来到校园订水配送系统");  //提示文字
/**
 * 登录方法
 */
function login() {
    uni.switchTab({
        url: "/page/login/index"
    })
}

const itemNavList = reactive<Array<any>>([
])  //物品导航栏
const itemList=reactive([

]);
/**
 * 改变导航栏回调
 * @param val 
 */
function changeItemNavHandler(val: any) {
    console.log(val);

}
/**
 * 获取数据
 */
async function getPageData(){
    getScrollingProductsApi().then(res=>{
        res.data.forEach(item=>{
            swiperList.push(item.imageUrl)
        })
    })
    getProductCategoriesApi().then(res=>{
        res.data.forEach(item=>{    
            itemNavList.push({name:item.categoryName});
        })
    })
    getProductCategoriesItemApi({
        categoryId:0
    }).then(res=>{
        console.log(res,'---');
        
    })
}
getPageData();

function clickUserHandler(val: number) {


}
</script>
  
<style lang="less" scoped>
.content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .content-user {
        flex: 1;
        height: 100%;
        overflow: scroll;

        .swiper {
            margin: 0 15px;
            margin-top: 60rpx;
            margin-bottom: 20rpx;
        }

        .notice {
            margin: 0 15px;
            margin-bottom: 20rpx;
        }

        .nav {
            position: sticky;
            top: 0;
            background-color: #F5F5F5;
            z-index: 3;
        }

        // .user {
        //     margin-top: 40rpx;
        //     margin-bottom: 50rpx;
        // }
    }

    .bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
}</style>