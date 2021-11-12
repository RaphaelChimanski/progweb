// JavaScript Document
var conteudoLocal = [ [0, "imagens/loot1.jpg", "LootBox1", 300, false], [1, "imagens/loot2.jpg", "LootBox2", 150, false], [2, "imagens/loot3.jpg", "LootBox3", 2000, false] ];
var listaDeCompras = [];
var array = [];

window.onload = function(){
	montaItens();
}

function montaItens(){
	var nota = window.localStorage;
	var Total = 0;
	listaDeCompras = JSON.parse(localStorage.getItem('ListaCompras'));
	document.getElementById("itens").innerHTML = "";
	document.getElementById("quantidadeItens").innerHTML = listaDeCompras.length;
	for(var i = 0; i < listaDeCompras.length; i++){
		var precoTotal = parseInt(listaDeCompras[i][3]);
		Total = Total + parseInt(precoTotal);
		var conteudo = "";
		conteudo += '<div class="carrinho-descricao">';
		conteudo += '<h5>' + listaDeCompras[i][2] + '</h5>';
		conteudo += '</div>';
		conteudo += '<div class="carrinho-preco">';
		conteudo += '<h5> R$' + listaDeCompras[i][3] + ',00 </h5>';
		conteudo += '<hr>';
		conteudo += '</div>';
		document.getElementById("itens").innerHTML += conteudo;
		document.getElementById("precos").innerHTML = 'R$ ' + Total + ',00';
		nota.setItem("precoItens", JSON.stringify(Total));
	}
}

function pagamento(){

	window.location.href = "pagamento.html"
	
}

