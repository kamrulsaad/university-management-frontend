import { IFaculty, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { TagTypes } from "../tag-types";

const FACULTY_URL = "/faculties";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFacultyWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.faculty],
    }),
    faculties: build.query({
      query: (arg: Record<string, any>) => ({
        url: FACULTY_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFaculty[], meta: IMeta) => ({
        faculties: response,
        meta,
      }),
      providesTags: [TagTypes.faculty],
    }),

    faculty: build.query({
      query: (id: string) => ({
        url: `${FACULTY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.faculty],
    }),

    updateFaculty: build.mutation({
      query: (data) => ({
        url: `${FACULTY_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [TagTypes.faculty],
    }),

    deleteFaculty: build.mutation({
      query: (id) => ({
        url: `${FACULTY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.faculty],
    }),
  }),
});

export const {
  useCreateFacultyWithFormDataMutation,
  useFacultiesQuery,
  useFacultyQuery,
  useUpdateFacultyMutation,
  useDeleteFacultyMutation,
} = adminApi;
