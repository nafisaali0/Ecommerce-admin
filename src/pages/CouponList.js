import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../features/coupon/couponSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: "Expiry",
    dataIndex: "expiery",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const CouponList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoupons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const couponState = useSelector((state) => state.coupon.coupons);

  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i + 1,
      name: couponState[i].name,
      discount: couponState[i].discount,
      expiery: new Date(couponState[i].expiery).toLocaleString(),
      action: (
        <>
          <Link
            to={`/admin/coupon/${couponState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0">
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  return (
    <div className="mt-4">
      <h3 className="mb-5 title">Coupon List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default CouponList;
