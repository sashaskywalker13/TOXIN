$(document).ready(function() {

var count = parseInt($('.button__like_num span').text());

	$('.button__like_border').on('click', function () {
		if ($(this).hasClass('liked')) {
			count -= 1;
			$(this).removeClass('liked');
			$('i.button__like_heart_favorite').text('favorite_border');			
			
		}else {
			$(this).addClass('liked');
			$('i.button__like_heart_favorite').text('favorite');
			count += 1;
			}
			$('.button__like_num span').text(count);
	})	
});	