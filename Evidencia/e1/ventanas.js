alert("Esta es una ventana emergente con mensaje opcional")

var resultado = confirm('¿Estás seguro?')
if(resultado === true){
	alert("Okay, parece que si estás seguro")
	document.write("Si estás seguro"  +"<br>")
	}
	else{
		alert("Pareces indeciso")
		document.write("Pareces no estar seguro" +"<br>")
	}
var edad= prompt("¿Cuántos años tienes?")
if (edad > 17){
	alert("Ya eres mayor de edad")
} else{
	alert("Aún eres peque...")
}
document.write("Edad: "+edad+"<br>")