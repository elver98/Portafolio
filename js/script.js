
  // Add click functionality to project buttons
  document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.btn.access');
    projectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank');
        } else {
          alert('¡Proyecto en desarrollo! Pronto estará disponible.');
        }
      });
    });

    // Add click functionality to view buttons
    const viewButtons = document.querySelectorAll('.btn.view');
    viewButtons.forEach(button => {
      button.addEventListener('click', () => {
        const project = button.getAttribute('data-project');
        let message = '';
        switch (project) {
          case 'html':
            message = 'Proyecto HTML5: Un sitio web responsivo con estructura semántica, optimizado para SEO y accesibilidad.';
            break;
          case 'js':
            message = 'Proyecto JavaScript: Aplicación interactiva con animaciones dinámicas y manipulación del DOM en tiempo real.';
            break;
          case 'python':
            message = 'Proyecto Python: Script de automatización para análisis de datos y visualización con bibliotecas como Pandas y Matplotlib.';
            break;
          case 'cpp':
            message = 'Proyecto C++: Aplicación de alto rendimiento para simulación de sistemas con gestión eficiente de memoria.';
            break;
          default:
            message = '¡Proyecto en desarrollo! Más detalles pronto.';
        }
        alert(message);
      });
    });
  });
