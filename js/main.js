$('.videos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_prew slider_arrow">',
    nextArrow: '<div class="slider_next slider_arrow">',
    responsive: [
        {
            breakpoint: 788,
            settings: {
                slidesToShow: 2,
            }
        },
    ],
});
$(document).on('click', '.profilenav_menu', function(e){
    e.preventDefault();
    let target_window = $('.catmenu');
    target_window.toggleClass('active');
});
$(document).on('click', '.history_item-header', function(e){
    e.preventDefault();
    let target = $(this).parents('.history_item');
    target.toggleClass('active');
});
$(document).on('click', '.faq_item', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
});
$(document).on('click', '.mainbanner_button', function(e){
    e.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 400);
});
