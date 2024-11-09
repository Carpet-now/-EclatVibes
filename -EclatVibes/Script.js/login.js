document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtener los datos del usuario del localStorage
    const user = JSON.parse(localStorage.getItem(email));

    // Verificar si el usuario existe y si la contraseña es correcta
    if (user && user.password === password) {
        alert("Inicio de sesión exitoso.");
        localStorage.setItem("loggedIn", "true"); // Establecer estado de inicio de sesión
        window.location.href = "index.html"; // Redirigir a la página principal
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});
