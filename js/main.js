$(document).ready(function(){
	$('.nav-icon2').click(function(){
		$('.navigation').toggleClass('isOpen');
		$(this).toggleClass('open');
	});
});


$(function () {
    $(".h3").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".h3:hidden").slice(0, 4).slideDown();
        if ($(".h3:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
