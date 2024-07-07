import axios from "axios";

export const BASE_URL = "http://localhost:8080/api";

export const getAllBlogsAPI = () => axios.get(BASE_URL + "/posts");

export const getBlogByIDAPI = (id) => axios.get(BASE_URL + "/posts/" + id);

export const createBlogPostAPI = (blog, token) => axios({
    method: 'post',
    url: `${BASE_URL}/posts/new-post`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json",
    },
    data: blog,
});

export const getPostsByUserAPI = (id) => axios({
    method: 'get',
    url: `${BASE_URL}/users/${id}/posts`,
    headers: {},
});

export const createAndPublishBlogPostAPI = (blog, token) => axios({
    method: 'put',
    url: `${BASE_URL}/posts/publish`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    data: blog,
});

export const listRoles = () => axios.get(`${BASE_URL}/role/all`);

/**
 * User Details API Function
 * Requires Authorization header with JWT
 */
export const getUserDetailsAPI = (token) => axios({
    method: 'get',
    url: `${BASE_URL}/auth/me`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json",
    },
})

/**
 * User Login API function
 * No need for header
 * Requires data with username and password as payload
 */
export const loginUserAPI = (user) => axios({
    method: 'post',
    url: `${BASE_URL}/auth/login`,
    headers: {},
    data: user,
});

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
export const signUpUser = (user) => axios({
    method: 'post',
    url: `${BASE_URL}/auth/register`,
    headers: {},
    data: user,
});

export const getAllUser = () => axios({
    method: 'get',
    url: `{BASE_URL}/users/user-role?roleName=ROLE_USER`,
    headers: {},
});