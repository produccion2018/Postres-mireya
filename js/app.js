
// Carrusel de testimonios
const testimonios = document.querySelectorAll(".testimonial");
let index = 0;

function mostrarTestimonial() {
  testimonios.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
  index = (index + 1) % testimonios.length;
}

setInterval(mostrarTestimonial, 3000); // Cambiar cada 3 segundos
document.addEventListener("DOMContentLoaded", mostrarTestimonial);

// footer
document.getElementById("formSuscripcion").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = this.querySelector("input").value.trim();
  
    if (email) {
     Swal.fire({
        icon: 'success',
        title: '¡Gracias por suscribirte!',
        text: 'Te enviaremos nuestras novedades.',
        confirmButtonColor: '#f8b400'
      });
      this.reset(); // Reinicia el formulario
    } else {
      // Muestra un mensaje de error con SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Por favor, ingresa un email válido.',
        confirmButtonColor: '#f8b400'
      });
    }
  });
  
 