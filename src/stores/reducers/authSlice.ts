import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      const existingToken = localStorage.getItem('token');
      if (!existingToken) {
        localStorage.setItem('token', action.payload.access_token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
