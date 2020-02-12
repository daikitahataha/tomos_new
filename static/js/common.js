jQuery(function($){

  $(function(){
    $('.menu-line').animate({
        width: '50px'
    }, 1000, 'linear');
  });

  $(window).load(function(){
    $('.wrapper #fv .fv_line').animate({
      height: '155px'
    },
    {
      duration: 50
    }
  );

    //$('logo_mark_img').delay(2000).queue(function(){
    //  $(this).css('opacity', '1')
    //});

    //$('.logo_mark_img').animate({
    //  opacity: 1
    //},1000).delay(10000);
  });


  $('#MenuBtn').on('click', function(){
    if($(this).hasClass('active')){
      $('#MenuBtn').removeClass('active');
      $('.menu-nav').removeClass('open_menu');
      $('.nav-item').removeClass('open_menu');
      $('.menu-line').css('background', '#FFFFFF');
    }else{
      $('#MenuBtn').toggleClass('active');
      $('.menu-nav').addClass('open_menu');
      $('.nav-item').addClass('open_menu');
      $('.menu-line').css('background', '#16160E');
      $('.menu-line').css('width', '1px');
      $(function(){
        $('.menu-line').animate({
            width: '50px'
        }, 1000, 'linear');
      });
    }
  });

  //$('.nav-item').on('click', function(){
  //  $('#MenuBtn').removeClass('active');
  //  $('.menu-nav').removeClass('open_menu');
  //  $('.menu-line').css('background', '#FFFFFF');
  //});



});
