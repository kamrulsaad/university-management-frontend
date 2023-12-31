import { IAdmin, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { TagTypes } from "../tag-types";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.admin],
    }),

    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [TagTypes.admin],
    }),

    admin: build.query({
      query: (id: string) => {
        return {
          url: `${ADMIN_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: [TagTypes.admin],
    }),
  }),
});

export const { useAdminsQuery, useAddAdminWithFormDataMutation, useAdminQuery } = adminApi;
