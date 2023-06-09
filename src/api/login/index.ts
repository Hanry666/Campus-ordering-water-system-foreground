import ajax from '@/utils/request';
import type * as Login from "./types/index";
/**
 * 登录
 */
export function getLoginApi(data:Login.LoginRequestData){
    return ajax<Login.LoginResponseData>({
        url:"/users/login",
        method:"POST",
        data
    })
}
/**
 * 注册
 * @param data 
 */
export function getRegApi(data:Login.RegRequestData){
    return ajax<Login.RegResponseData>({
        url:"/users/register",
        method:"POST",
        data
    })
}