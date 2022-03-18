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

import com.site.agencia.entities.Cliente;
import com.site.agencia.entities.Pacote;
import com.site.agencia.entities.Promocao;
import com.site.agencia.repositorys.ClienteRepository;
import com.site.agencia.repositorys.PacoteRepository;
import com.site.agencia.repositorys.PromocaoRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/pacotes")
public class PacoteController {
	
	@Autowired
	private PacoteRepository pacoteRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private PromocaoRepository promocaoRepository;
	
	
	@GetMapping
	public ResponseEntity<List<Pacote>> findAll(){
		List<Pacote> pacotes = pacoteRepository.findAll();
		
		return ResponseEntity.ok().body(pacotes);
	}
   
	@GetMapping(value = "/{id}")
	public ResponseEntity<Pacote> findById(@PathVariable Long id){
		
		Pacote pacote = pacoteRepository.findById(id).get();
		
		return ResponseEntity.ok().body(pacote);
	}
	//CREATE
		@PostMapping
		public Pacote create(@RequestBody Pacote pacote) {
			return pacoteRepository.save(pacote);
		}
		
		//UPDATE
		@PutMapping("{id}")
		public ResponseEntity<Pacote> update(@PathVariable long id, @RequestBody Pacote pacoteDetails){
			 Pacote updatePacote = pacoteRepository.findById(id).get();
			 Cliente cliente = clienteRepository.findById(pacoteDetails.getClientes().getId_cliente()).get();
			 Promocao promocao = promocaoRepository.findById(pacoteDetails.getPromocao().getId_promo()).get();
			 
			 updatePacote.setDestino(pacoteDetails.getDestino());
			 updatePacote.setPreco(pacoteDetails.getPreco());
			 updatePacote.setDescricao_destino(pacoteDetails.getDescricao_destino());
			 updatePacote.setUrlImage(pacoteDetails.getUrlImage());
			 updatePacote.setClientes(cliente);
			 updatePacote.setPromocao(promocao);
			 
			pacoteRepository.save(updatePacote);
			 
			 return ResponseEntity.ok(updatePacote);
		}
		
		//DELETE 
		@DeleteMapping("{id}")
		public ResponseEntity<HttpStatus> delete(@PathVariable long id){
			
			Pacote pacote = pacoteRepository.findById(id).get();
			
			pacoteRepository.delete(pacote);
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			
		}
}
