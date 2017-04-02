package org.comIT.proyecto.entities;

public class Gallo extends Animal {
		
	public Gallo(String nombre) {
		this.nombre = nombre;
		this.cantidadPatas = 2;
		this.tienePlumas = true;
	}
	
	@Override
	public String emitirSonido() {
		return nombre + " dice Cocorocó.";
	}

}
