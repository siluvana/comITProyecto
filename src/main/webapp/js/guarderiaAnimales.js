function nuevoPerro() {
	console.log("llegamos a nuevoPerro");
	endpointAnimal("perro");
}

function nuevoGato() {
	console.log("llegamos a nuevoGato");
	endpointAnimal("gato");
}

function nuevoGallo() {
	console.log("llegamos a nuevoGallo");
	endpointAnimal("gallo");
}

//recibimos por parámetro el nombre del endpoint al que vamos a llamar.
function endpointAnimal(nombreEndpoint) {
	console.log("llegamos a endpointAnimal con parámetro " + nombreEndpoint);
	var request = new XMLHttpRequest(); //construimos el objeto llamando al constructor.
	request.onreadystatechange = function() { //le asignamos la función al evento on ready state change
		//readyState 4: el request terminó y la respuesta está disponible.
		//status 200: salió todo bien
		if (request.readyState == 4 && request.status == 200) { //chequeamos que ya tengamos el response y que el código del status sea 200
		    //acá escribimos el código de lo que queremos hacer con el resultado del request.
		   console.log(request.responseText);
		   agregarSonidoDeAnimal(request.responseText);
		}
	} 
	var nombre = document.getElementById("nombreAnimal").value;
	var endpointCompleto = "/comITProyecto/ws/guarderia/"+nombreEndpoint + "?nombre=" + nombre;
	request.open("GET", endpointCompleto , true); //concatenamos el ws al nombre del endpoint que recibimos
	request.send(null); //mandamos el cuerpo del mensaje
}

function agregarSonidoDeAnimal(sonido) {
	var divSonidos = document.getElementById("sonidosAnimales");	
	var nuevoSonido = document.createElement("div");
	var textoNodo = document.createTextNode(sonido);
	nuevoSonido.appendChild(textoNodo);
	divSonidos.appendChild(nuevoSonido);
}