var usuarios = [ ["web","web", 0] ];
var usuarioLogados = [];
var storageUsuarios = window.localStorage;
var storagelogados = window.localStorage;

storageUsuarios.setItem("usuarios", JSON.stringify(usuarios));



function login(){
	document.getElementById("erro").innerHTML = "";
	var usuario = document.getElementById("campoUsuario").value;
	var senha = document.getElementById("campoSenha").value;
	console.log("Usuário = " + usuario);
	console.log("Senha = " + senha);
	for(var i = 0; i < usuarios.length; i++){
		if(usuario == usuarios[i][0]){
			if(senha == usuarios[i][1]){
				console.log("Verificado login com sucesso");
				usuarioLogados = usuarios[i][0];
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
