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

export const createAndPublishBlogPostAPI = (blog) => axios({
    method: 'post',
    url: `${BASE_URL}/posts/publish`,
    headers: {},
    data: blog,
});

export const listRoles = () => axios.get(`${BASE_URL}/role/all`);

export const loginUserAPI = (user) => axios({
    method: 'post',
    url: `${BASE_URL}/auth/login`,
    headers: {},
    data: user,
});

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

export const addNewEmployee = (employee) => axios.post(`${BASE_URL}/new-employee`, employee);

export const getEmployee = (id) => axios.get(`${BASE_URL}/${id}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${BASE_URL}/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(BASE_URL + '/' + employeeId);