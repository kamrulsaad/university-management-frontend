import { IAcademicSemester, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { TagTypes } from "@/redux/tag-types";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create ac semester endpoint
    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.academicSemester],
    }),

    // get all ac semesters endpoint
    academicSemesters: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_SEMESTER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAcademicSemester[], meta: IMeta) => {
        return {
          academicSemesters: response,
          meta,
        };
      },
      providesTags: [TagTypes.academicSemester],
    }),

    // get single ac semester endpoint
    academicSemester: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.academicSemester],
    }),

    // update existing ac semester endpoint
    updateAcademicSemester: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.academicSemester],
    }),

    // delete existing ac semester endpoint
    deleteAcademicSemester: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.academicSemester],
    }),
  }),
});

export const {
  useAddAcademicSemesterMutation, // create hook
  useAcademicSemestersQuery, // get all hook
  useAcademicSemesterQuery, // get single hook
  useUpdateAcademicSemesterMutation, // update hook,
  useDeleteAcademicSemesterMutation, // delete hook
} = academicSemesterApi;