// JavaScript Document

function cadastroUsuario(){
var nomeUsuario = document.getElementById("nome").value;
var senhaUsuario = document.getElementById("senha").value;
var sobrenomeUsuario = document.getElementById("sobrenome").value;
var emailUsuario = document.getElementById("email").value;

var dados = [];

dados.push(nomeUsuario,senhaUsuario,sobrenomeUsuario,emailUsuario)
	
var dadosCartao = window.localStorage;

dadosCartao.setItem("usuarios", JSON.stringify(dados));
	
	
}