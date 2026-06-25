document.addEventListener("DOMContentLoaded", () => {

    const authLinks =
        document.getElementById("auth-links");

    if (!authLinks) return;

    const loggedIn =
        localStorage.getItem("loggedIn");

    if (loggedIn) {

        authLinks.innerHTML = `
            <a href="dashboard.html">DASHBOARD</a>
            <a href="#" id="logoutNav">LOGOUT</a>
        `;

        document
            .getElementById("logoutNav")
            .addEventListener("click", function(e){

                e.preventDefault();

                localStorage.removeItem("loggedIn");

                window.location.href =
                    "login.html";
            });

    } else {

        authLinks.innerHTML = `
            <a href="login.html">LOGIN</a>
        `;
    }

});