$(document).ready(function() {

// const that = target.closest($(this));
// let target = event.target;
// let $counter = $(this).find('.button__like_num span');
// let count = parseInt($counter.text());

	$('.button__like_border').on('click', function () {

		let $counter = $(this).find('.button__like_num span');
		let count = parseInt($counter.text());

		if ($(this).hasClass('liked')) {
			count--;
			$(this).removeClass('liked');
			// $(this).closest('button__like');
			$(this).find('i.button__like_heart_favorite').text('favorite_border');
						
			
		} else {
			$(this).addClass('liked');
			$(this).find('i.button__like_heart_favorite').text('favorite');
			count++;
			}
			$(this).find('.button__like_num span').text(count);
		});
});	