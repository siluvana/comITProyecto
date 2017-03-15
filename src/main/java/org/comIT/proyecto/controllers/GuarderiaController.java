package org.comIT.proyecto.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.comIT.proyecto.entities.Gallo;
import org.comIT.proyecto.entities.Gato;
import org.comIT.proyecto.entities.Perro;

@Path("guarderia")
public class GuarderiaController {

	@GET
	@Path("/gato")
	@Produces("text/plain")
	public String crearGato(@QueryParam("nombre") String nombreDelGato) {
		Gato gato = new Gato(nombreDelGato);
		return gato.emitirSonido();
	}

	@GET
	@Path("/perro")
	@Produces("text/plain")
	public String crearPerro(@QueryParam("nombre") String nombreDelPerro) {
		Perro perro = new Perro(nombreDelPerro);
		return perro.emitirSonido();
	}

	@GET
	@Path("/gallo")
	@Produces("text/plain")
	public String crearGallo(@QueryParam("nombre") String nombreDelGallo) {
		Gallo gallo = new Gallo(nombreDelGallo);
		return gallo.emitirSonido();
	}

}
