$(document).ready(function() {
	let click = $(this).closest('.checkbox-expandable').find('.checkbox-expandable__list');
	$('.checkbox-expandable__title').on('click', function () {
		$('.checkbox-expandable__list').slideToggle();
		let icon = $('.checkbox-expandable__title i');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			icon.css({
				'transform':'rotate(0deg)'
			});

		} else {
			$(this).addClass('active');
			icon.css({
				'transform':'rotate(-180deg)'
			});
		}

	})
});