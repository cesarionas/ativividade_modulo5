package com.site.agencia.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agencia.entities.Cliente;


@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
