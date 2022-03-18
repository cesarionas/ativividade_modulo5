package com.site.agencia.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.site.agencia.entities.Promocao;
import com.site.agencia.repositorys.PromocaoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/promocoes")
public class PromocaoController {
	
	@Autowired
	private PromocaoRepository promocaoRepository;
	// GET
	@GetMapping
	public ResponseEntity<List<Promocao>> findAll(){
		List<Promocao> promocoes = promocaoRepository.findAll();
		
		return ResponseEntity.ok().body(promocoes);
	}
   // GET POR ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Promocao> findById(@PathVariable Long id){
		
		Promocao promocao = promocaoRepository.findById(id).get();
		
		return ResponseEntity.ok().body(promocao);
	}
	
	//CREATE
	@PostMapping
	public Promocao create(@RequestBody Promocao promocao) {
		return promocaoRepository.save(promocao);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Promocao> update(@PathVariable long id, @RequestBody Promocao promocaoDetails){
		Promocao updatePromocao = promocaoRepository.findById(id).get();
		
		updatePromocao.setDestino_promo(promocaoDetails.getDestino_promo());
		updatePromocao.setDescricao_promo(promocaoDetails.getDescricao_promo());
		updatePromocao.setPreco_promo(promocaoDetails.getPreco_promo());
		updatePromocao.setUrlImage(promocaoDetails.getUrlImage());
		
		promocaoRepository.save(updatePromocao);
		
		return ResponseEntity.ok(updatePromocao);
	}
	
	//DELETE 
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id){
		
		Promocao promocao = promocaoRepository.findById(id).get();
		
		promocaoRepository.delete(promocao);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
}

