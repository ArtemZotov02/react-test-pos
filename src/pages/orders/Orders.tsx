import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useTranslation } from "react-i18next";
import OrdersItem from "../../components/ordersItem/OrdersItem";
import { AllOrders, IOrders } from "../../types/Orders.types";
import Modal from "../../components/modal/Modal";

export default function Orders() {
  const [data, setData] = useState<IOrders>();
  const { i18n } = useTranslation();

  useEffect(() => {
    // fetch(`http://localhost:5001/orders?lang=${i18n.language}`)
    fetch(`https://my-json-server.typicode.com/ArtemZotov02/db/orders?lang=${i18n.language}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [i18n.language]);

  const [modalData, setModalData] = useState<AllOrders | null>(null);

  return (
    <Layout data={data?.header}>
      <h2>{data?.title}</h2>
      {data?.allOrders?.map((item) => (
        <OrdersItem
          {...item}
          key={item.transactionId.text}
          onClick={() => setModalData(item)}
        />
      ))}
      {modalData && (
        <Modal data={modalData} onClose={() => setModalData(null)} />
      )}
    </Layout>
  );
}
