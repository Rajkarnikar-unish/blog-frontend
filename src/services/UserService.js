import apiClient from "../api/api";

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
 * User Verify Email API function
 * token is a request param
 */
export const verifyUserEmail = (token) => apiClient({
    method: 'post',
    url: `/auth/verify?token=${token}`
});

/**
 * User Forgot Password API function
 */
export const forgotPassword = (email) => apiClient({
    method: 'post',
    url: `/auth/forgot-password?email=${email}`
});

/**
 * Password Reset API Functin
 * Takes JSON Body with password and JWT
 */
export const resetPasswordAPI = (resetBody) => apiClient({
    method: 'post',
    url: "/auth/reset-password",
    data: resetBody,
})

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

// export const getAllUser = () => apiClient({
//     method: 'get',
//     url: `/users/user-role?roleName=ROLE_USER`,
//     headers: {},
// });