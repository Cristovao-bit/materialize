$(document).ready(function(){
	$('#test').modal({
		complete: function() { alert('Fechado!');}
	});
	$('#modal2').modal();
	$('#modal3').modal({
		dismissible: false
	});
});

