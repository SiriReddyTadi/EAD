function login(username, password, success, failure) {
    if (username === "admin" && password === "1234") {
        success();
    } else {
        failure();
    }
}
login(
    "admin", "1234",
    () => console.log("Login Successful"),
    () => console.log("Login Failed")
);
login(
    "user", "1234",
    () => console.log("Login Successful"),
    () => console.log("Login Failed")
);