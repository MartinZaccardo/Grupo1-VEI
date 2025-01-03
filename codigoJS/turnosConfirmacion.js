

document.getElementById('especialidad').value = localStorage.getItem('especialidad') || 'No seleccionado';
 // para verificar si el usuario seleccionó un médico o no
 const medicoSeleccionado = localStorage.getItem('medico');
 if (medicoSeleccionado === "Seleccione un médico (opcional)" || !medicoSeleccionado) {
     document.getElementById('medico').value = "No especificado";
 } else {
     document.getElementById('medico').value = medicoSeleccionado;
 }
       
document.getElementById('calendar').value = localStorage.getItem('calendar') || 'No seleccionado';
   document.getElementById('options').value = localStorage.getItem('options') || 'No seleccionado';
   document.getElementById('sucursal').value = localStorage.getItem('sucursal') || 'No seleccionado';


     
     function guardarTurno() {
             const turno = {
            calendar: localStorage.getItem('calendar'),
            options: localStorage.getItem('options'),
            sucursal: localStorage.getItem('sucursal'),
            medico: localStorage.getItem('medico') === "Seleccione un médico (opcional)" ? "No seleccionó nada" : localStorage.getItem('medico'),
            especialidad: localStorage.getItem('especialidad')
        };

        const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
        turnos.push(turno); // Agrega el nuevo turno al array
        localStorage.setItem('turnos', JSON.stringify(turnos)); 
    }

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        guardarTurno();
        });
   
        document.getElementById('confirmarTurno').addEventListener('click', function () {
            localStorage.setItem('notificacion', 'Turno reservado con éxito!');
            window.location.href = '../home.html'; // Redirige a la página destino
        });