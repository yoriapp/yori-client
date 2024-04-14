import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authSlice';

import { authApi } from './services/auth';

const rootReducer = combineReducers({ auth: authReducer, [authApi.reducerPath]: authApi.reducer });

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware),
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
