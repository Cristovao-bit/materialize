$(document).ready(function(){
	$('.chips').material_chip({
		data: [
			{tag: 'HTML', image:'', id:1},
			{tag: 'CSS'},
			{tag: 'PHP'}
		],

		placeholder: 'Digite sua tag',
		secondaryPlaceholder: '+ tag',

	});

	$('.chips-autocomplete').material_chip({
		autocompleteOptions:{
			data:{
				'JavaScript': null,
				'Jquery': null,
				'CSS': null
			},

			limit: 1
		}
	});

});

