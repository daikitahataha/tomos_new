jQuery(function($){

  $(window).load(function(){
    $('.wrapper #fv .fv_line').animate({
      height: '155px'
    }, 'slow').delay(500);

    $('.logo_mark_img').animate({
      opacity: 1
    }, 'slow');
  });


  $('#MenuBtn').on('click', function(){
      $(this).toggleClass('active');
      $('.menu-nav').addClass('open_menu');
      $('.nav-item').addClass('open_menu');
      $('.menu-line').css('background', '#16160E');
      $('.menu-line').css('width', '1px');
      $(function(){
        $('.menu-line').animate({
            width: '50px'
        }, 1000, 'linear');
      });
  });

  $('.nav-item').on('click', function(){
    $('#MenuBtn').removeClass('active');
    $('.menu-nav').removeClass('open_menu');
    $('.menu-line').css('background', '#FFFFFF');
  });


});
