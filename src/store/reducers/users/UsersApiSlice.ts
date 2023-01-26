import { apiSlice } from "../../../api/apiSlice";
import {IUser, IUserResponse, userMapper} from "./types";


const baseUsersUrl = "/users";
const entityTag = "Users";

export const usersApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: [entityTag],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query<IUser[], void>({
        query: () => baseUsersUrl,
        transformResponse: (response: IUserResponse[]) => response.map(userMapper),
        keepUnusedDataFor: 240,
        providesTags: () => [entityTag],
      }),
      addUser: builder.mutation<{ id: number }, IUser>({
        query: ({ name, about, age }) => ({
          url: baseUsersUrl,
          method: "POST",
          body: {
            name,
            about,
            age,
          },
        }),
        invalidatesTags: [entityTag],
      }),
      changeUser: builder.mutation<void, IUser>({
        query: ({ id, name, age, about }) => ({
          url: `${baseUsersUrl}/${id}`,
          method: "PUT",
          body: {
            name,
            age,
            about,
          },
        }),
        invalidatesTags: [entityTag],
      }),
      deleteUser: builder.mutation<void, number>({
        query: (id) => ({
          url: `${baseUsersUrl}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: [entityTag],
      }),
    }),
  });

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useChangeUserMutation,
} = usersApiSlice;
