package org.comIT.proyecto.entities;
	
public class Gato extends Animal {

	public Gato() {
		tienePlumas = false;
		cantidadPatas = 4;
	}
	public Gato(String nombre) {
		this.cantidadPatas = 4;
		this.tienePlumas = false;
		this.nombre = nombre;
	}

	@Override
	public String emitirSonido() {
		String sonido = nombre + " dice Miau.";
		if(this.getDuenyo() != null) {
			sonido += " Mi dueño se llama " + this.getDuenyo();
		}
		return sonido;
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
			
		if(this.duenyo == null && otherGato.duenyo != null) {
				return false;
		} else {
			if(otherGato.duenyo == null) {
				return false;
			}
			return this.duenyo.equals(otherGato.duenyo);
		}
	}
}
