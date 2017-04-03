package org.comIT.proyecto.entities;

import java.util.ArrayList;
import java.util.List;

public class Veterinaria {

	private static List<Animal> ANIMALES_ATENDIDOS_EN_EL_MUNDO = new ArrayList<>();

	private String nombreVeterinario;
	
	public void atenderAnimal(Animal animal) {
		ANIMALES_ATENDIDOS_EN_EL_MUNDO.add(animal);
	}
}
