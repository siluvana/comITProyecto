package org.comIT.proyecto.entities.animales;

public class Gato extends Animal {

	public Gato(String nombre) {
		this.cantidadPatas = 4;
		this.tienePlumas = false;
		this.nombre = nombre;
	}

	@Override
	public String emitirSonido() {
		String sonido = nombre + " dice Miau.";
		if(this.getDuenio() != null) {
			sonido += " Mi dueño se llama " + this.getDuenio().getName();
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
			
		if(this.duenio == null && otherGato.duenio != null) {
				return false;
		} else {
			if(otherGato.duenio == null) {
				return false;
			}
			return this.duenio.equals(otherGato.duenio);
		}
	}

	@Override
	public TipoAnimal getTipoAnimal() {
		return TipoAnimal.GATO;
	}
}
