package org.comIT.proyecto.connections;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import org.comIT.proyecto.entities.User;
import org.comIT.proyecto.entities.animales.Animal;
import org.comIT.proyecto.entities.animales.Gallo;
import org.comIT.proyecto.entities.animales.Gato;
import org.comIT.proyecto.entities.animales.Perro;
import org.comIT.proyecto.entities.animales.TipoAnimal;

public class VeterinariaDAO {

	public void save(Animal animal) throws SQLException {
		Connection con = JDBCConnection.connectToDatabase();
		Statement st = con.createStatement();
		//TODO si hay duenio, falta verificar si ya tiene id o si hay que insertarlo en la base de datos antes de insertar al animal.
		String queryToExecute = "insert into animales (nombre,cant_patas,tiene_plumas,persona_id,tipo_animal) "
				+ "values ("
				+ "'"+animal.getNombre()+"',"
				+ animal.getCantidadPatas() + ","
				+ animal.isTienePlumas() + ","
				+ (animal.getDuenio() != null ? ""+1 : "null") + ","
				+ "'" + animal.getTipoAnimal().toString() + "'"
				+")";
		System.out.println(queryToExecute);
		int res =  st.executeUpdate(queryToExecute);
		System.out.println(res);
		JDBCConnection.closeConnectionToDatabase(con);
	}
	
	public Animal getAnimal(int idAnimal) throws SQLException {
		Connection con = JDBCConnection.connectToDatabase();
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery("select * from animales where id = " + idAnimal);

		Animal animal = null;
		if(rs.next()) {
			String nombreAnimal = rs.getString(2);
			System.out.println("NOMBRE DEL ANIMAL " + nombreAnimal);
			TipoAnimal tipo = TipoAnimal.valueOf(rs.getString(6));
			if(tipo == TipoAnimal.GATO) {
				animal = new Gato(nombreAnimal);
			} else if (tipo == TipoAnimal.PERRO) {
				animal = new Perro(nombreAnimal);
			} else {
				animal = new Gallo(nombreAnimal);
			} 
			int cantidadPatas = rs.getInt(3);
			while(animal.getCantidadPatas() > cantidadPatas) {
				animal.perderPata();
			}
			
			JDBCConnection.closeConnectionToDatabase(con);
			
		} 
		return animal;
	}
	
	public List<Animal> getAnimales(Boolean tienePlumas, Integer cantMinimaPatas, Integer cantMaximaPatas, String nombre) {
		return null;
	}
	

	public List<Animal> getAnimalesPorDuenio(User duenio) {
		return null;
			
	}
	
	
	public List<Animal> getAnimalesPorDuenio(int idUDuenio) {
		return null;
	}
}
