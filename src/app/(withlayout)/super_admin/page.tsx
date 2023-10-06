"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const SuperAdminPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>This is the Super Admin Page</h1>
    </div>
  );
};

export default SuperAdminPage;
