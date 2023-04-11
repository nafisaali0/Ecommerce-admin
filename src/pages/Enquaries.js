import React, { useEffect} from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getEnquaries } from "../features/enquary/enquarySlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Staus",
    dataIndex: "status",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquaries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquaries())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const enquaryState = useSelector((state) => state.enquary.enquaries);
  console.log(enquaryState)

  const data1 = [];
for (let i = 0; i < enquaryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquaryState[i].name,
      email: enquaryState[i].email,
      mobile: enquaryState[i].mobile,
      status: (
        <>
          <select
            name=""
            defaultValue={enquaryState[i].status ? enquaryState[i].status : "Submitted"}
            className="form-control form-select"
            id=""
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </>
      ),

      action: (
        <>
          <Link
            className="ms-3 fs-3 text-danger"
            to={`/admin/enquiries/${enquaryState[i]._id}`}
          >
            <AiOutlineEye />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  return (
    <div className="mt-4">
      <h3 className="mb-5 title">Enquaries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Enquaries;
