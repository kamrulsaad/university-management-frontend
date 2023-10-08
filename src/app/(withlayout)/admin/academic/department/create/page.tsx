"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

const CreateACDepartmentPage = () => {
  const [createACDepartment, { isLoading }] = useAddAcademicDepartmentMutation();

  const { data } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
    sortBy: "title",
  });

  const academicFaculties = data?.academicFaculties;
  const acFacultiesOptions = academicFaculties?.map((faculty: any) => ({
    label: faculty?.title,
    value: faculty?.id,
  }));

  const onSubmit = async (data: any) => {
    try {
      const response = await createACDepartment(data);
      if (!!response) {
        message.success("Academic Department created successfully");
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
          {
            label: "academic-department",
            link: `/${base}/academic/department`,
          },
        ]}
      />
      <h1>Create Academic Department</h1>
      <Form submithandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Academic Department Title" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectField
              options={acFacultiesOptions as SelectOptions[]}
              size="large"
              name="academicFacultyId"
              label="Academic Faculty"
            />
          </Col>
        </Row>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateACDepartmentPage;
