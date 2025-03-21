import style from "./style.module.scss";
import { AllOrders } from "../../types/Orders.types";
import OrdersItem from "../ordersItem/OrdersItem";

interface ModalProps {
  data: AllOrders;
  onClose: () => void;
}

export default function Modal({ data, onClose }: ModalProps) {
  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalContent_title}>
          <img src="/closeIcon.svg" onClick={onClose} className={style.modalContent_close}/>
          <p>{data.transactionId.text}</p>
        </div>
        <OrdersItem {...data} key={data.transactionId.text}/>
        <div className={style.modalContent_main}>
          <div className={style.modalContent_main__title}>
            <p>Your Goods:</p>
            <span>1 - 279,99$</span>
          </div>
          <div className={style.modalContent_main__block}>
            <div className={style.blockCurrency}>
              <p className={style.blockCurrency_count}>40,500</p>
              <p className={style.blockCurrency_plus}>+1,500</p>
            </div>
            <div className={style.blockCurrency}>
              <p className={style.blockCurrency_count}>279,99$</p>
              <p className={style.blockCurrency_discount}>749.99$</p>
            </div>
          </div>
        </div>
        <button className={style.modalContent_btn}>Ask ?</button>
      </div>

    </div>
  );
}
