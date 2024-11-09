// Función para mostrar el modal de productos masculinos
function showProductModal() {
    document.getElementById("productModal").style.display = "block";
}

// Función para mostrar el modal de productos femeninos
function showWomenProductModal() {
    document.getElementById("womenProductModal").style.display = "block";
}

// Función para mostrar los botones de productos
function showProductsButton() {
    document.getElementById("viewProducts").style.display = "block"; // Mostrar botón de ropa masculina
    document.getElementById("viewWomenProducts").style.display = "block"; // Mostrar botón de ropa femenina
}

// Simulación de inicio de sesión (reemplaza esto con tu lógica de inicio de sesión real)
document.getElementById("loginNav")?.addEventListener("click", function() {
    // Lógica de inicio de sesión aquí...
    // Por ejemplo, guardamos el estado de inicio de sesión en localStorage
    localStorage.setItem("loggedIn", "true");
    // Mostrar los botones de productos
    showProductsButton();
});

// Cerrar el modal de productos masculinos al hacer clic en el botón de cerrar
document.getElementById("closeModal")?.addEventListener("click", function() {
    document.getElementById("productModal").style.display = "none";
});

// Cerrar el modal de productos femeninos al hacer clic en el botón de cerrar
document.getElementById("closeWomenModal")?.addEventListener("click", function() {
    document.getElementById("womenProductModal").style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    const womenModal = document.getElementById("womenProductModal");
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == womenModal) {
        womenModal.style.display = "none";
    }
};

// Comprobar si el usuario está iniciado sesión al cargar la página
window.onload = function() {
    if (localStorage.getItem("loggedIn") === "true") {
        showProductsButton(); // Mostrar los botones
    }
};

// Mostrar el modal de productos masculinos al hacer clic en el botón de "Ver Ropa Masculina"
document.getElementById("viewProducts")?.addEventListener("click", function() {
    showProductModal();
});

// Mostrar el modal de productos femeninos al hacer clic en el botón de "Ver Ropa Femenina"
document.getElementById("viewWomenProducts")?.addEventListener("click", function() {
    showWomenProductModal();
});


// Mostrar el modal al hacer clic en el botón de "Ver Ropa"
document.getElementById("viewProducts")?.addEventListener("click", function() {
    showProductModal();
});

// Agregar reseñas
document.getElementById("reviewForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let reviewText = document.getElementById("reviewText").value;

    if (reviewText) {
        let reviewList = document.getElementById("reviewList");
        let newReview = document.createElement("p");
        newReview.textContent = reviewText;

        reviewList.appendChild(newReview);
        document.getElementById("reviewText").value = ""; // Limpiar el textarea
    } else {
        alert("Por favor, escribe una opinión antes de enviar.");
    }
});