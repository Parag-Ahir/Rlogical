import { Card } from "antd";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { loginUser } from "../../../services/auth";
import Cookies from "js-cookie";
import { useEffect } from "react";

interface IFormValues {
  email: string;
  password: string;
}
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const user: any = Cookies.get("user");
    const userObject = user && JSON.parse(user);

    if (userObject?.id) {
      navigate("/dashboard");
    }
  }, []);

  const onSubmit = async (values: IFormValues) => {
    try {
      const resLogin = await loginUser(values);
      if (resLogin && resLogin?.success && resLogin?.data) {
        Cookies.set("token", resLogin?.data?.token);
        Cookies.set("refreshtoken", resLogin?.data?.refreshToken);
        Cookies.set("user", JSON.stringify(resLogin?.data?.user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error when login form", error);
    }
  };
  return (
    <div className="login-container">
      <Card title={"Login"} className="card-container">
        <Form
          form={form}
          name="login"
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          style={{ fontWeight: "600" }}
          onFinish={onSubmit}
        >
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Email is required!" }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Password is required!" }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="btn-wrapper">
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </div>
        </Form>
        <Link to="/signup" className="signup-link">
          Don't have an account ?
        </Link>
      </Card>
    </div>
  );
};

export default Login;
