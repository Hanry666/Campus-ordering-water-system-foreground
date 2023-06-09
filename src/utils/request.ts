import ajax from "uni-ajax";
import type {AjaxConfigType} from "uni-ajax"
const url=import.meta.env.VITE_BASE_API||'';
const request=ajax.create({
    baseURL:url,
    timeout:2000
} as AjaxConfigType);

//请求拦截器
request.interceptors.request.use(config=>{
    //在发送请求之前做些什么
    return config;
},err=>{
    // 对请求错误做些什么
    return Promise.reject(err);
})

//响应拦截器
request.interceptors.response.use((res)=>{
    // 对响应数据做点什么
    return res.data;
},err=>{
    return Promise.reject(err);
})

export default request;