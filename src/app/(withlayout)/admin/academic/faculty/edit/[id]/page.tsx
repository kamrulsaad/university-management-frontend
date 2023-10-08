"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicFacultyQuery,
  useUpdateAcademicFacultyMutation,
} from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

interface EditACFacultyPageProps {
  params: {
    id: string;
  };
}

const EditACFacultyPage = ({ params }: EditACFacultyPageProps) => {
  const { id } = params;

  const { data, isLoading: dataLoading } = useAcademicFacultyQuery(id);

  const [updateACFaculty, { isLoading }] = useUpdateAcademicFacultyMutation();

  const onSubmit = async (values: { title: string }) => {
    try {
      await updateACFaculty({ id, body: values });
      message.success("Academic Faculty Updated successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: `/admin`,
          },
          {
            label: "academic-faculty",
            link: `/admin/academic/faculty`,
          },
        ]}
      />
      <ActionBar title="Update Academic Faculty"></ActionBar>
      <Form submithandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
        </Row>
        <Button
          loading={dataLoading || isLoading}
          type="primary"
          htmlType="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditACFacultyPage;
