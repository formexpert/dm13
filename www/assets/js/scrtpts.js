  $(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('.shk-count');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('.shk-count');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }); 
 $(document).ready(function(){
	var maxH = 0;
	$('.rovno').each(function () {
		var h_block = parseInt($(this).height());
		if(h_block > maxH) {
			maxH = h_block;
		};
	});
	$('.rovno').height(maxH);
});
        $(document).ready(function(){
          $('.bxslider').bxSlider({
            mode: 'fade',           // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
            captions: false,         // отображение title
            easing: 'easeInOutQuad',// анимация слайда
            controls: true,         // отображение стрелки - вперед, назад
            startSlide: 0,          // Показ начнется с заданного слайда
            infiniteLoop: true,     // показывать первый слайд за последним 
            pager: true,            // показ номера страницы
            auto: true,             // сделать автоматический переход
            autoControls: false,     // показывает кнопку плей и стоп
            video: true,            // включить видео
            pause: 6000,            // время между сменой слайдов в м-сек
            speed: 500,             // длительность перехода слайда в м-сек
            useCSS: false           // CSS переходы
          });
          $('.slider1').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            auto: true,
            pager: false   
          });
        });
  $(document).ready(function() {
    $("a.gallery, a.iframe").fancybox();
  });
  $(document).ready(function(){
   $(".navblock").click(function(){
     window.location=$(this).find("a").attr("href");return false;
   });  
   $(".bl1").click(function(){
     window.location=$(this).find("a").attr("href");return false;
   });
   $(".kat-faktur").click(function(){
     window.location=$(this).find("a").attr("href");return false;
   });
 }); 