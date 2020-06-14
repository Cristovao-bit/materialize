$(document).ready(function(){
	$('.modal').modal();
	var options = [
    	//{selector: '.class', offset: 200, callback: customCallbackFunc },
    	{selector: '.conteudo', offset: 0, callback: function() {
      		Materialize.toast('Chegou no Segundo Cartão!', 4000)
    	}},

    	{selector: '.conteudo', offset: 250, callback: function() {
      		$('#modal1').modal('open');
    	}},
  	];
  	Materialize.scrollFire(options);
});