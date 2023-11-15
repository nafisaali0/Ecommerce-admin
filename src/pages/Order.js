import React, { useEffect , useState} from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders, resetState } from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Order Id",
    dataIndex: "pId",
  },
  {
    title: "Ordered By",
    dataIndex: "orderby",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Coin Earned",
    dataIndex: "coinsEarned",
  },

  {
    title: "Staus",
    dataIndex: "status",
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

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getOrders());
  }, [dispatch]);

  const handleOrderStatusChange = (newStatus, orderId) => {
    // Dispatch an action to update the order status
    dispatch(getOrders(orderId, newStatus));
  };

  const orderState = useSelector((state) => state?.auth?.orders);
  console.log(orderState, "o");
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      pId: orderState[i]._id,
      orderby:
        orderState[i].user?.firstname + " " + orderState[i].user?.lastname,
      product: (
        <Link to={`/admin/orders/${orderState[i]?._id}`}>View Orders</Link>
      ),
      amount: orderState[i].totalPrice,
      coinsEarned:orderState[i].coinsEarned,
      status: (
        <>
          <select
            name=""
            defaultValue={
              orderState[i] && orderState[i]?.status ? orderState[i]?.status : "ordered"
            }
            className="form-control form-select"
            id=""
            onChange={(e) => handleOrderStatusChange(e.target.value, orderState[i]?._id)}
          >
            <option value="ordered">ordered</option>
            <option value="progress">In Progress</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
        </>
      ),
      date: new Date(orderState[i].createdAt).toLocaleString(),
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

  return (
    <div className="mt-4">
      <h3 className="mb-5 title">Order</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Order;
