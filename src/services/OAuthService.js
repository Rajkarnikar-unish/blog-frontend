import apiClient from "./client/api";

export const googleLoginAPI = () => apiClient({
    method: 'get',
    url: '/login/oauth2/code/google',
    headers: {},
});