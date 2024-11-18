    document.querySelector('form').addEventListener('submit', function() {
        // Almacenar valores en localStorage
        localStorage.setItem('calendar', document.getElementById('calendar').value);
        localStorage.setItem('sucursal', document.getElementById('sucursal').value);

        // Captura el valor del radio button seleccionado en options
        const selectedOption = document.querySelector('input[name="options"]:checked').nextElementSibling.innerText;
        localStorage.setItem('options', selectedOption);
    });

