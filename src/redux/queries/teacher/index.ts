import {ApiUrl} from '../../../utils/apiUrl';
import {apiQuery} from '../../../services/api';
import {store} from '../../store';

const apiTeacher = apiQuery.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    faculty: builder.query({
      query: () => {
        return {
          url: ApiUrl.options + '/faculty',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        };
      },
    }),
    teachers: builder.query({
      query: () => {
        return {
          url: ApiUrl.teacher,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        };
      },
    }),
  }),
});

export const {useTeachersQuery, useFacultyQuery} = apiTeacher;
