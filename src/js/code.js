function loadSection(sectionId) {
    var mainContent = document.getElementById('mainContent');
    var section = document.getElementById(sectionId);
  
    // Ocultar todas las secciones
    var sections = mainContent.querySelectorAll('section');
    sections.forEach(function(sec) {
      sec.style.display = 'none';
    });
  
    // Mostrar la sección correspondiente
    section.style.display = 'block';     
}

function changeColor(index) {
    var buttons = document.querySelectorAll('.partOne button');
    var spans = document.querySelectorAll('.partOne button span');
  
    // Remover la clase "active" de todos los botones y agregar "inactive" a los spans
    buttons.forEach(function(button) {
      button.classList.remove('active');
    });
  
    spans.forEach(function(span) {
      span.classList.remove('active');
      span.classList.add('inactive');
    });
  
    // Agregar la clase "active" al botón clicado y al span correspondiente
    buttons[index].classList.add('active');
    spans[index].classList.remove('inactive');
    spans[index].classList.add('active');
  }

  // Establecer el primer botón como activo y los demás como inactivos al cargar la página
window.onload = function() {
    changeColor(0);
    loadSection('section1');
  };
