"use client";

import Loading from "@/components/Loading/Loading";
import { useAdminQuery } from "@/redux/api/adminApi";
import Image from "next/image";

interface AdminDetailsPageProps {
  params: {
    id: string;
  };
}

const AdminDetailsPage = ({ params }: AdminDetailsPageProps) => {
  const { id } = params;

  const { data, isLoading } = useAdminQuery(id);

  return (
    <div>
      <h1>Admin Details Page</h1>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <div>
          <Image
            style={{
              borderRadius: "20px",
            }}
            src={data?.profileImage}
            width={300}
            height={300}
            alt="admin image"
          />
        </div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          <p>Id: {data?.id}</p>
          <p>First Name: {data?.name?.firstName}</p>
          <p>Middle Name: {data?.name?.middleName}</p>
          <p>Last Name: {data?.name?.lastName}</p>
          <p>Email: {data?.email}</p>
          <p>Contact No: {data?.contactNo}</p>
          <p>Emergency Contact No: {data?.emergencyContactNo}</p>
          <p>Date of Birth: {data?.dateOfBirth}</p>
          <p>Gender: {data?.gender}</p>
          <p>Blood Group: {data?.bloodGroup}</p>
          <p>Present Address: {data?.presentAddress}</p>
          <p>Permanent Address: {data?.permanentAddress}</p>
          <p>Designation: {data?.designation}</p>
          <p>ManagementDepartment: {data?.managementDepartment?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsPage;
