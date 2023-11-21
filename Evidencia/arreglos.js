//arreglo original
var frutas = ["manzana", "banana","naranja", "kiwi"]
//imprime ["manzana", "banana","naranja", "kiwi"]
document.write("Arreglo original: "+frutas+"<br>")
frutas.push("piña")
//agrega "piña" al final del arreglo
document.write("Agregamos piña: "+frutas+"<br>")
//imprime ["manzana", "banana","naranja", "kiwi","piña"]
frutas.shift()
//elimina "manzana" del inicio de arreglo
document.write("Quitamos manzana: "+frutas+"<br>")
//imprime ["banana","naranja", "kiwi", "piña"]
frutas.slice(1,1,"uva")
//remplaza "banana" con "uva"
document.write("Arreglo final: "+frutas)
//imprime ["naranja", "uva", "kiwi", "piña"]