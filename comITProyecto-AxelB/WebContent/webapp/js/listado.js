//Array original:

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
			"memoria_interna": "16 GB",
			"flash": "si"
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
			"memoria_interna": "16 GB",
			"flash": "si"
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
			"memoria_interna": "16 GB",
			"flash": "si"
		},
		{
			
			"marca": "Samsung",
			"modelo": "GALAXY J5 J510",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5.2,
			"pantalla_resolucion": "720x1280",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": "si"
		},
		{
			
			"marca": "Samsung",
			"modelo": "GALAXY J7 J710",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5.5,
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": "si"
		},
		{
			
			"marca": "Huawei",
			"modelo": "Y360D",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 4,
			"pantalla_resolucion": "800x480",
			"camara_resolucion": "5 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "2 Mpx",
			"memoria_interna": "4 GB",
			"flash": "si"
		},
		{
			
			"marca": "Lenovo",
			"modelo": "VIBE K5",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": 5,
			"pantalla_resolucion": "800x480",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": "si"
		}
	];


function agregarElementos() // original de la tarea
							{
								var lista= document.getElementById("ulListado");  /*Reconoce el elemento html utilizado*/
								
								var linew= document.createElement("li");		/*Crea otro elemento dentro del elemento contenedor*/
								
								var contenido = document.createTextNode(listadoCelulares); 	/*Imprime algo dentro del elemento 'li' "*/
							 
								lista.appendChild(linew);
										
								linew.appendChild(contenido);
							}

function agregarElementosFor(){
	
	for(var i=0; i<listadoCelulares.length; i++)
		{
			var ulElegido= document.getElementById("ListadoTotal");	//Elegimos el <tag> donde van a crearse los 'li'
			
					var liMarca= document.createElement("li");	//Creamos un 'li' o 'fila con punto' para cada dato 
					var liModelo= document.createElement("li");
					var liSistOp= document.createElement("li");
					var liPantPulgadas= document.createElement("li");
					var liRes= document.createElement("li");
					var liCamaraRes= document.createElement("li");
					var liCamaraFront= document.createElement("li");
					var liCamaraFrontRes= document.createElement("li");
					var liMemoria= document.createElement("li");
					var	liFlash= document.createElement("li");
		
						ulElegido.appendChild(liMarca);	//Adherimos al <tag> elegido el 'li' creado en el paso anterior
						ulElegido.appendChild(liModelo);
						ulElegido.appendChild(liSistOp);
						ulElegido.appendChild(liPantPulgadas);
						ulElegido.appendChild(liRes);
						ulElegido.appendChild(liCamaraRes);
						ulElegido.appendChild(liCamaraFront);
						ulElegido.appendChild(liCamaraFrontRes);
						ulElegido.appendChild(liMemoria);
						ulElegido.appendChild(liFlash);
			
							var displayMarca= document.createTextNode(listadoCelulares[i].marca);	//Creamos una variable que se encargue de crear Texto específicamente de ese atributo 
							var displayModelo= document.createTextNode(listadoCelulares[i].modelo);
							var displaySistOp= document.createTextNode(listadoCelulares[i].sistema_operativo);
							var displayPantPulgas= document.createTextNode(listadoCelulares[i].pantalla_pulgadas);			
							var displayRes= document.createTextNode(listadoCelulares[i].pantalla_resolucion)
							var displayCamaraRes= document.createTextNode(listadoCelulares[i].camara_resolucion);
							var displayCamaraFront= document.createTextNode(listadoCelulares[i].camara_frontal);
							var displayCamaraFrontRes= document.createTextNode(listadoCelulares[i].camara_frontal_res);
							var displayMemoria= document.createTextNode(listadoCelulares[i].memoria_interna);
							var displayFlash= document.createTextNode(listadoCelulares[i].flash);
							
									liMarca.appendChild(displayMarca);	//Adherimos al 'li' ya creado la variable que crea el texto
									liModelo.appendChild(displayModelo);
									liSistOp.appendChild(displaySistOp);
									liPantPulgadas.appendChild(displayPantPulgas);
									liRes.appendChild(displayRes);
									liCamaraRes.appendChild(displayCamaraRes);
									liCamaraFront.appendChild(displayCamaraFront);
									liCamaraFrontRes.appendChild(displayCamaraFrontRes);
									liMemoria.appendChild(displayMemoria);
									liFlash.appendChild(displayFlash);
									
									var espaciado= document.createElement("li");
									ulElegido.appendChild(espaciado);
		}
	
}

