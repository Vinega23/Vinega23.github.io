(function($){

    $(document).ready(function() {        
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': true,
            'imageFadeDuration:': 2000,
            'fitImagesInViewport': true
        });
    });                
    
    var gallery = $('.galerie');
    startingOpacity = gallery.find('img').css('opacity');

    gallery.find('img').on('mouseenter mouseleave', function(event){

        var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
    
        $(this).stop().fadeTo(200, opacity)
    })  


})(jQuery);