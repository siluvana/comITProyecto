package org.comIT.proyecto.entities.animales;

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

	@Override
	public TipoAnimal getTipoAnimal() {
		return TipoAnimal.GALLO;
	}

}
