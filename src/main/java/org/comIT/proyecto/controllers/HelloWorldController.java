package org.comIT.proyecto.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

@Path("hello")
public class HelloWorldController {
	private static final Logger logger = Logger.getLogger(HelloWorldController.class);

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String sayhello() {
		logger.debug("sample debug message");
		
		return "hello";
	}

}
