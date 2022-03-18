import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PromocaoService from "../../components/services/PromocaoService";
export default function Index(){
    const [promocao, setPromocao] = useState([]);

    const getAllPromocao = () => {
        PromocaoService.getAllPromocao()
        .then((response) => {
            setPromocao(response.data);
            console.log(response.data)
            
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllPromocao();
    }, [])

    const deletePromocao = (pacoteId) => {
        PromocaoService.deletePromocao(pacoteId)
        .then((response) => {
            getAllPromocao();
        }).catch((error) => {
            console.log(error);
        });
    }
         
    return(

        <div className="container">
             <h1>Nossas Promoções</h1>
            <div className="row">
                {
                    promocao.map((promocao) => (
                 <div key={promocao.id_promo} className="col-12 col-md-6 col-lg-4 my-4" >
                    <div className="card">
                        <img src={promocao.urlImage} className="card-img-top" alt="card"/>
                        <div className="card-body bg-info" >
                        <h5 className="card-title">{promocao.destino_promo}</h5>
                        <p className="card-text text-light">{promocao.descricao_promo}</p>
                        <p className="card-text">R$ <strong className="text-danger">{promocao.preco_promo}</strong>.</p>
                        <Link to={`/Promocao-Update/${promocao.id_promo}`} className="btn btn-warning text-white">Editar</Link>
                        <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={() => deletePromocao(promocao.id_promo)}> Deletar </button>
                      </div>
                      </div>
                </div>
                    ))
                    
                }
            </div>
            <Link to="/Promocao-Create"> Adicionar nova Promoção</Link>
        </div>
    )
}
