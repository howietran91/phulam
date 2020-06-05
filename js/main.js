$(document).ready(function(){
    $(".slider .owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        items: 1
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:10
    })

    $(".togglemenu").click(function() {
        $(".subnav").slideToggle("slow"), 
        $("#over").toggle(), 
        $(this).toggleClass("togglechange"), 
        $("body").toggleClass("fixbody")
    });

    $('#go-to-detail li a').on( 'click', function(){
        var vitri = $(this).attr('href');
        var toado = $(vitri).offset().top;
        $('html,body').animate({scrollTop:toado});
        return false;
    });
});


function showMenuMobile(n)
{
    var t=$(n).attr("data-name");
    $("nav").find("li.active").removeClass();
    $(n).parent().addClass("active");
    $("nav").find(".nav-r.active").removeClass("active");
    $("nav").find(".nav-r.nav-"+t).addClass("active")
}

function show_goto() {
    var t = jQuery("#element_action");
    if (jQuery(t).length > 0) {
        $(".goto-wrapper a").on("click", function() {
            var idscroll=$(this).attr("href");
            idscroll = idscroll.replace(/#/g, "");
            $('html,body').animate({scrollTop: $("#"+idscroll).offset().top-50}, 'slow');
        });
        if (window.location.hash) {
            var hash = window.location.hash;
            $('html, body').animate({
                scrollTop :  $(hash).offset().top-100
            }, 500);
        };
    }
}