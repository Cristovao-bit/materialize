$(document).ready(function(){
	
	//Select
	$('select').material_select();
	
	//Datepicker
	$('.datepicker').pickadate({
  		labelMonthNext: 'Next month',
  		labelMonthPrev: 'Previous month',
 		labelMonthSelect: 'Select a month',
  		labelYearSelect: 'Select a year',
  		monthsFull: [ 'Janeiro', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
  		monthsShort: [ 'Janeiro', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  		weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
  		weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
  		weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
  		today: 'Hoje',
  		clear: 'Limpar',
  		close: 'Sair'
	});

	$('.timepicker').pickatime({
		default: 'now',
		fromnow: 0,
		twelvehour: false,
		donetext: 'OK',
		cleartext: 'Limpar',
		canceltext: 'Cancelar',
		autoclose: false,
		ampmclickable: true,
		aftershow: function(){}
	});

});

