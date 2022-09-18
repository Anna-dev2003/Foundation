$('.about-items > div').on('click', function(){
    $(this).children('div.media-about-bg').children('p').toggleClass('active');
    $(this).children('div.media-about-bg').toggleClass('none-media-bg')
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor');
})
$('.customers-items > div').on('click', function(){
    $(this).parent(".customers-items").toggleClass('toggleBorderBottom')
    $(this).toggleClass('toggleBlue');
    $(this).next('p').slideToggle(300);
    $(this).children('.custom-icon').children('path').toggleClass('toggleBlue')
    $(this).next('p').next('hr').toggleClass('custom-hr-b');
})
$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});

$('.carusel-item').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
    
});
