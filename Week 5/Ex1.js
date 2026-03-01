
function loginAttemptTracker() {
    let attempts = 0;
    const maxAttempts = 3;

    return function () {
        attempts++;
        return {
            attempts,
            remaining: maxAttempts - attempts,
            blocked: attempts >= maxAttempts
        };
    };
}

const trackAttempt = loginAttemptTracker();

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const loginBtn = document.getElementById("loginBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorMsg.textContent = "";

    if (username.value.trim() === "") {
        errorMsg.textContent = "Username cannot be empty";
        return;
    }

    if (password.value.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters";
        return;
    }

    if (username.value !== "admin" || password.value !== "123456") {
        const result = trackAttempt();

        if (result.blocked) {
            errorMsg.textContent = "Account locked! Too many attempts.";
            loginBtn.disabled = true;
        } else {
            errorMsg.textContent =
                `Invalid credentials. Attempts left: ${result.remaining}`;
        }

        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Login Successful!";
});