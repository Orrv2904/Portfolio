document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Realizar una solicitud POST a la API de envío de correo
    fetch("https://api.example.com/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Manejar la respuesta del servidor
        if (data.success) {
            alert("¡Correo enviado con éxito!");
            // Restablecer el formulario después de enviar
            document.getElementById("contact-form").reset();
        } else {
            alert("Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.");
        }
    })
    .catch(function(error) {
        console.error("Error al enviar la solicitud:", error);
    });
});