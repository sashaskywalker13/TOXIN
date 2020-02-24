$(document).ready(function() {
	$('.datepicker-here').datepicker({
		language: {
			    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
			    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
			    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			    today: 'Применить',
			    clear: 'Очистить',
			    dateFormat: 'dd.mm.yyyy',
		},
		navTitles: {
		    days: 'MM <i>yyyy</i>',
		},
		range: true,
		clearButton: true,
		todayButton: new Date(),
		multipleDatesSeparator: ' - ',

	})
});