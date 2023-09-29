"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import {
  acDepartmentOptions,
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #d9d9d9",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={6}
        >
          <FormInput
            label="First Name"
            name="student.name.firstName"
            size="large"
            type="text"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={6}
        >
          <FormInput
            label="Middle Name"
            name="student.name.middleName"
            size="large"
            type="text"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={6}
        >
          <FormInput
            label="Last Name"
            name="student.name.lastName"
            size="large"
            type="text"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={6}
        >
          <FormInput
            label="Password"
            name="password"
            size="large"
            type="password"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={8}
        >
          <FormSelectField
            label="Academic Department"
            size="large"
            name="student.academicDepartment"
            options={acDepartmentOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={8}
        >
          <FormSelectField
            label="Academic Faculty"
            size="large"
            name="student.academicFaculty"
            options={facultyOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={8}
        >
          <FormSelectField
            label="Academic Semester"
            size="large"
            name="student.academicSemester"
            options={acSemesterOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={8}
        >
          <FormSelectField
            label="Gender"
            size="large"
            name="student.gender"
            options={genderOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          style={{
            marginBottom: "10px",
          }}
          className="gutter-row"
          span={8}
        >
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
