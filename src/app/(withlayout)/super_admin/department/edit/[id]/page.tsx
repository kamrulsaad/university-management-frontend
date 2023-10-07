"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

interface EditDepartmentPageProps {
  params: {
    id: string;
  };
}

const EditDepartmentPage = ({ params }: EditDepartmentPageProps) => {
  const { id } = params;

  const { data, isLoading: dataLoading } = useDepartmentQuery(id);

  const [updateDepartment, { isLoading }] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    try {
      await updateDepartment({ id, body: values });
      message.success("Department Updated successfully");
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
            label: "super_admin",
            link: `/super_admin`,
          },
          {
            label: "department",
            link: `/super_admin/department`,
          },
        ]}
      />
      <ActionBar title="Update Department"></ActionBar>
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

export default EditDepartmentPage;
