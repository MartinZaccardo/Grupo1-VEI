   // Función para mostrar los turnos en la tabla
   function mostrarTurnos() {
    const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
    const tableBody = document.getElementById('turnos-table-body');
    tableBody.innerHTML = ''; // Limpiar la tabla

    // Agregar cada turno a la tabla
    turnos.forEach(turno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${turno.calendar || 'No seleccionado'}</td>
            <td>${turno.options || 'No seleccionado'}</td>
            <td>${turno.sucursal || 'No seleccionado'}</td>
            <td>${turno.medico || 'No seleccionado'}</td>
            <td>${turno.especialidad || 'No seleccionado'}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Llamar a la función para mostrar los turnos cuando se carga la página
document.addEventListener('DOMContentLoaded', mostrarTurnos);