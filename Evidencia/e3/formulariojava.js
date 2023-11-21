const form = document.querySelector("form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")

form.addEventListener("submit",(event) =>{
	event.preventDefault()
	var usuario = document.getElementById('username').value
	if (username.length == 0){
		alert("No has escrito nada en el usuario")
		return
	}
	var clave = document.getElementById('password')
	if(clave.length <3){
		alert('La clave no es válida')
		return
	}
	if(username.value === "abcdef" && password.value === "1234"){
		document.write("<center><h1>Inicio sesión correctamente</h1></center><br><br>Bienvenidos")
		form.reset()
		document.write('<h3><a href="evidencia3.html">Regresar</a></h3>')
	} else{
		document.write("<center><h2>Usuario o contraseña incorrectos</h2></center>")
		password.value = ""
		password.focus()
		document.write('<h3><a href="evidencia3.html">Regresar</a></h3>')
	}
})