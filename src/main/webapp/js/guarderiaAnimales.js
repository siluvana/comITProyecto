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

function getMascota() {
	var idMascota = tomarIdMascota();
	if(idMascota == null) {
		alert("ingresar el id de la mascota");
		return;
	}
	var endpointCompleto = "/comITProyecto/ws/guarderia/animal/"+idMascota;
	
	var request = new XMLHttpRequest(); 
	request.open("GET", endpointCompleto , true);
	request.send(null);
	request.onreadystatechange = function() { //le asignamos la función al evento on ready state change
		//readyState 4: el request terminó y la respuesta está disponible.
		//status 200: salió todo bien
		if (request.readyState == 4 && request.status == 200) { //chequeamos que ya tengamos el response y que el código del status sea 200
		   console.log(request.responseText);
		   agregarSonidoDeAnimal(request.responseText);
		}
	} 
	
}

//recibimos por parámetro el nombre del endpoint al que vamos a llamar.
function endpointAnimal(nombreEndpoint) {
	console.log("llegamos a endpointAnimal con parámetro " + nombreEndpoint);
	
	var nombreAnimal = tomarNombreAnimal();
	if(nombreAnimal == null) {
		alert("por favor, complete el nombre del animal");
		return;
	}
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
	
	var endpointCompleto = "/comITProyecto/ws/guarderia/"+nombreEndpoint + "?nombre=" + nombreAnimal;
	
	//me fijo si se trata de post o de get
	var getPostSelect = document.getElementsByTagName("select")[0];
	if(getPostSelect.value=="GET") {
		//get
		request.open("GET", endpointCompleto , true); //concatenamos el ws al nombre del endpoint que recibimos
		request.send(null); //mandamos el cuerpo del mensaje
		
	} else {
		var nombreDuenio = tomarNombreDuenio();
		if(nombreDuenio == null) {
			alert("por favor, complete el nombre del dueño");
			return
		} 
		//post
		request.open("POST", endpointCompleto , true); //concatenamos el ws al nombre del endpoint que recibimos
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify({name: nombreDuenio})); //mandamos el cuerpo del mensaje		
	}
}

function tomarNombreDuenio() {
	var divDatosDuenio = document.getElementById("datosDuenio");
	var nombre = divDatosDuenio.getElementsByTagName("input")[0].value;
	
	if(nombre.length == 0) {
		return null
	} 
	
	return nombre;
}

function tomarIdMascota() {
	return tomarValorTextfieldPorIdOrNull("idMascota");
}


function tomarNombreAnimal() {
	return tomarValorTextfieldPorIdOrNull("nombreAnimal");
}

function tomarValorTextfieldPorIdOrNull(elementId) {
	var nombre = document.getElementById(elementId).value;
	if(nombre.length == 0) {
		return null
	} 
	
	return nombre;
}

function datosDuenio() {
	//tomar el dato del combo GET/POST
	var getPostSelect = document.getElementsByTagName("select")[0];
	var divDatosDuenio = document.getElementById("datosDuenio");
	
	if(getPostSelect.value=="POST") {
		//si es post, mostrar datos duenio
		divDatosDuenio.className = "mostrar";
	} else {
		//si es get, ocultar datos duenio
		divDatosDuenio.className = "ocultar";
	}
}

function agregarSonidoDeAnimal(sonido) {
	var divSonidos = document.getElementById("sonidosAnimales");	
	var nuevoSonido = document.createElement("div");
	var textoNodo = document.createTextNode(sonido);
	nuevoSonido.appendChild(textoNodo);
	divSonidos.appendChild(nuevoSonido);
}