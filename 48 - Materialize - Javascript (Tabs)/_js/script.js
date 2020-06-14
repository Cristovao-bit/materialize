$(document).ready(function(){
	$('ul.tabs').tabs({
		onShow: function(aba) {console.log(aba)},
		swipeable: true,
		//essa funçao é pra travar o swipeable quando chegar em uma tela de 700 px por exemplo
		responsiveThreshold: 700
	});

	$('#alterar-aba').click(function(){
		$('ul.tabs').tabs('select_tab', 'teste1');
	});
});