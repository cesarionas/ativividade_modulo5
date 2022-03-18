package com.site.agencia.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cliente implements Serializable{
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_cliente;
	private String nome;
	private String sobrenome;
	private String cpf;
	private String telefone;
	private String email;
	
	@JsonIgnore
	@OneToMany(mappedBy = "clientes")
	private List<Pacote> pacotes = new ArrayList<Pacote>();
	
	
	public Cliente() {
		super();
		
	}


	public Cliente(Long id_cliente, String nome, String sobrenome, String cpf, String telefone, String email) {
		super();
		Id_cliente = id_cliente;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cpf = cpf;
		this.telefone = telefone;
		this.email = email;
	}


	public List<Pacote> getPacotes() {
		return pacotes;
	}


	public Long getId_cliente() {
		return Id_cliente;
	}


	public void setId_cliente(Long id_cliente) {
		Id_cliente = id_cliente;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getSobrenome() {
		return sobrenome;
	}


	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}


	public String getCpf() {
		return cpf;
	}


	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public String getTelefone() {
		return telefone;
	}


	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	@Override
	public int hashCode() {
		return Objects.hash(Id_cliente);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(Id_cliente, other.Id_cliente);
	}
	
	
	

}
