class User {
    constructor(username, firstName, lastName, email, accessToken, refreshToken, emailVerified) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.emailVerified = emailVerified;
    }

    isAuthenticated() {
        return !!this.accessToken;
    }
}

export default User;