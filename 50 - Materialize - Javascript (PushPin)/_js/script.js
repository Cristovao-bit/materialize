$(document).ready(function(){
	$('.target').pushpin({
		top: 80, //é a distância em px de quando começa o menu ficar fixo
      	bottom: 200, //já aqui é quando o menu deixa de ficar fixo e desaparece
      	offset: 200 // a distância que ele apresenta já quando rola a página
	});
});