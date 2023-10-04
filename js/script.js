(function($){                 
    var win = $(window);
    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + win.height();
        var tags = $(".tag");
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
      
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
          }
       
        }
    });  
    
    var galleryOne = $('.gallery');
    startingOpacity = galleryOne.find('img').css('opacity');

    galleryOne.find('img').on('mouseenter mouseleave', function(event){

        var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
    
        $(this).stop().fadeTo(200, opacity)
    })
    
    
    function scrollAndRoll(position){
        return win.scrollTop() >= position;
    };
    
    win.on('scroll', function(){
        if (scrollAndRoll(0)) $('.arrow').fadeOut(300);
        
    })
    var title = $('.dyazart-title');
    title.hide();
    win.on('scroll', function(){
        if (scrollAndRoll(10)) title.fadeIn(1000);
        
    })        
   
    win.on('scroll', function(){
        if (scrollAndRoll(10) ){
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

