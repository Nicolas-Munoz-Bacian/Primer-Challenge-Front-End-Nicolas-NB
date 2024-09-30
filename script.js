//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Validación del nombre
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, ingresa tu nombre.';
        nameInput.classList.add('error');
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
    }

    // Validación del correo electrónico
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
        emailInput.classList.add('error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }

    // Validación del mensaje
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Por favor, escribe un mensaje.';
        messageInput.classList.add('error');
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('error');
    }

    // Si todos los campos son válidos, puedes enviar el formulario
    if (nameInput.classList.contains('error') || emailInput.classList.contains('error') || messageInput.classList.contains('error')) {
        // No enviar el formulario
    } else {
        // Enviar el formulario
        // ...
    }
});

// Función para validar el correo electrónico
function isValidEmail(email) {
    // Puedes usar una expresión regular para validar el correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


const showDescriptionButtons = document.querySelectorAll('.show-descriptionn');
const descriptions = document.querySelectorAll('.description');

showDescriptionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        descriptions[index].style.display = 'block';
    });
});

/*---VOLVER ARRIBA--- */

const botonVolver = document.getElementById('volver-cabecera');

botonVolver.addEventListener('click', () => {
    document.querySelector('.cabecera').scrollIntoView({ behavior: 'smooth' });
});