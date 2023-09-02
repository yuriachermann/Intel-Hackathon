import React from "react";
import "aos/dist/aos.css";
import Seo from "../components/layout/Seo";
import Layout from "../components/layout/Layout";
import {api} from '~/utils/api'

function Orders() {

  const queryOrders = api.order.read.useQuery({})

  return (
    <Layout>
      <Seo templateTitle="Delivery" description="" />
      <main className="grow">
        {queryOrders.data?.map((order) => (
          <div key={order.id}>
            <h1>{order.order_user}</h1>
            <p>{order.order_food}</p>
            <p>{order.order_city}</p>
            <p>{order.order_rating}</p>
            <p>{order.order_review}</p>
          </div>
        ))}
      </main>
    </Layout>
  );
}

export default Orders;
