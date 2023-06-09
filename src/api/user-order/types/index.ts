export interface ActiveResponseData {
  orderId: number;
  orderNumber: string;
  orderDate: string;
  totalAmount: number;
  deliveryPhone: string;
  orderStatus: string;
  items: Array<{
    productId: number;
    productName: string;
    ProductPrice: number;
    ProductQuantity: number;
  }>;
}

export type HistoryResponseData =Array<ActiveResponseData>;

export interface ConfirmRequestData {
  orderId: number;
}
export type ConfirmResponseData =Array<{
  orderId: number;
  orderNumber: string;
  orderStatus: string;
}>

export interface NotReceivedRequestData extends ConfirmRequestData {}

export type NotReceivedResponseData =Array<{
    orderId:number;
    orderNumber:string;
    orderStatus:string;
    deliveryPhone:string;
    AdminPhone:string;
}>

