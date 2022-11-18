import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://jsonplaceholder.typicode.com'
const REDUCER_PATH = 'apiSlice'
const POSTS_ENDPOINT = '/posts'

export const apiSlice = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => POSTS_ENDPOINT,
    }),
  }),
})

export const { useGetPostsQuery } = apiSlice
