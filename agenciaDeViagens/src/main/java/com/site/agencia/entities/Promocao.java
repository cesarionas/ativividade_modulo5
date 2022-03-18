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
public class Promocao implements Serializable {


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long Id_promo;
	private String destino_promo;
	private String urlImage;
	private String descricao_promo;
	private String preco_promo;
	
	
	@JsonIgnore
	@OneToMany(mappedBy = "promocao")
	private List<Pacote> pacotes = new ArrayList<Pacote>();
	
	
	public Promocao() {
		super();
	
	}


	public Promocao(Long id_promo, String destino_promo, String urlImage, String descricao_promo, String preco_promo,
			List<Pacote> pacotes) {
		super();
		Id_promo = id_promo;
		this.destino_promo = destino_promo;
		this.urlImage = urlImage;
		this.descricao_promo = descricao_promo;
		this.preco_promo = preco_promo;
		this.pacotes = pacotes;
	}



	public String getUrlImage() {
		return urlImage;
	}


	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}


	public List<Pacote> getPacotes() {
		return pacotes;
	}


	public Long getId_promo() {
		return Id_promo;
	}


	public void setId_promo(Long id_promo) {
		Id_promo = id_promo;
	}


	public String getDestino_promo() {
		return destino_promo;
	}


	public void setDestino_promo(String destino_promo) {
		this.destino_promo = destino_promo;
	}


	public String getDescricao_promo() {
		return descricao_promo;
	}


	public void setDescricao_promo(String descricao_promo) {
		this.descricao_promo = descricao_promo;
	}


	public String getPreco_promo() {
		return preco_promo;
	}


	public void setPreco_promo(String preco_promo) {
		this.preco_promo = preco_promo;
	}


	@Override
	public int hashCode() {
		return Objects.hash(Id_promo);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Promocao other = (Promocao) obj;
		return Objects.equals(Id_promo, other.Id_promo);
	}
	
	
}
