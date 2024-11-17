   // Obtener los parámetros de la URL
   const params = new URLSearchParams(window.location.search);
   const medicoSeleccionado = params.get('medico');
   const especialidadSeleccionada = params.get('especialidad');

   // Seleccionar el valor en el select de médicos
   if (medicoSeleccionado) {
       document.getElementById('medico').value = medicoSeleccionado;
   }

   // Seleccionar el valor en el select de especialidades
   if (especialidadSeleccionada) {
       document.getElementById('especialidad').value = especialidadSeleccionada;
   }