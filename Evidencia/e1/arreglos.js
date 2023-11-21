var frutas = ["manzana", " banana", " naranja", " kiwi"]
document.write("Arreglo original: "+frutas+"<br>")
frutas.push(" piña")
document.write("Agregamos piña: "+frutas+"<br>")
frutas.shift()
document.write("Quitamos manzana: "+frutas+"<br>")
frutas.slice(1, 1, "uva")
document.write("Arreglo final: "+frutas)