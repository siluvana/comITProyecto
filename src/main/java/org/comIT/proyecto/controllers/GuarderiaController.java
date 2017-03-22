package org.comIT.proyecto.controllers;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.comIT.proyecto.entities.Animal;
import org.comIT.proyecto.entities.Gallo;
import org.comIT.proyecto.entities.Gato;
import org.comIT.proyecto.entities.Perro;
import org.comIT.proyecto.entities.User;

@Consumes(MediaType.APPLICATION_JSON)
@Path("guarderia")
public class GuarderiaController {

	@GET
	@Path("/gato")
	@Produces("text/plain")
	public String getGato(@QueryParam("nombre") String nombreDelGato) {
		Gato gato = new Gato(nombreDelGato);
		return gato.emitirSonido();
	}
	
	@POST
	@Path("/gato")
	@Produces("text/plain")
	public String crearGato(@QueryParam("nombre") String nombreDelGato,
			User duenio) {
		Gato gato = new Gato(nombreDelGato);
		return sonidoConUser(gato, duenio);
	}
	
	@GET
	@Path("/perro")
	@Produces("text/plain")
	public String getPerro(@QueryParam("nombre") String nombreDelPerro) {
		Perro perro = new Perro(nombreDelPerro);
		return perro.emitirSonido();
	}
	
	@POST
	@Path("/perro")
	@Produces("text/plain")
	public String crearPerro(@QueryParam("nombre") String nombreDelPerro,
			User duenio) {
		Perro perro = new Perro(nombreDelPerro);
		return sonidoConUser(perro, duenio);
	}

	@GET
	@Path("/gallo")
	@Produces("text/plain")
	public String getGallo(@QueryParam("nombre") String nombreDelGallo) {
		Gallo gallo = new Gallo(nombreDelGallo);
		return gallo.emitirSonido();
	}
	
	@POST
	@Path("/gallo")
	@Produces("text/plain")
	public String crearGallo(@QueryParam("nombre") String nombreDelGallo,
			User duenio) {
		Gallo gallo = new Gallo(nombreDelGallo);
		return sonidoConUser(gallo, duenio);
	}
	
	private String sonidoConUser(Animal animal, User duenio) {
		System.out.println(duenio.toString());
		animal.setDuenyo(duenio);
		return animal.emitirSonido();
	}

}
