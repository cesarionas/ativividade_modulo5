package com.site.agencia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.agencia.repositorys.ClienteRepository;
import com.site.agencia.repositorys.PacoteRepository;
import com.site.agencia.repositorys.PromocaoRepository;

@SpringBootApplication
public class AgenciaDeViagensApplication implements CommandLineRunner {
	
	@Autowired
	private PacoteRepository pacoteRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private PromocaoRepository promoRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AgenciaDeViagensApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}

}
