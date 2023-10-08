"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicDepartmentQuery,
  useAddAcademicDepartmentMutation,
  useUpdateAcademicDepartmentMutation,
} from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

interface EditACDepartmentPageProps {
  params: {
    id: string;
  };
}

const EditACDepartmentPage = ({
  params: { id },
}: EditACDepartmentPageProps) => {
  const [upadateACDepartment, { isLoading }] =
    useUpdateAcademicDepartmentMutation();

  const { data: defaultValues } = useAcademicDepartmentQuery(id);

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
      const updateOptions = {
        id,
        body: {
          title: data?.title,
          academicFacultyId: data?.academicFacultyId,
        },
      };
      const response = await upadateACDepartment(updateOptions);
      if (!!response) {
        message.success("Academic Department updated successfully");
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
      <h1>Update Academic Department</h1>
      <Form submithandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              size="large"
              name="title"
              label="Academic Department Title"
            />
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditACDepartmentPage;
