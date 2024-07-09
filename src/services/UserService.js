import apiClient from "./client/api";

/**
 * User Details API Function
 * Requires Authorization header with JWT
 */
export const getUserDetailsAPI = (token) => apiClient({
    method: 'get',
    url: `/auth/me`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json",
    },
});

/**
 * User Login API function
 * No need for header
 * Requires data with username and password as payload
 */
export const loginUserAPI = (user) => apiClient({ method: 'post', url: '/auth/login', data: user, });
//     axios({
//     method: 'post',
//     url: `${process.env.BASE_URL}/auth/login`,
//     headers: {},
//     data: user,
// });

/**
 * User SignUp API function
 * No need for header
 * Required data includes:
 * username
 * firstname, lastname
 * email address
 * password
 * confirmed password 
 * as payload
 */
export const signUpUserAPI = (user) => apiClient({
    method: 'post',
    url: `/auth/register`,
    headers: {},
    data: user,
});

export const getAllUser = () => apiClient({
    method: 'get',
    url: `/users/user-role?roleName=ROLE_USER`,
    headers: {},
});