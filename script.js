document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Validar nombre
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "El nombre es obligatorio.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Validar correo electrónico
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Ingrese un correo electrónico válido.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validar edad
    const age = document.getElementById("age").value;
    if (age < 1 || age > 120) {
        document.getElementById("ageError").textContent = "Ingrese una edad válida entre 1 y 120.";
        isValid = false;
    } else {
        document.getElementById("ageError").textContent = "";
    }

    // Validar género
    const gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").textContent = "Seleccione un género.";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    // Validar mensaje
    const message = document.getElementById("message").value;
    if (message === "") {
        document.getElementById("messageError").textContent = "El mensaje es obligatorio.";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});
