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
import com.site.agencia.repositorys.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	// GET
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll(){
		List<Cliente> clientes = clienteRepository.findAll();
		
		return ResponseEntity.ok().body(clientes);
	}
   // GET POR ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Cliente> findById(@PathVariable Long id){
		
		Cliente cliente = clienteRepository.findById(id).get();
		
		return ResponseEntity.ok().body(cliente);
	}
	
	//CREATE
	@PostMapping
	public Cliente create(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Cliente> update(@PathVariable long id, @RequestBody Cliente clienteDetails){
		Cliente updateCliente = clienteRepository.findById(id).get();
		
		updateCliente.setNome(clienteDetails.getNome());
		updateCliente.setSobrenome(clienteDetails.getSobrenome());
		updateCliente.setCpf(clienteDetails.getCpf());
		updateCliente.setTelefone(clienteDetails.getTelefone());
		updateCliente.setEmail(clienteDetails.getEmail());
		
		clienteRepository.save(updateCliente);
		
		return ResponseEntity.ok(updateCliente);
	}
	
	//DELETE 
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id){
		
		Cliente cliente = clienteRepository.findById(id).get();
		
		clienteRepository.delete(cliente);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
}

