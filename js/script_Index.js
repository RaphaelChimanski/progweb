//listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));

var usuarios = [ ["web","web", 0], ["raphael","1234", 1] ];

var usuarioLogados = [];
var storageUsuarios = window.localStorage;
var storagelogados = window.localStorage;


	//usuarios.push(listaUsuarios);
//storageUsuarios.setItem("usuarios", JSON.stringify(usuarios));




function login(){
	document.getElementById("erro").innerHTML = "";
	var usuario = document.getElementById("campoUsuario").value;
	var senha = document.getElementById("campoSenha").value;
	console.log("Usuário = " + usuario);
	console.log("Senha = " + senha);
	for(var i = 0; i < usuarios.length; i++){
		if(usuario == usuarios[i][0] || usuario == "web"){
			if(senha == usuarios[i][1] || senha == "web"){
				console.log("Verificado login com sucesso");
				usuarios[i][2] = 1;
				usuarioLogados = usuarios[i][2];
				storagelogados.setItem("Logado", JSON.stringify(usuarioLogados));
				window.location.href = "index.html"
				
			}
		}
		else{
			console.log("erro no login");
			document.getElementById("erro").innerHTML = "Credenciais incorretas verifique seu usuário e senha!";
		}
	}
}

function cadastroUsuario(){
	var nomeUsuario = document.getElementById("nome").value;
	var senhaUsuario = document.getElementById("senha").value;
	var sobrenomeUsuario = document.getElementById("sobrenome").value;
	var emailUsuario = document.getElementById("email").value;
	usuarios.push([nomeUsuario,senhaUsuario,sobrenomeUsuario,emailUsuario]);
	storageUsuarios.setItem("usuarios", JSON.stringify(usuarios));
	alert("Usuário cadastrado com sucesso!");
	window.location.href = "login.html"
}