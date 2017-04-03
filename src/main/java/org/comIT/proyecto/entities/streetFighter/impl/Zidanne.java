package org.comIT.proyecto.entities.streetFighter.impl;

import org.comIT.proyecto.entities.streetFighter.Personaje;

public class Zidanne extends Personaje {
	
	private int dannoCabezazo = 8;
	
	public void tirarCabezazo(Personaje oponente) {
		this.aplicarDanno(oponente, dannoCabezazo);
	}
	

}
