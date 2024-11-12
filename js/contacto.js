document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      Swal.fire('Error', 'Todos los campos son obligatorios.', 'error');
      return;
    }
  
    if (!validateEmail(email)) {
      Swal.fire('Error', 'Por favor, ingresa un correo electrónico válido.', 'error');
      return;
    }
  
    Swal.fire({
      title: 'Confirmación',
      text: '¿Deseas enviar este mensaje?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Enviado', 'Tu mensaje ha sido enviado exitosamente.', 'success');
        document.getElementById('contactForm').reset();
      }
    });
  });
  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  