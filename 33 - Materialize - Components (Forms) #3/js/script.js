$(document).ready(function(){
	
	$('#complete').autocomplete({
		data: {
			"Apple": null,
			"Microsoft": null,
			"Google": '../js/script.js'
		},

		limit: 20,

		onAutocomplete: function(val){
			alert("Empresa Selecionada!");
		}
	});
});

