(function($){                 
    
    var galleryOne = $('.gallery');
    startingOpacity = galleryOne.find('img').css('opacity');

    galleryOne.find('img').on('mouseenter mouseleave', function(event){

        var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
    
        $(this).stop().fadeTo(200, opacity)
    })

    var title = $('.dyazart-title');        
    title.hide();
    // $('.dyazart-title')
    // .hide()
    // .fadeIn(3000);

    var win = $(window);
    win.on('scroll', function(){
        if (win.scrollTop() >=100 ) title.fadeIn(2000); //element se objevi az po scrolovani na pozici 500
        
    }) 
    win.on('scroll', function(){
        if (win.scrollTop() >=100 ){
            $('.main-nav').addClass('scrolled');         

        }
        else {
            $('.main-nav').removeClass('scrolled');         
           
        }
    }); 
     
    var gallery = $('.gallery a').simpleLightbox({    
          
            spinner:true,
            captions:false
             
    });

   
   
        
    
    
        
})(jQuery);

