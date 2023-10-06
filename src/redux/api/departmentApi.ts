import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.department],
    }),
  }),
});

export const { useCreateDepartmentMutation } = departmentApi;
