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
      query: id => {
        return {
          url: ApiUrl.application + '/' + id,
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
    getWork: builder.query({
      query: id => {
        return {
          url: ApiUrl.work + '/' + id,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        };
      },

    }),
    changeWorkState: builder.mutation<undefined, {studentId: number; taskid: number;}>({
      query: ({studentId, taskid}) => {
        return {
          url: ApiUrl.work + '/' + studentId + '/' + taskid,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useUserInfoQuery,
  useGetApplicationQuery,
  useSendApplicationMutation,
  useGetWorkQuery,
  useChangeWorkStateMutation,
} = apiUser;
