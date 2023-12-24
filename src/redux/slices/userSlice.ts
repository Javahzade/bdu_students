import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{id: number; token: string}>) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOut: state => {
      state.token = null;
      state.id = null;
    },
  },
});