//Funciona muy bien pero no se puede elegir la posición del array.
function agregarElementosMap(){
	
		var TodosCelulares= listadoCelulares.map(function(bar){
			  return '<br>'+bar.marca+'<br>'+bar.modelo+'<br>'+bar.sistema_operativo+'<br>'+bar.pantalla_pulgadas+'<br>'+bar.pantalla_resolucion+'<br>'+bar.camara_frontal+'<br>'+bar.camara_frontal_res+'<br>'+bar.memoria_interna+'<br>'
			})
		
			document.getElementById("ulTemporal1").innerHTML = TodosCelulares;
}


function agregarElementosForForeach(){
	
	var ulElegido= document.getElementById("ulTemporal2");
		listadoCelulares.forEach(function(data,index){
			var linew= document.createElement("li");    
				var contenido = document.createTextNode(data.marca+' '+data.modelo+" "+data.sistema_operativo+" "+data.pantalla_pulgadas+" "+data.pantalla_resolucion+" "+data.camara_resolucion);
				ulElegido.appendChild(linew);
				linew.appendChild(contenido);
			})
	
}










// No leer más de acá, son funciones que funcionan pero no son de la tarea.
function agregarElementosStringify(){
	
	document.querySelector("ul").innerHTML = JSON.stringify(listadoCelulares);
									}


/* Funciones por cada botón */
function agregarElementosInnerHTML1(){
	
	var foo = Celular1.map(function(bar){
		  return '<br>'+bar.marca+'<br>'+bar.modelo+'<br>'+bar.sistema_operativo+'<br>'+bar.pantalla_pulgadas+'<br>'+bar.pantalla_resolucion+'<br>'+bar.camara_frontal+'<br>'+bar.camara_frontal_res+'<br>'+bar.memoria_interna+'<br>'
		})
	
		document.getElementById("ulListado1").innerHTML = foo;
	
}

function agregarElementosInnerHTML2(){
	
	var foo = Celular2.map(function(bar){
		  return '<br>'+bar.marca+'<br>'+bar.modelo+'<br>'+bar.sistema_operativo+'<br>'+bar.pantalla_pulgadas+'<br>'+bar.pantalla_resolucion+'<br>'+bar.camara_frontal+'<br>'+bar.camara_frontal_res+'<br>'+bar.memoria_interna+'<br>'
		})
	
		document.getElementById("ulListado2").innerHTML = foo;
}

function agregarElementosInnerHTML3(){
	
	var foo = Celular3.map(function(bar){
		  return '<br>'+bar.marca+'<br>'+bar.modelo+'<br>'+bar.sistema_operativo+'<br>'+bar.pantalla_pulgadas+'<br>'+bar.pantalla_resolucion+'<br>'+bar.camara_frontal+'<br>'+bar.camara_frontal_res+'<br>'+bar.memoria_interna+'<br>'
		})
	
		document.getElementById("ulListado3").innerHTML = foo;
}

function agregarElementosInnerHTML4(){
	
	var foo = Celular4.map(function(bar){
		  return '<br>'+bar.marca+'<br>'+bar.modelo+'<br>'+bar.sistema_operativo+'<br>'+bar.pantalla_pulgadas+'<br>'+bar.pantalla_resolucion+'<br>'+bar.camara_frontal+'<br>'+bar.camara_frontal_res+'<br>'+bar.memoria_interna+'<br>'
		})
	
		document.getElementById("ulListado4").innerHTML = foo;
}


//Oculta el panel de ingreso por css
function ocultarIngresar(){
	document.getElementById('ingresar').style.display = 'none';
}

//Muestra el panel de ingreso por css
function mostrarIngresar(){
	document.getElementById('ingresar').style.display = 'block';
}


