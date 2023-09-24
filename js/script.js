(function($){                 
    
    var galleryOne = $('.gallery');
    startingOpacity = galleryOne.find('img').css('opacity');

    galleryOne.find('img').on('mouseenter mouseleave', function(event){

        var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
    
        $(this).stop().fadeTo(200, opacity)
    })
    
    var win = $(window);
    
    function scrollAndRoll(position){
        return win.scrollTop() >= position;
    };
    
    win.on('scroll', function(){
        if (scrollAndRoll(100)) $('.arrow').fadeOut(200);
        
    })

    var title = $('.dyazart-title');
        bioImg = $('.section-bio .content');      
    title.hide();
    
    

    
    win.on('scroll', function(){
        if (scrollAndRoll(100) ) title                   
        .fadeIn(1500)
        .animate({left: -6},{
            duration: 500,
            queue: false})       
    })
    win.on('scroll', function(){
        if (scrollAndRoll(300) ) bioImg                           
        .fadeIn(1500)
        .animate({left: 0},{
            duration: 500,
            queue: false})       
    })

    win.on('scroll', function(){
        if (scrollAndRoll(100) ){
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

