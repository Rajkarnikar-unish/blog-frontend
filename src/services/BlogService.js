import apiClient from "../api/api";

export const getAllBlogsAPI = () => apiClient({
    // BASE_URL + "/posts"
    method: 'get',
    url: `/posts`,
    headers: {}
});

export const getBlogsByIDAPI = (id) => apiClient({
    method: 'get',
    url: `/posts/${id}`,
    headers: {}
});

export const createBlogPostAPI = (blog, token) => apiClient({
    method: 'post',
    url: `/posts/new-post`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json",
    },
    data: blog,
});

export const getPostsByUserAPI = (id, status) =>{
    const url = status ? `/users/${id}/posts?status=${status}` : `/users/${id}/posts`;

    return apiClient({
        method: 'get',
        url: url,
        headers: {},
        withCredentials: true,
    });
};

export const createAndPublishBlogPostAPI = (blog, token) => apiClient({
    method: 'put',
    url: `/posts/publish`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    data: blog,
});

export const listRoles = () => apiClient({
    method: 'get',
    url: `/role/all`,
    headers: {},
})

// axios.get(`${BASE_URL}/role/all`);