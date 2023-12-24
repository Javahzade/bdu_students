import {ApiUrl} from '../../../utils/apiUrl';
import {apiQuery} from '../../../services/api';

const apiUser = apiQuery.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    userInfo: builder.query({
      query: params => {
        return {
          url: ApiUrl.student + '/' + params.id,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useUserInfoQuery} = apiUser;
