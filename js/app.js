// CARRUSEL DE IMAGENES



function scrollToSection(id) {
  const seccion = document.getElementById(id);
  if(seccion){
    seccion.scrollIntoView({ behavior: 'smooth' });
  }
}