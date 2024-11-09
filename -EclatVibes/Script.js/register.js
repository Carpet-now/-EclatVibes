document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;

    // Crear un objeto de usuario
    const user = {
        firstName,
        lastName,
        email,
        password,
        gender
    };

    // Guardar el usuario en localStorage
    localStorage.setItem(email, JSON.stringify(user));
    
    alert("Registro exitoso. Puedes iniciar sesión ahora.");
    window.location.href = "login.html"; // Redirigir a la página de inicio de sesión
});
