import ajax from "@/utils/request";
import type * as UserOrder from "./types/index";
/**
 * 用户正在进行的订单
 */
export function getActiveApi(){
    return ajax<UserOrder.ActiveResponseData>({
        url:"users/orders/active",
        method:"GET"
    })
}
export function getHistoryApi(){
    return ajax<UserOrder.HistoryResponseData>({
        url:"users/orders/history",
        method:"GET"
    })
}

export function getConfirmApi(data:UserOrder.ConfirmRequestData){
    return ajax<UserOrder.ConfirmResponseData>({
        url:"users/orders/confirm",
        method:"POST",
        data
    })
}

export function getNotReceivedApi(data:UserOrder.NotReceivedRequestData){
    return ajax<UserOrder.NotReceivedResponseData>({
        url:"users/orders/notReceived",
        method:"POST",
        data
    })
}