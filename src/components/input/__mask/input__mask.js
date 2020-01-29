
$(document).ready(function(){
  $('.input_masked_date').inputmask({
  	alias: 'datetime',
  	placeholder: "ДД/ММ/ГГГГ",
  	inputFormat: 'dd.mm.yyyy'
  });
});