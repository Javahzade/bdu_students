import {ApiUrl} from '../../../utils/apiUrl';
import {apiQuery} from '../../../services/api';
import {store} from '../../store';

const apiUser = apiQuery.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    userInfo: builder.query({
      query: params => {
        return {
          url: ApiUrl.student + '/' + params.id,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        };
      },
    }),
    getApplication: builder.query({
      query: params => {
        return {
          url: ApiUrl.application + '/' + params.id,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        };
      },
    }),
    sendApplication: builder.mutation({
      query: body => {
        return {
          url: ApiUrl.application,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
          body,
        };
      },
    }),
  }),
});

export const {useUserInfoQuery, useGetApplicationQuery} = apiUser;
