<template>
<view class="my">
	<view class="login-box">
		<img src="/static/unlogin.png" class="img">
	</view>
	<view class="login-message">
		<u-cell-group >
		<u-cell
		size="large"
        title="您尚未登录"
        value=""
		clickable
		@click="login"
        label="点击登录"
		:isLink="true"
        center
    ></u-cell>
	</u-cell-group>
	</view>
	<view class="list">
		<u-cell-group>
		<u-cell icon="setting-fill" clickable title="修改个人信息"></u-cell>
		<u-cell icon="man-add-fill" clickable title="加入配送员"></u-cell>
		<u-cell icon="rmb-circle-fill" clickable title="余额" ></u-cell>
	</u-cell-group>
	</view>
</view>
</template>
<script setup lang="ts">
import {} from 'vue';
function login(){
	uni.navigateTo({
		url:"/pages/login/index",
		animationType: 'pop-in',
		animationDuration: 200
	})
}
</script>
<style lang="less" scoped>
    .my {
		padding-top: 70rpx;
		.login-box {
			height: 100px;
			width: 100px;
			margin: 0 auto;
			margin-bottom: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			.img {
				height: 100%;
				width: 100%;
			}
		}
		.list {
			margin-top: 70rpx;
		}
	}
</style>