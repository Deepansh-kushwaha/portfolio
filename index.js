$(document).ready(function () {
    $("ul.navbar-nav > li > a").click(
      function (e) {
        $("ul.navbar-nav > li").removeClass(
          "active");
        $("ul.navbar-nav > li > a").css(
          "color", "white");

        $(this).addClass("active");
        $(this).css("color", "#fefe00");
    });
});

  AOS.init();
