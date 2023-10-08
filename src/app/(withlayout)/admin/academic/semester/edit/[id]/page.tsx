"use client";

import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { monthOptions } from "@/constants/global";
import {
  useAcademicSemesterQuery,
  useUpdateAcademicSemesterMutation,
} from "@/redux/api/academic/semesterApi";
import { Button, Col, Row, message } from "antd";

const semesterOptions = [
  { label: "Autumn", value: "Autumn" },
  { label: "Summer", value: "Summer" },
  { label: "Fall", value: "Fall" },
];

interface UpdateAcademicSemesterPageProps {
  params: {
    id: string;
  };
}

const UpdateAcademicSemesterPage = ({
  params: { id },
}: UpdateAcademicSemesterPageProps) => {
  const [updateSemester, { isLoading }] = useUpdateAcademicSemesterMutation();

  const { data } = useAcademicSemesterQuery(id);

  const onSubmit = async (data: any) => {
    if (data?.title === "Autumn") data["code"] = "01";
    else if (data?.title === "Summer") data["code"] = "02";
    else data["code"] = "03";

    data.year = parseInt(data.year);

    const updateOptions = {
      id,
      body: {
        title: data.title,
        code: data.code,
        year: data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
      },
    };

    try {
      const res = await updateSemester(updateOptions);
      if (!!res) message.success("Academic Semester Updated successfully");
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
          { label: "academic-semester", link: `/${base}/academic/semester` },
        ]}
      />
      <h1>Create Academic Semester</h1>
      <Form submithandler={onSubmit} defaultValues={data}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectField
              options={semesterOptions}
              size="large"
              name="title"
              label="Title"
              placeholder="Select Title"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectField
              options={monthOptions}
              size="large"
              name="startMonth"
              label="Start Month"
              placeholder="Select Start Month"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectField
              options={monthOptions}
              size="large"
              name="endMonth"
              label="End Month"
              placeholder="Select End Month"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormYearPicker name="year" picker="year" label="Year" />
          </Col>
        </Row>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default UpdateAcademicSemesterPage;
