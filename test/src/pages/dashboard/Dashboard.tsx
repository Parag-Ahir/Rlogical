import { Avatar, Button, Card, Col, Divider, Row } from "antd";
import React, { useState } from "react";
import "./Dashboard.scss";
import LeaveDetails from "../../components/dashboard/leaveDetails/LeaveDetails";
import ApplyLeave from "../../components/dashboard/applyLeave/ApplyLeave";

const Dashboard: React.FC = () => {
  const leaves = [
    { title: "Total Leaves", value: 20 },
    { title: "Applied Leaves", value: 20 },
    { title: "Available Leaves", value: 20 },
  ];
  const [isApplyLeave, setIsApplyLeave] = useState(false);
  return (
    <div className="dashboard-container">
      <div className="btn-wrapper">
        <Button
          type="primary"
          onClick={() => {
            setIsApplyLeave(true);
          }}
        >
          Apply Leave
        </Button>
      </div>
      <Row gutter={16} className="leave-card-container">
        {leaves?.map((leave) => {
          return (
            <Col key={leave?.title} span={8}>
              <Card title={leave.title} bordered={true} className="leave-card">
                <h2>{leave.value}</h2>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Divider />
      <LeaveDetails />
      {isApplyLeave && (
        <ApplyLeave
          isOpen={isApplyLeave}
          handleCancel={() => {
            setIsApplyLeave(false);
          }}
          handleSave={() => {}}
        />
      )}
    </div>
  );
};

export default Dashboard;
