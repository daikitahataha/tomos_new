jQuery(function($){
  $('#MenuBtn').on('click', function(){
    if($(this).hasClass('active')){
      $('#MenuBtn').removeClass('active');
      $('.menu-nav').removeClass('open');
      $('.nav-item').removeClass('open');
      console.log('消える時');
    }else{
      $(this).toggleClass('active');
      $('.menu-nav').addClass('open');
      $('.nav-item').addClass('open');
      console.log('現れる時');
    }
  });

  $('.nav-item').on('click', function(){
    $('#MenuBtn').removeClass('active');
    $('.menu-nav').removeClass('open');
  });
});
