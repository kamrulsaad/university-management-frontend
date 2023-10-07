import { IDepartment, IMeta } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get Departments
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [TagTypes.department],
    }),

    // Create Department
    createDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.department],
    }),

    // Get Single Department
    department: build.query({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.department],
    }),

    // Update Department
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.department],
    }),

    // Delete Single Department
    deleteDepartmnet: build.mutation({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.department],
    }),
  }),
});

export const {
  useCreateDepartmentMutation,
  useDepartmentsQuery,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmnetMutation,
} = departmentApi;
