import {BaseQueryFn} from '@reduxjs/toolkit/query';
import {AxiosError, AxiosRequestConfig} from 'axios';
import {Api} from './apiClient';

export const axiosBaseQuery: BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
  },
  any,
  {status?: number; data?: any}
> = async ({url, method, data, params}) => {
  try {
    const isFormData = data instanceof FormData;
    const result = await Api.request({
      url,
      method,
      data,
      params,
      headers: isFormData ? {'Content-Type': 'multipart/form-data'} : {},
      transformRequest: isFormData ? tData => tData : undefined,
    });
    console.log(result);
    return {data: result.data};
  } catch (e) {
    const error = e as AxiosError;
    return {
      error: {
        status: error.response?.status,
        data: JSON.stringify(error),
      },
    };
  }
};
