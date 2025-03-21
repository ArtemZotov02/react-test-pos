import { IHeader } from "./Header.types";

export interface OrdersItem {
  title: string;
  text: string;
}
export interface OrderStatus {
  title: string;
  text: boolean;
}
export interface AllOrders {
  transactionId: OrdersItem;
  ammount: OrdersItem;
  date: OrdersItem;
  gameId: OrdersItem;
  gameName: OrdersItem;
  status: OrderStatus
}

export interface IOrders {
  lang: string;
  header: IHeader;
  title: string;
  allOrders: AllOrders[];
}


export interface OrdersItemProps {
  transactionId: OrdersItem;
  date: OrdersItem;
  status: OrderStatus;
  gameName: OrdersItem;
  gameId: OrdersItem;
  ammount: OrdersItem;
  onClick?: () => void;
}
