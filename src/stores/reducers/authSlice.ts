import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthUser } from '@/types';

interface AuthState {
  user: AuthUser | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      Cookies.set('token', action.payload.access_token, { expires: 7 });
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      Cookies.remove('token');
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
