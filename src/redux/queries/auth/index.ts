import {ApiUrl} from '../../../utils/apiUrl';
import {apiQuery} from '../../../services/api';

const apiAuth = apiQuery.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    login: builder.mutation({
      query: params => {
        return {
          url: ApiUrl.login,
          method: 'POST',
          params,
        };
      },
    }),
    createUser: builder.mutation({
      query: data => {
        return {
          url: ApiUrl.student,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const {useLoginMutation, useCreateUserMutation} = apiAuth;
