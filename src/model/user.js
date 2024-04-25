export class User {
    constructor(
        username = "",
        firstName = "",
        lastName = "",
        email = "",
        password = "",
        confirmPassword = "",
    ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}