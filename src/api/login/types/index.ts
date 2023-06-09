export interface LoginRequestData {
    userName:string;
    password:string;
}

export interface LoginResponseData {
    userId:string;
    userName:string;
    token:string;
}

export interface RegRequestData {
    /**
     * 用户名
     */
    username:string 
    /**
     * 手机号
     */
    userPhone:string 
    /**
     * 密码
     */
    password:string 
    /**
     * 性别
     */
    gender:string 
    /**
     * 地址
     */
    addressId:string 
    /**
     * 余额
     */
    balance:number 
    /**
     * 角色
     */
    role:string
    /**
     * 优先级
     */
    priority:number
}

export interface RegResponseData {
    userId:string;
    userName:string;
    phone:string;
}

export interface ModRequestData extends RegRequestData {} 