import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logOut: state => {
      state.token = null;
    },
  },
});
