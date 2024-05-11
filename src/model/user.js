class User {
    constructor(username, firstName, lastName, email, accessToken, refreshToken) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    isAuthenticated() {
        return !!this.accessToken;
    }
}

export default User;