Celular1=[
	{
	"marca": 					"<font color='turquoise'><strong> 	Marca:					</strong></font> 		Sony",
	"modelo": 					"<font color='turquoise'><strong>	Modelo:					</strong></font> 		Xperia M2",
	"sistema_operativo": 		"<font color='turquoise'><strong>	Sist. op.:				</strong></font> 		Android Lolipop",
	"pantalla_pulgadas": 		"<font color='turquoise'><strong>	Pantalla:				</strong></font> 		5",
	"pantalla_resolucion": 		"<font color='turquoise'><strong>	Resolución:				</strong></font> 		1280x720",
	"camara_resolucion": 		"<font color='turquoise'><strong>	Cámara res.:			</strong></font> 		8 Mpx",
	"camara_frontal": 			"<font color='turquoise'><strong>	Cámara frontal:			</strong></font> 		Sí",
	"camara_frontal_res": 		"<font color='turquoise'><strong>	Cámara front. res:		</strong></font> 		5 Mpx",
	"memoria_interna": 			"<font color='turquoise'><strong>	Memoria int:			</strong></font> 		16 GB"
}
]

Celular2=[
	{
	"marca": 					"<font color='green'><strong>		Marca:					</strong></font> 		Samsung",
	"modelo": 					"<font color='green'><strong>		Modelo:					</strong></font> 		Core II",
	"sistema_operativo": 		"<font color='green'><strong>		Sist. op.:				</strong></font> 		Android kitkat 4.1.2",
	"pantalla_pulgadas": 		"<font color='green'><strong>		Pantalla:				</strong></font> 		4",
	"pantalla_resolucion": 		"<font color='green'><strong>		Resolución:				</strong></font> 		1280x720",
	"camara_resolucion": 		"<font color='green'><strong>		Cámara res.:			</strong></font> 		3 Mpx",
	"camara_frontal": 			"<font color='green'><strong>		Cámara frontal:			</strong></font> 		Sí",
	"camara_frontal_res": 		"<font color='green'><strong>		Cámara front. res:		</strong></font> 		5 Mpx",
	"memoria_interna": 			"<font color='green'><strong>		Memoria int:			</strong></font> 		8 GB"
}
]

Celular3=[
	{
	"marca": 					"<font color='yellow'><strong>		Marca:					</strong></font> 		Huawei",
	"modelo": 					"<font color='yellow'><strong>		Modelo:					</strong></font> 		P8",
	"sistema_operativo": 		"<font color='yellow'><strong>		Sist. op.:				</strong></font> 		Android candy",
	"pantalla_pulgadas": 		"<font color='yellow'><strong>		Pantalla:				</strong></font> 		5,5",
	"pantalla_resolucion": 		"<font color='yellow'><strong>		Resolución:				</strong></font> 		1280x720",
	"camara_resolucion": 		"<font color='yellow'><strong>		Cámara res:				</strong></font> 		6 Mpx",
	"camara_frontal": 			"<font color='yellow'><strong>		Cámara frontal:			</strong></font> 		Sí",
	"camara_frontal_res": 		"<font color='yellow'><strong>		Cámara front. res:		</strong></font> 		8 Mpx",
	"memoria_interna": 			"<font color='yellow'><strong>		Memoria int:			</strong></font> 		12 GB"
}
]

Celular4=[
	{
	"marca": 					"<font color='violet'><strong>		Marca:					</strong></font> 		LG",
	"modelo": 					"<font color='violet'><strong>		Modelo:					</strong></font>	 	Leon",
	"sistema_operativo": 		"<font color='violet'><strong>		Sist. op.:				</strong></font> 		Android Lolipop",
	"pantalla_pulgadas": 		"<font color='violet'><strong>		Pantlla:				</strong></font> 		2,5",
	"pantalla_resolucion": 		"<font color='violet'><strong>		Resolución:				</strong></font> 		1280x720",
	"camara_resolucion": 		"<font color='violet'><strong>		Cámara res:				</strong></font> 		8 Mpx",
	"camara_frontal": 			"<font color='violet'><strong>		Cámara frontal:			</strong></font> 		Sí",
	"camara_frontal_res": 		"<font color='violet'><strong>		Cámara front. res:		</strong></font> 		5 Mpx",
	"memoria_interna": 			"<font color='violet'><strong>		Memoria int:			</strong></font> 		32 GB"
}
]


