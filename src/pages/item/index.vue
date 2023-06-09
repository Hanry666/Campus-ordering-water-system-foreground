<template>
    <view class="content">
      <view class="list">
        <view class="item-bar">
            <view>1</view>
                <view>2</view>
                <view>3</view>
                <view>4</view>
                <view>5</view>
                <view>6</view>
                <view>7</view>
                <view>8</view>
                <view>9</view>
                <view>10</view>
        </view>
        <view class="item-list">
            <scroll-view class="item">
                <view>1</view>
                <view>2</view>
                <view>3</view>
                <view>4</view>
                <view>5</view>
                <view>6</view>
                <view>7</view>
                <view>8</view>
                <view>9</view>
                <view>10</view>
            </scroll-view>
        </view>
      </view>
    </view>
  </template>
  
  <script setup lang="ts">
  import { ref,reactive } from 'vue'
  import {} from "@dcloudio/uni-app";
  function login(){
      uni.switchTab({
          url:"/page/login/index"
      })
  }
  </script>
  
  <style lang="less" scoped>
  .content {
    margin:0 10px;
    height: 100vh;
    overflow: hidden;
    .list {
        display: flex;
        background-color: red;
        overflow: hidden;
        height: 100%;
        .item-bar {
            flex:1;
        }
        .item-list {
            width: 70%;
            background-color: pink;
            overflow: scroll;
            .item {
                background-image: linear-gradient(to right bottom, #00ff4d, #00dfba, #00b5ff, #0081ff, #1b12eb);
                height: 1000px;
            }
        }
    }
  }
  </style>