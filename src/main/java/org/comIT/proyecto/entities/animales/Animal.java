package org.comIT.proyecto.entities.animales;

import org.comIT.proyecto.entities.User;

public abstract class Animal {
	
	protected String nombre;
	protected int cantidadPatas;
	protected boolean tienePlumas;
	protected User duenio;


	public User getDuenio() {
		return duenio;
	}

	public void setDuenio(User duenio) {
		this.duenio = duenio;
	}

	public int getCantidadPatas() {
		return cantidadPatas;
	}

	public void perderPata() {
		if(cantidadPatas > 0) {
			cantidadPatas--;			
		}
	}
	
	public boolean isTienePlumas() {
		return tienePlumas;
	}
	
	public String getNombre() {
		return nombre;
	}

	public abstract String emitirSonido();

	public abstract TipoAnimal getTipoAnimal();
}
