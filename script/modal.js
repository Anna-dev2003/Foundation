$('.modal-background').on('click', function(e){
    if($(e.target).closest('.modal').length ==0){
       $(this).fadeOut(300) 
    }   
})
$('.close').on('click', function(){
    $(this).parents('.modal-background').fadeOut(300)
})
$('.button-modal').on('click', function(){
    $('.modal-background').fadeIn(300)
})
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut()
    }
})
$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000)
})
$('#home').on('click', function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
    document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible" })
})