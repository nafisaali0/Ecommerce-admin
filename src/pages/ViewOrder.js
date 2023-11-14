import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrder } from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "User Name",
    dataIndex: "name",
  },
  {
    title: "Product Name",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  // {
  //   title: "Action",
  //   dataIndex: "action",
  // },
];

const ViewOrder = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[3];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [dispatch, orderId]);

  const orderState = useSelector((state) => state?.auth?.orders)
  console.log(orderState, '0')


  const data1 = [];

  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i]?.shippingInfo?.firstName,
      product: orderState[i]?.orderItems[0].product?.title,
      quantity: orderState[i]?.orderItems[0].price,
      price: orderState[i]?.orderItems[0].quantity,
      amount: orderState[i].totalPrice,
      date: new Date(orderState[i].createdAt).toLocaleString(),
 
    });
  }

  // if (orderState && Array.isArray(orderState)) {
  //   for (let i = 0; i < orderState.length; i++) {
  //     const order = orderState[i];

  //     if (order && order.products && order.products.length > 0) {
  //       const products = order.products;

  //       for (let j = 0; j < products.length; j++) {
  //         const productEntry = products[j];

  //         data.push({
  //           key: keyCounter++,
  //           name: productEntry?.shippingInfo?.firstName || "N/A",
  //           brand: productEntry.product.brands || "N/A",
  //           count: productEntry.count || "N/A",
  //           amount: productEntry.product.price || "N/A",
  //           color: productEntry.product.color || "N/A",
  //           date: productEntry.product.createdAt || "N/A",
  //           // action: (
  //           //   <>
  //           //     <Link to="/" className=" fs-3 text-danger">
  //           //       <BiEdit />
  //           //     </Link>
  //           //     <Link className="ms-3 fs-3 text-danger" to="/">
  //           //       <AiFillDelete />
  //           //     </Link>
  //           //   </>
  //           // ),
  //         });
  //       }
  //     } else {
  //       console.error(`Invalid data at index ${i}:`, order);
  //     }
  //   }
  // }

  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ViewOrder;
