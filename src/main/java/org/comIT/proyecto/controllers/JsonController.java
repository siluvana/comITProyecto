package org.comIT.proyecto.controllers;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.comIT.proyecto.entities.User;

@Path("json")
public class JsonController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public User getJsonObject() {
		return new User(5L, "John Doe");
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAllJsonObjects() {
		return Arrays.asList(
				new User(5L, "John Doe"),
				new User(3L, "John Blah"),
				new User(1L, "Ron Doe"),
				new User(2L, "John John")				
		);
	}

}
