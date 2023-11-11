import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrderByUser } from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Color",
    dataIndex: "color",
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
  const userId = location.pathname.split("/")[3];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, [dispatch, userId]);

  const orderState = useSelector((state) => state.auth.orderbyuser);
  console.log(orderState)

  const data = [];
  let keyCounter = 1;

  if (orderState && Array.isArray(orderState)) {
    for (let i = 0; i < orderState.length; i++) {
      const order = orderState[i];

      if (order && order.products && order.products.length > 0) {
        const products = order.products;

        for (let j = 0; j < products.length; j++) {
          const productEntry = products[j];

          data.push({
            key: keyCounter++,
            name: productEntry.product.title || "N/A",
            brand: productEntry.product.brands || "N/A",
            count: productEntry.count || "N/A",
            amount: productEntry.product.price || "N/A",
            color: productEntry.product.color || "N/A",
            date: productEntry.product.createdAt || "N/A",
            // action: (
            //   <>
            //     <Link to="/" className=" fs-3 text-danger">
            //       <BiEdit />
            //     </Link>
            //     <Link className="ms-3 fs-3 text-danger" to="/">
            //       <AiFillDelete />
            //     </Link>
            //   </>
            // ),
          });
        }
      } else {
        console.error(`Invalid data at index ${i}:`, order);
      }
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ViewOrder;
