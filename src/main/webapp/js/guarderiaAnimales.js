function nuevoPerro() {
	endpointAnimal("perro");
}

function nuevoGato() {
	endpointAnimal("gato");
}

function nuevoGallo() {
	endpointAnimal("gallo");
}

function endpointAnimal(nombreEndpoint) {
	var request = new XMLHTTPRequest();
	request.open("GET", "ws/"+nombreEndpoint)
	request.send(null);
}