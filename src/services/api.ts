import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiUrl} from '../utils/apiUrl';

export const apiQuery = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl.baseUrl,
    headers: {'Content-type': 'application/json'},
  }),
  endpoints: () => ({}),
});
