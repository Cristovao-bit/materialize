$('.chips').material_chip();

$('.chips').on('chip.add', function(e, chip){
	alert("Tag Add")
});

$('.chips').on('chip.delete', function(e, chip){
	alert("tag del")
});

$('.chips').on('chip.select', function(e, chip){
	alert("tag select")
});

