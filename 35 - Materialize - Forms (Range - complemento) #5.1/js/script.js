$(document).ready(function(){
	
	var slider = document.getElementById('test-slider');
	noUiSlider.create(slider, {
	start: [20, 80], // 4 handles, starting at...
	connect: true, // Display a colored bar between the handles
	orientation: 'horizontal', // Orient the slider vertically
	format: wNumb({
		decimals: 0
	}),
	range: {
		'min': 0,
		'max': 100
	},	
	});
});

