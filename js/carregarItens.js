
var conteudoLocal = [ [0, "imagens/loot1.jpg", "LootBox1", 300, false], [1, "imagens/loot2.jpg", "LootBox2", 150, false], [2, "imagens/loot3.jpg", "LootBox3", 2000, false] ];
var carrinho = [];
var usuarioLogado;
var storage = window.localStorage;



storage.setItem("itens", JSON.stringify(conteudoLocal));


window.onload = function(){
	montarCardProdutos();
	verificaLogin();
}


function verificaLogin(){
	usuarioLogado = window.storage.getItem('Logado');
	if (usuarioLogado != null){
		alert("Bem vindo " + usuarioLogado);
	}
		
}



function comprar(id){
		console.log("Comprou!: " + conteudoLocal[id][2]);
		conteudoLocal[id][4] = true;
		carrinho.push(conteudoLocal[id]);
		window.localStorage.setItem("ListaCompras", JSON.stringify(carrinho))
		montarCardProdutos();
	}

function montarCardProdutos(){
	document.getElementById("inserirCards").innerHTML = "";
	for(var i = 0; i < conteudoLocal.length; i++){
		var conteudo = "";
		conteudo += '<div class="card">';
		conteudo += '<div class="card-img">';
		conteudo += '<img src="' + conteudoLocal[i][1]  + '">';
		conteudo += '</div>';
		conteudo += '<div class="card-descricao">';
		conteudo += '<h5>' + conteudoLocal[i][2] + '</h5>';
		conteudo += '</div>';
		conteudo += '<div class="card-preco">';
		conteudo += '<h5>' + conteudoLocal[i][3] + '</h5>';
		conteudo += '</div>';

		if(conteudoLocal[i][4] == false){
			conteudo += '<div class="card-botao">';
			conteudo += '<input type="button" onclick="comprar(' + conteudoLocal[i][0]  + ')" value="Comprar">';
			conteudo += '</div>';	
		}
		else{
			conteudo += '<div class="noCarrinho">';
			conteudo += '<input type="submit" value="No Carrinho">';
			conteudo += '</div>';
		}

		document.getElementById("inserirCards").innerHTML += conteudo;
	}
		
}