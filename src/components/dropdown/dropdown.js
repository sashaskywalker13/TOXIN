$(document).ready(function() {


	$('.dropdown__input').on('click', function () {
		let form = $(this).closest('.dropdown').find('.dropdown__window');
		form.slideToggle();
		form.css('display', 'flex');
	});

	let numberChanger = function() {
		let $counter = $(this).closest('.dropdown__window__block');
		let $co = $counter.find('span');
		let count = parseInt($counter.find('span').text());
		let min = $counter.find('button.dropdown__window__button-min');

		if ($(this).hasClass('dropdown__window__button-plu')) {
			count++;
			min.css({
				'border': '1px solid rgba(31, 32, 65, 0.5)',
				'color': 'rgba(31, 32, 65, 0.5)'
			});
		} else {
			count--;
		}
		$co.text(count);
	}

	let $incBtn = $('.dropdown__window__button-plu');
	let $decBtn = $('.dropdown__window__button-min');

	$incBtn.on('click', numberChanger);
	$decBtn.on('click', numberChanger);


});