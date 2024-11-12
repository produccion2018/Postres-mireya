document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    // Hover effect
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });

    // Click effect: Resaltar la tarjeta y mostrar una alerta con SweetAlert2
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      const tortaName = card.querySelector(".title").textContent;
      
      // SweetAlert2 alert
      Swal.fire({
        title: '¡Torta Seleccionada!',
        text: `Has seleccionado la torta: ${tortaName}`,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
    });
  });
});

  