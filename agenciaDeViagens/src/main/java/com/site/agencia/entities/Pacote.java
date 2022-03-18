package com.site.agencia.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Pacote implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_pacote;
	private String destino;
	private String urlImage;
	private String preco;
	private String descricao_destino;
	
	@ManyToOne
	@JoinColumn(name = "Cliente_id")
	private Cliente clientes;
	
	@ManyToOne
	@JoinColumn(name = "Promocao_id")
	private Promocao promocao;
	
	
	public Pacote() {
		super();
		
	}


	public Pacote(Long id_pacote, String destino, String urlImage, String preco, String descricao_destino,
			Cliente clientes, Promocao promocao) {
		super();
		Id_pacote = id_pacote;
		this.destino = destino;
		this.urlImage = urlImage;
		this.preco = preco;
		this.descricao_destino = descricao_destino;
		this.clientes = clientes;
		this.promocao = promocao;
	}


	public Long getId_pacote() {
		return Id_pacote;
	}


	public void setId_pacote(Long id_pacote) {
		Id_pacote = id_pacote;
	}


	public String getDestino() {
		return destino;
	}


	public void setDestino(String destino) {
		this.destino = destino;
	}


	public String getUrlImage() {
		return urlImage;
	}


	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}


	public String getPreco() {
		return preco;
	}


	public void setPreco(String preco) {
		this.preco = preco;
	}


	public String getDescricao_destino() {
		return descricao_destino;
	}


	public void setDescricao_destino(String descricao_destino) {
		this.descricao_destino = descricao_destino;
	}


	public Cliente getClientes() {
		return clientes;
	}


	public void setClientes(Cliente clientes) {
		this.clientes = clientes;
	}


	public Promocao getPromocao() {
		return promocao;
	}


	public void setPromocao(Promocao promocao) {
		this.promocao = promocao;
	}


	@Override
	public int hashCode() {
		return Objects.hash(Id_pacote);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pacote other = (Pacote) obj;
		return Objects.equals(Id_pacote, other.Id_pacote);
	}


	

}
