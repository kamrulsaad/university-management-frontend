"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

const CreateACFacultyPage = () => {
  const [createACFaculty, { isLoading }] = useAddAcademicFacultyMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await createACFaculty(data);
      if (!!response) {
        message.success("Academic Faculty created successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-faculty", link: `/${base}/academic/faculty` },
        ]}
      />
      <h1>Create Academic Faculty</h1>
      <Form submithandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
        </Row>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateACFacultyPage;
