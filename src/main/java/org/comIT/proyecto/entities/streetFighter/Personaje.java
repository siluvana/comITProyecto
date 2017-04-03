package org.comIT.proyecto.entities.streetFighter;

import org.comIT.proyecto.entities.streetFighter.impl.Ryu;

public abstract class Personaje {
	
	protected double posicionX;
	protected double posicionY;
	protected double altura;
	protected int dannoGolpe = 30;
	protected int dannoPatada = 50;
	protected boolean bloqueo;
	protected int vida = 100;

	
	public double getPosicionX() {
		return posicionX;
	}
	public void setPosicionX(double posicionX) {
		this.posicionX = posicionX;
	}
	public double getPosicionY() {
		return posicionY;
	}
	public void setPosicionY(double posicionY) {
		this.posicionY = posicionY;
	}
	public int getVida() {
		return vida;
	}
	public void setVida(int vida) {
		this.vida = vida;
	}
	public double getAltura() {
		return altura;
	}
	public int getDannoGolpe() {
		return dannoGolpe;
	}
	public int getDannoPatada() {
		return dannoPatada;
	}
	
	public boolean isBloqueo() {
		return bloqueo;
	}
	
	public void tirarPatada(Personaje oponente) {
		aplicarDanno(oponente, this.dannoPatada);
	}
	
	public void tirarGolpe(Personaje oponente) {
		aplicarDanno(oponente, this.dannoGolpe);
	}
	
	protected void aplicarDanno(Personaje oponente, int cantidadDanno) {
		if(!oponente.bloqueo) {
			oponente.vida = oponente.vida - cantidadDanno;			
		}
		oponente.posicionX = oponente.posicionX - 2;
	}
	
	public void bloquear() {
		this.bloqueo = true;
	}


}
