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
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $("#return-to-top").fadeIn(250);
    } else {
      $("#return-to-top").fadeOut(250);
    }
  });
  $("#return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
})(jQuery);
