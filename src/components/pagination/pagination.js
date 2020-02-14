$(document).ready(function() {
	$('.pagination').pagination({
	    dataSource: [1, 2, 3, 4],
	    className: 'paginationjs-theme-blue',
	    callback: function(data, pagination) {
	        // template method of yourself
	        var html = template(data);
	        $('.pagination__list').html(html);
	    }
	})
});