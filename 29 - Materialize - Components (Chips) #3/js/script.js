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

	//Exibindo dados!
	$('button').click(function(){
		var dados = $('.chips').material_chip('data');
		console.log(dados);
	});

});

