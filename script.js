$(document).ready(function() {
    // Función para cambiar el estilo del texto cuando se marca o desmarca el checkbox
    function animateProgressBars() {
        
        $('.progress-bar').each(function() {
            var progressBar = $(this);
            var level = parseInt(progressBar.attr('data-level'));
            var progress = progressBar.children('.progress');
            var percent = progressBar.children('.progress-percent');
            
            var progressBarTop = progressBar.offset().top;
            var progressBarBottom = progressBarTop + progressBar.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            // Verifica si la barra de progreso está en el área visible y si no ha sido animada antes
            if (progressBarBottom > viewportTop && progressBarTop < viewportBottom && !progressBar.hasClass('animated')) {
                // Agrega la clase 'animated' para marcar que esta barra ya ha sido animada
                progressBar.addClass('animated');
                
                switch(true) {
                    case (level >= 0 && level <= 25):
                        progress.width(level + '%').css('background-color', '#ff0000');
                        percent.css('color', '#ff0000');
                        break;
                    case (level > 25 && level <= 50):
                        progress.width(level + '%').css('background-color', '#ff9900');
                        percent.css('color', '#ff9900');
                        break;
                    case (level > 50 && level <= 75):
                        progress.width(level + '%').css('background-color', '#ffff00');
                        percent.css('color', '#ffff00');
                        break;
                    case (level > 75 && level <= 100):
                        progress.width(level + '%').css('background-color', '#00cc00');
                        percent.css('color', '#00cc00');
                        break;
                }
                
                progress.animate({
                    width: level + '%'
                }, 1000); // Animación de la barra de progreso
            }
        });
    }
    
    // Llama a la función cuando se carga la página y cuando se hace scroll
    $(window).on('scroll', animateProgressBars);
    $(document).ready(animateProgressBars);
});
