import { defineStore } from "pinia";
import Names from "../emum";
import type {LoginResponseData} from "@/api/login/types/index";
type UserMessage=LoginResponseData;
interface UserState {
    userMessage:UserMessage
}
export const useUserStore=defineStore(Names.User,{
    state():UserState{
        return {
           userMessage:{
            token:'',
            userId:'',
            userName:''
           } 
        }
    },
    actions:{
        /**
         * 设置token
         */
        setToken(){
            const {token} =this.userMessage;
            if(token.length===0){
                return false;
            }
            try {
                uni.setStorageSync('token',token);
            } catch (e) {
                return false;
            }
            return true;
        },
        getToken(){
            const token=uni.getStorageSync("token");
            console.log(token);
            
        }
    }
})