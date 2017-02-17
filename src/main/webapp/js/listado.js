listadoCelulares = [
		{
			"marca": "Motorola",
			"modelo": "G 4 PLAY",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5,
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "8 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB"
		},
		{
			"marca": "Motorola",
			"modelo": "G 4 PLAY",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5,
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "8 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB"
		},
		{
			"id": 1,
			"marca": "Motorola",
			"modelo": "G 4 PLAY",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5,
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "8 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 2,
			"marca": "Samsung",
			"modelo": "GALAXY J5 J510",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5.2,
			"pantalla_resolucion": "720x1280",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 3,
			"marca": "Samsung",
			"modelo": "GALAXY J7 J710",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5.5,
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 4,
			"marca": "Huawei",
			"modelo": "Y360D",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 4,
			"pantalla_resolucion": "800x480",
			"camara_resolucion": "5 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "2 Mpx",
			"memoria_interna": "4 GB",
			"flash": true
		},
		{
			"id": 5,
			"marca": "Lenovo",
			"modelo": "VIBE K5",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5,
			"pantalla_resolucion": "800x480",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		}
	];


function agregarElementos() {
//	var p = document.createElement("p");
//	p.id = "nuevo";
//	var t = document.createTextNode(listadoCelulares[0].marca);
//	p.appendChild(t);
//	var t = document.createTextNode("");
//	p.appendChild(t);
//
//	var t = document.createTextNode(listadoCelulares[0].modelo);
//	p.appendChild(t);
//	var t = document.createTextNode(listadoCelulares[0].sistema_operativo);
//	p.appendChild(t);
//
//	var div = document.getElementById("nuevosElementos");
//	div.appendChild(p);
	
	for(var cont = 0; cont < listadoCelulares.length; cont++) {
		var p = document.createElement("li");
		//opcion 1: generar el texto en una variable y ponerla en el nodo de texto
		var texto = "Marca: " + listadoCelulares[cont].marca;
		var valor = document.createTextNode(texto);
		p.appendChild(valor);
		var div = document.getElementById("nuevosElementos");
		div.appendChild(p);

		//opcion 2: generar dos nodos de texto con la caracteristica y el valor por separado
		var opcion2 = document.createElement("li");
		var caracteristica = document.createTextNode("Marca: ");
		opcion2.appendChild(caracteristica);
		var valorCaracteristica = document.createTextNode(listadoCelulares[cont].marca);
		opcion2.appendChild(valorCaracteristica);
		var div = document.getElementById("nuevosElementos");
		div.appendChild(opcion2);
		
		
	}
}  