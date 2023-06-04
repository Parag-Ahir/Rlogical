import { Card, Select } from "antd";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { signUpUser } from "../../../services/auth";

interface IFormValues {
  confirmpassword: string;
  email: string;
  name: string;
  password: string;
  role: string;
}

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async (values: IFormValues) => {
    try {
      const { email, name, password, role } = values;
      const request = { email, name, password, role };
      const resSignup = await signUpUser(request);

      if (resSignup?.success) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error while create user", error);
    }
  };
  return (
    <div className="sign-up-container">
      <Card title={"Sign Up"} className="card-container">
        <Form
          form={form}
          name="signup"
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          style={{ fontWeight: "600" }}
          onFinish={onSubmit}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Name is required!" }]}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Email is not valid" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true, message: "Role is required!" }]}>
            <Select
              placeholder="Role"
              options={[
                { value: "employee", label: "employee" },
                { value: "manager", label: "manager" },
              ]}
            />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Password is required!" }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm Password is required!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </Form>
        <div className="btn-wrapper">
          <Button htmlType="submit" type="primary" form="signup">
            Sign Up
          </Button>
        </div>
        <div className="signup-link">
          <span>Already have an account ? </span>
          <Link to="/"> Login</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
