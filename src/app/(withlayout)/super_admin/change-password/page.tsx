"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button } from "antd";

const ResetPassPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
      <Form submithandler={onSubmit}>
        <h3 style={{ marginBottom: "10px" }}>Reset Password</h3>
        <div style={{ margin: "5px 0" }}>
          <FormInput name="oldPassword" label="Old password" size="large" type="password" />
        </div>
        <div style={{ margin: "5px 0" }}>
          <FormInput name="newPassword" label="New password" size="large" type="password" />
        </div>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassPage;