package org.comIT.proyecto.entities;

public class Gato extends Animal {

	public Gato(String nombre) {
		this.cantidadPatas = 4;
		this.tienePlumas = false;
		this.nombre = nombre;
	}

	@Override
	public String emitirSonido() {
		return nombre + " dice Miau.";
	}
	
	@Override
	public boolean equals(Object obj) {
		
		if(this == obj) {
			return true;
		}
		
		if(!(obj instanceof Gato)) {
			return false;
		}
	
		Gato otherGato = (Gato)obj;

		if(this.cantidadPatas != otherGato.cantidadPatas
				|| this.tienePlumas != otherGato.tienePlumas
				|| !this.nombre.equals(otherGato.nombre)){
			return false;
		} 
			
		if(this.nombreDuenyo == null && otherGato.nombreDuenyo != null) {
				return false;
		} else {
			if(otherGato.nombreDuenyo == null) {
				return false;
			}
			return this.nombreDuenyo.equals(otherGato.nombreDuenyo);
		}
	}
}
