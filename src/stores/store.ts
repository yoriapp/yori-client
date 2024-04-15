import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authSlice';
import { authApi } from './services/auth';
import LocalStorageManager from './persist/localStorageManager'; 

const rootReducer = combineReducers({ auth: authReducer, [authApi.reducerPath]: authApi.reducer });

const persistedAuthState = LocalStorageManager.loadState<AuthState>('auth');

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: { auth: persistedAuthState }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  });

  store.subscribe(() => {
    LocalStorageManager.saveState('auth', store.getState().auth);
  });

  return store;
};

export type AuthState = ReturnType<typeof authReducer>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
