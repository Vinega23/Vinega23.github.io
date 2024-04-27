(function ($) {
  var galleryOne = $(".gallery");
  startingOpacity = galleryOne.find("img").css("opacity");

  galleryOne.find("img").on("mouseenter mouseleave", function (event) {
    var opacity = event.type === "mouseenter" ? 1 : startingOpacity;

    $(this).stop().fadeTo(200, opacity);
  });

  function scrollAndRoll(position) {
    return win.scrollTop() >= position;
  }
  var title = $(".dyazart-title");

  $("#menuToggle ul li a").on("click", function () {
    $("#op").prop("checked", false);
  });

  var gallery = $(".gallery a").simpleLightbox({
    spinner: true,
    captions: false,
  });
  // ===== Scroll to Top ====
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  // ===== Gallery buttons ====
  
  $(".filterSections").click(function(){
    var articleId = $(this).data("article-id");
    if(articleId === "*"){
      $(".article").fadeIn();
      $(".filterSections").removeClass("active");
      $(this).addClass("active");
    }else{
    $(".article").hide(); 
    $("#" + articleId).fadeIn();
    $(".filterSections").removeClass("active");        
    $(this).addClass("active");
    }
});
})(jQuery);
