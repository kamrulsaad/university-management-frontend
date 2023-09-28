"use client";

import { Col, Row, Button } from "antd";
import LoginImage from "@/assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import {
  getUserInfo,
  isLoggedIn,
  storeUserInfo,
} from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const response = await userLogin({ ...data }).unwrap();
      console.log(response);
      if (response?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: response?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image priority src={LoginImage} alt="login image" width={500} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          First Login to your account
        </h1>
        <div>
          <Form submithandler={onSubmit}>
            <div>
              <FormInput type="text" size="large" name="id" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput
                type="password"
                size="large"
                name="password"
                label="User Password"
              />
            </div>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
