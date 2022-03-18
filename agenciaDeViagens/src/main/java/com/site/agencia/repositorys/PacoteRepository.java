package com.site.agencia.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agencia.entities.Pacote;

@Repository
public interface PacoteRepository extends JpaRepository<Pacote, Long>{

}
