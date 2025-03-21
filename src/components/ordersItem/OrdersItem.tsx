import { OrdersItemProps } from "../../types/Orders.types";
import style from "./style.module.scss";

export default function OrdersItem({
  transactionId,
  date,
  status,
  gameName,
  gameId,
  ammount,
  onClick
}: OrdersItemProps) {
    const items = [transactionId, date, gameName, gameId, ammount];

  return (
    <div className={style.ordersItem} onClick={onClick}>
      {items.map(({ title, text }, index) => (
        <div key={index} className={style.ordersItem_block}>
          <p className={style.ordersItem_block__title}>{title}</p>
          <span className={style.ordersItem_block__text}>{text}</span>
        </div>
      ))}

      <div className={style.ordersItem_block}>
        <p className={style.ordersItem_block__title}>{status.title}</p>
        <div className={style.ordersItem_block_mark}>
          <div className={status.text ? style.green : style.red}></div>
          <span className={style.ordersItem_block__text}>
            {status.text ? "Success" : "Not Success"}
          </span>
        </div>
      </div>
    </div>
  );
}
