import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {ApiUrl} from '../utils/apiUrl';

const setTokenInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const store = (await AsyncStorage.getItem('persist:auth')) || '';
      const {accessToken} = JSON.parse(store) as {
        accessToken: string | null;
      };
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

export class Api {
  static instance: Api;

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 30000,
      baseURL: ApiUrl.baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setTokenInterceptors(this.axiosInstance);
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static request<T = unknown>(config: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().request(config);
  }
}
