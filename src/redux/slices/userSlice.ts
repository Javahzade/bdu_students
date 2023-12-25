import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  token: string | null;
  filters: string[];
}

const initialState: UserState = {
  id: null,
  token: null,
  filters: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{id: number; token: string}>) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    logOut: state => {
      state.token = null;
      state.id = null;
      state.filters = [];
    },
  },
});
