import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {apiQuery} from '../services/api';
import persistReducer from 'redux-persist/es/persistReducer';
import {userSlice} from './slices/userSlice';

const userConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  [apiQuery.reducerPath]: apiQuery.reducer,
  user: persistReducer(userConfig, userSlice.reducer),
});
