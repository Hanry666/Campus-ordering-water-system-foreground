<template>
	<view class="login">
		<view class="title">
			登录
		</view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<view class="form-box">
			<u-form labelPosition="left" errorType="toast" :model="userInfo" :rules="rules" ref="form">
				<u-form-item prop="name" ref="name">
					<u-input placeholder="请输入账号" prefixIcon="account" prefixIconStyle="font-size: 20px;color: #3333ff" v-model="userInfo.name"
						border="none"></u-input>
				</u-form-item>
				<u-form-item prop="pwd" ref="pwd">
					<u-input type="password" clearable placeholder="请输入密码" prefixIcon="lock" prefixIconStyle="font-size: 20px;color: #3333ff" v-model="userInfo.pwd"
						border="none"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<view class="btn-box">
				<u-button type="primary" @click="reg" :plain="true" :hairline="true" text="注册"></u-button>
				
                <u-button  @click="submit" style="margin-left: 100px;" type="primary" text="登录"></u-button>
		</view>
		<u-toast ref="toast"></u-toast>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import {getLoginApi} from "@/api/login/index";
import {useUserStore} from "@/store/modules/user";
const userStore=useUserStore();
const form = ref();
const toast=ref();
const userInfo = reactive({
	name: '',
	pwd: ''
})
const rules = reactive({
	name: {
		type: 'string',
		required: true,
		message: '请填写账号',
		trigger: ['blur', 'change']
	},
	pwd: {
		type: 'string',
		required: true,
		message: '请填写密码',
		trigger: ['blur', 'change']
	}

})
function submit() {
	form.value.validate().then((res: any) => {
		console.log(res);
		login();
	}).catch((error: any) => {
		uni.$u.toast(error[0].message)
	})
}
function reg(){
	uni.navigateTo({
		url:"../reg/index"
	})
}
async function login(){
	toast.value.show({
		type: 'loading',
		title: '正在加载',
		message: "正在加载",
		iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
		duration:5000
	})
	const {name:userName,pwd:password} =userInfo;
	const user=await getLoginApi({
		password,
		userName		
	})
    if(user.code!==200){
		uni.$u.toast(user.msg);
		return;
	}
	userStore.userMessage=user.data;
	userStore.setToken();
	toast.value.hide();
	uni.switchTab({
		url:"/pages/index/index",
		success:(success)=>{
			uni.$u.toast("登录成功！");
		},
		fail:(fail)=>{
			console.log(fail);
			
		},
	})
}
</script>
<script lang="ts">
export default {
	options:{
		styleIsolation:"shared"
	}
}
</script>

<style lang="less" scoped>
.login {
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		margin-top: 60rpx;
		font-size: 30px;
	}

	.form-box {
		margin-top: 70rpx;
		padding: 0 10px;
		width: 80%;
		border-radius: 10px;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
	}
	.btn-box {
		display: flex;
		width: 80%;
		justify-content: space-between;
		margin-top: 100rpx;
		 .mid {
			width: 80px;
		}
	    ::v-deep .u-button:nth-of-type(2) {
			margin-left: 80px;
		}
	}
}
</style>