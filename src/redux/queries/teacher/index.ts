import {ApiUrl} from '../../../utils/apiUrl';
import {apiQuery} from '../../../services/api';
import {store} from '../../store';
import {transformTeacherData} from '../../../utils/helpers';

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
    subject: builder.query({
      query: () => {
        return {
          url: ApiUrl.options + '/subject',
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
      transformResponse: resp => transformTeacherData(resp),
    }),
  }),
});

export const {useTeachersQuery, useFacultyQuery, useSubjectQuery} = apiTeacher;
