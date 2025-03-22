import apiClient from "../api/api";

export const getCookies = (cookieName) => {
    const cookies = document.cookie.split(";");
    console.log(document.cookie);

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + "=")) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
};

export const getOAuthUser = () => {
    return apiClient({
        method: 'get',
        url: '/auth/oauth2-user',
        headers: {
        },
        withCredentials: true,
    });
};

export const logoutOAuth2User = () => apiClient({
    method: "post",
    url: "/auth/oauth2-logout",
    withCredentials: true,
});