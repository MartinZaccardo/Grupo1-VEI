    document.querySelector('form').addEventListener('submit', function() {
        // Almacenar valores de especialidad y médico en localStorage
        localStorage.setItem('especialidad', document.getElementById('especialidad').value);
        localStorage.setItem('medico', document.getElementById('medico').value);
    });
