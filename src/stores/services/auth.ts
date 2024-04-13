import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUser, AuthCredentials, RegisterData } from '@/types';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthUser, AuthCredentials>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<AuthUser, RegisterData>({
            query: (userData) => ({
                url: 'auth/register',
                method: 'POST',
                body: userData,
            }),
        }),
        validateUser: builder.query<AuthUser, AuthCredentials>({
            query: (credentials) => ({
                url: 'auth/validateUser',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useValidateUserQuery } = authApi;
