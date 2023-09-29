"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: "Admin List",
            link: `/super_admin/admin`,
          },
        ]}
      />
      <h1>Create Admin </h1>
      <div>
        <Form submithandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              padding: "15px",
              border: "1px solid #d9d9d9",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  label="First Name"
                  name="admin.name.firstName"
                  size="large"
                  type="text"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  label="Middle Name"
                  name="admin.name.middleName"
                  size="large"
                  type="text"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  label="Last Name"
                  name="admin.name.lastName"
                  size="large"
                  type="text"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
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
                  label="Gender"
                  size="large"
                  name="admin.gender"
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
                <FormSelectField
                  label="Department"
                  size="large"
                  name="admin.managementDepartment"
                  options={departmentOptions}
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

          {/* Basic Information  */}

          <div
            style={{
              padding: "15px",
              border: "1px solid #d9d9d9",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  label="Email"
                  name="admin.email"
                  size="large"
                  type="email"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  label="Contact Number"
                  name="admin.contactNo"
                  size="large"
                  type="text"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  label="Emergency Contact Number"
                  name="admin.emergencyContactNo"
                  size="large"
                  type="text"
                />
              </Col>
              <Col
                style={{
                  marginBottom: "10px",
                }}
                className="gutter-row"
                span={8}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
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
                  label="Blood Group"
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroupOptions}
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
                <FormInput
                  label="Designation"
                  name="admin.designation"
                  size="large"
                  type="text"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
