import { Button, DatePicker, Dropdown, Form, Input, Modal, Space } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

interface IApplyLeaveProps {
  isOpen: boolean;
  handleCancel: () => void;
  handleSave: () => void;
}

const { RangePicker } = DatePicker;
const ApplyLeave = ({ isOpen, handleCancel, handleSave }: IApplyLeaveProps) => {
  const [form] = Form.useForm();

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
  ];

  return (
    <Modal title="Apply Leave" open={isOpen} onOk={handleSave} onCancel={handleCancel} footer={null}>
      <Form form={form} name="applyleave" layout="vertical" autoComplete="off" requiredMark={false} style={{ fontWeight: "600" }}>
        <Form.Item name="fromdate" label="FroDate" rules={[{ required: true, message: "Date is required!" }]}>
          <RangePicker style={{ width: "100%" }} format={"DD/MM/YYYY"} />
        </Form.Item>
        <Form.Item name="leaveType" label="Leave Type" rules={[{ required: true, message: "Leave Type is required!" }]}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Leave Types</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>
        <Form.Item name="reason" label="Reason" rules={[{ required: true, message: "Reason is required!" }]}>
          <Input.TextArea placeholder="Reason" />
        </Form.Item>
        <div className="btn-wrapper">
          <Button htmlType="submit" type="primary">
            Apply
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ApplyLeave;
