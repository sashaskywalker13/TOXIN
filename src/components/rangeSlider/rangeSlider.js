$(document).ready(function() {
	$('.js-range-slider').ionRangeSlider({
		  skin: 'custom',
		  type: 'double',
		  min: 0,
		  max: 15000,
		  hide_min_max: true,
		  from: 5000,
		  to: 10000,
		  hide_from_to: true,
		  postfix: '₽',
		  decorate_both: true,
		  values_separator: ' - ',
          // onStart: function (data) {
          //     // Called right after range slider instance initialised
      
          //     console.log(data.input);        // jQuery-link to input
          //     console.log(data.slider);       // jQuery-link to range sliders container
          //     console.log(data.min);          // MIN value
          //     console.log(data.max);          // MAX values
          //     console.log(data.from);         // FROM value
          //     console.log(data.from_percent); // FROM value in percent
          //     console.log(data.from_value);   // FROM index in values array (if used)
          //     console.log(data.to);           // TO value
          //     console.log(data.to_percent);   // TO value in percent
          //     console.log(data.to_value);     // TO index in values array (if used)
          //     console.log(data.min_pretty);   // MIN prettified (if used)
          //     console.log(data.max_pretty);   // MAX prettified (if used)
          //     console.log(data.from_pretty);  // FROM prettified (if used)
          //     console.log(data.to_pretty);    // TO prettified (if used)
          // },
              onStart: function (data) {

                  // Called every time handle position is chang
                  $('.range__slider__label').text(`${data.from}₽ - ${data.to}₽`);
              },
              onChange: function (data) {

                  // Called every time handle position is chang
                  $('.range__slider__label').text(`${data.from}₽ - ${data.to}₽`);
              },
	});

});

// $('.js-range-slider').ionRangeSlider({
//         onStart: function (data) {
//             // Called right after range slider instance initialised
    
//             console.log(data.input);        // jQuery-link to input
//             console.log(data.slider);       // jQuery-link to range sliders container
//             console.log(data.min);          // MIN value
//             console.log(data.max);          // MAX values
//             console.log(data.from);         // FROM value
//             console.log(data.from_percent); // FROM value in percent
//             console.log(data.from_value);   // FROM index in values array (if used)
//             console.log(data.to);           // TO value
//             console.log(data.to_percent);   // TO value in percent
//             console.log(data.to_value);     // TO index in values array (if used)
//             console.log(data.min_pretty);   // MIN prettified (if used)
//             console.log(data.max_pretty);   // MAX prettified (if used)
//             console.log(data.from_pretty);  // FROM prettified (if used)
//             console.log(data.to_pretty);    // TO prettified (if used)
//         },
    
//         onChange: function (data) {
//             // Called every time handle position is changed
    
//             console.log(data.from);
//         },
    
//         onFinish: function (data) {
//             // Called then action is done and mouse is released
    
//             console.log(data.to);
//         },
    
//         onUpdate: function (data) {
//             // Called then slider is changed using Update public method
    
//             console.log(data.from_percent);
//         }
//     });
