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
  }),
});

export const {useUserInfoQuery} = apiUser;
