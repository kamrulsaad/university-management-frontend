"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useCreateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [createDepartment] = useCreateDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating department...");
    try {
      await createDepartment(data);
      message.success("Department created successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submithandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
