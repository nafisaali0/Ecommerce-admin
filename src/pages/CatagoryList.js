import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductCatagories } from "../features/productcatagory/productcatagorySlice";
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
    title: "Action",
    dataIndex: "action",
  },
];

const CatagoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCatagories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const productCatagoryState = useSelector(
    (state) => state.productcatagory.productCatagories
  );

  const data1 = [];
  for (let i = 0; i < productCatagoryState.length; i++) {
    data1.push({
      key: i + 1,
      name: productCatagoryState[i].title,
      action: (
        <>
          <Link
            to={`/admin/category/${productCatagoryState[i]._id}`}
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
      <h3 className="mb-5 title">Catagory List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default CatagoryList;
