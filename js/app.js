
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
  
  // sobre mi
  // Evento para resaltar el ítem activo en la barra de navegación
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#ffc107';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = link.classList.contains('active') ? '#fff' : '#444';
  });
});

// Animación al hacer clic en enlaces del menú de navegación
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animación para mostrar el texto de presentación en la sección "Sobre mí"
document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.querySelector('.titulo');
  const subtitulo = document.querySelector('.subtitulo');
  titulo.classList.add('fade-in');
  subtitulo.classList.add('fade-in');
});

// Agregar clases para animaciones CSS en fade-in
const cssStyles = document.createElement('style');
cssStyles.innerHTML = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease-in-out forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(cssStyles);

// Agregar interacción con íconos de redes sociales
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.color = '#fff';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.color = '#ffc107';
  });
});
