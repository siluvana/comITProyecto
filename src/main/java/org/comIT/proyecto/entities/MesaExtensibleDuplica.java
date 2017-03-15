package org.comIT.proyecto.entities;

public class MesaExtensibleDuplica {
	
	private Integer cantidadPatas;
	private String materialTapa;
	private boolean extendida;
//	private boolean plegable;
	
	private int ancho;
	private int largo;
	
	
	public Integer getCantidadPatas() {
		return cantidadPatas;
	}
	public void setCantidadPatas(Integer cantidadPatas) {
		this.cantidadPatas = cantidadPatas;
	}
	public String getMaterialTapa() {
		return materialTapa;
	}
	public void setMaterialTapa(String materialTapa) {
		this.materialTapa = materialTapa;
	}
	public boolean isExtendida() {
		return extendida;
	}
//	public void setExtendida(boolean extensible) {
//		this.extensible = extensible;
//	}
//	public boolean isPlegable() {
//		return plegable;
//	}
//	public void setPlegable(boolean plegable) {
//		this.plegable = plegable;
//	}
	public int getAncho() {
		return ancho;
	}
	public void setAncho(int ancho) {
		this.ancho = ancho;
	}
	public int getLargo() {
		return largo;
	}
	public void setLargo(int largo) {
		this.largo = largo;
	}

	public void extender() {
		if(!extendida) { //equivalente a extendida == false
			extendida = true;
			ancho = ancho * 2;
			largo = largo * 2;			
		}
	}
	
	public void contraer() {
		if(extendida) {
			extendida = false;
			ancho = ancho/2;
			largo = largo/2;
		}
	}
}
