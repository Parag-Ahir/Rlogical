import { Button, Space, Table } from "antd";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";

interface DataType {
  key: string;
  fromDate: string;
  toDate: string;
  leaveType: string;
  reason: string;
}

const LeaveDetails = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "From Date",
      dataIndex: "fromDate",
      key: "fromDate",
      width: "15%",
    },
    {
      title: "To Date",
      dataIndex: "toDate",
      key: "toDate",
      width: "15%",
    },
    {
      title: "Leave Type",
      dataIndex: "leaveType",
      key: "leaveType",
      width: "20%",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
      width: "30%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      fromDate: moment().format("DD-MM-YYYY"),
      toDate: moment().add(2, "days").format("DD-MM-YYYY"),
      leaveType: "casual",
      reason: "This is the first",
    },
    {
      key: "2",
      fromDate: moment().format("DD-MM-YYYY"),
      toDate: moment().add(3, "days").format("DD-MM-YYYY"),
      leaveType: "casual",
      reason: "This is the first",
    },
    {
      key: "3",
      fromDate: moment().format("DD-MM-YYYY"),
      toDate: moment().add(4, "days").format("DD-MM-YYYY"),
      leaveType: "casual",
      reason: "This is the first",
    },
  ];
  return (
    <div>
      <h3>Leave Details</h3>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default LeaveDetails;
