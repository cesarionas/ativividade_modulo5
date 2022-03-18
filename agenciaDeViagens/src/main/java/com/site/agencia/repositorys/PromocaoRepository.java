package com.site.agencia.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.agencia.entities.Promocao;

@Repository
public interface PromocaoRepository extends JpaRepository<Promocao, Long>{

}
