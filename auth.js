const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value;

        const existingUser =
            JSON.parse(localStorage.getItem("user"));

        if (existingUser && existingUser.email === email) {

            document.getElementById("error-message").textContent =
                "Email already registered.";

            return;
        }

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const error =
            document.getElementById("error-message");

        const savedUser =
            JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {

            error.textContent =
                "No account found. Please sign up first.";

            return;
        }

        if (email !== savedUser.email) {

            error.textContent =
                "Email does not exist.";

            return;
        }

        if (password !== savedUser.password) {

            error.textContent =
                "Incorrect password.";

            return;
        }

        error.textContent = "";

        let loginCount =
            Number(localStorage.getItem("loginCount")) || 0;

        loginCount++;

        localStorage.setItem(
            "loginCount",
            loginCount
        );

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
            "dashboard.html";

    });

}