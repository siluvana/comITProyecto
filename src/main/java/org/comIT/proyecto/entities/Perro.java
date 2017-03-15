package org.comIT.proyecto.entities;

public class Perro extends Animal {

	
	public Perro(String nombre) {
		this.nombre = nombre;
		this.cantidadPatas = 4;
		this.tienePlumas = false;
	}
	
	public void morder() {
		
	}
	
	@Override
	public String emitirSonido() {
		return nombre + " dice Guau.";
	}
}
