import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PacoteService from "../../components/services/PacoteService";
import "./css/pacote.css";
export default function Index(){
    const [pacote, setPacote] = useState([]);

    const getAllPacote = () => {
        PacoteService.getAllPacote()
        .then((response) => {
            setPacote(response.data);
            console.log(response.data)
            
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllPacote();
    }, [])

    const deletePacote = (pacoteId) => {
        PacoteService.deletePacote(pacoteId)
        .then((response) => {
            getAllPacote();
        }).catch((error) => {
            console.log(error);
        });
    }
    
    return(

        <div className="container">
             <h1>Nossos Pacotes de Viagens</h1>
            <div className="row">
                {
                    pacote.map((pacote) => (
                 <div key={pacote.id_pacote} className="col-12 col-md-6 col-lg-4 my-4" >
                    <div className="card">
                        <img src={pacote.urlImage} className="card-img-top" alt="card"/>
                        <div className="card-body bg-info" >
                        <h5 className="card-title">{pacote.destino}</h5>
                        <p className="card-text text-light">{pacote.descricao_destino}</p>
                        <p className="card-text">R$ <strong className="text-danger">{pacote.preco}</strong>.</p>
                        <button className="btn btn-danger" onClick={() => deletePacote(pacote.id_pacote)}> Deletar </button>
                      </div>
                      </div>
                </div>
                    ))
                    
                }
            </div>
            <Link to="/Pacotes-Create"> Adicionar novo Destino</Link>
        </div>
    )
}
