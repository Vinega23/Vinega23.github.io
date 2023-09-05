(function($){

    var boxImage = $('.box-image');               
    
    var overlay = $('<div/>', {id: 'overlay' }); 
    image = $('<img>'); // vytvoreni noveho elementu/image ze zdroje promenne href               
    overlay.appendTo('body').hide();    //bez metody hide() by byl overlay nacteny pri spusteni stranky

    function efect(neco){
    neco.fadeOut(1000);
    };    

    //kliknuti na obrazek a zobrazeni overlay    
    boxImage.find('img').on('click', function(event){        
                        
        $(image).attr({src: $(this).attr('href')});  //vytahnuti linku odkazu (obrazku)     
        overlay.html( image ) //zapsani do html overlay promenne image uz s novym obrazkem
                .fadeIn(1000)
            //.show();
            
        event.preventDefault();       
    });     


    //skryjeme overlay
    overlay.on('click', function(){
        efect(overlay);          
        //.hide()    
    });
    //skryjeme overlay po stiknuti ESC, 
    $(document).on('keyup', function(event){
        //console.log(event.which); //pomoci console.log muzeme zjistit cislo stiknute klavesy
        if  (event.which === 27 ) efect(overlay);
    });
    

    var gallery = $('.galerie'); //vytazeni elementu
    startingOpacity = gallery.find('img').css('opacity'); //vytazeni hodnoty opacity z CSS

    gallery.find('img').on('mouseenter mouseleave', function(event){ //dva eventy v jednom naslouchaci

        var opacity = event.type === 'mouseenter' ? 1 : startingOpacity; //ternarni operator
    
        $(this).stop().fadeTo(200, opacity) //metoda
    })

    //Overlay galerie
    var galerie = $('.galerie');
    galerie.find('a').on('click', function(event){        
                        
        $(image).attr({src: $(this).attr('href')});  //vytahnuti linku odkazu (obrazku)     
        overlay.html( image ) //zapsani do html overlay promenne image uz s novym obrazkem
                .fadeIn(1000)
            //.show();
            
        event.preventDefault();       
    });     


})(jQuery);