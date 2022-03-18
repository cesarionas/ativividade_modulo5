import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ClienteService from "../../components/services/ClienteService";

export default function Index() {
    const [cliente, setCliente] = useState([]);
    
    const getAllCliente = () => {
        ClienteService.getAllCliente()
        .then((response) => {
            setCliente(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });  
    
    }
    useEffect(() => {
        getAllCliente();
    }, [])
    
    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId)
        .then((response) => {
            getAllCliente();
        }).catch((error) => {
            console.log(error);
            const {data} = error.response;
            if (data.status === 500){
                alert("Erro na API")
            }
        });
    }

    return (
        <div className="container py-3">
            <h1>Nossos Clientes</h1>
            <table className="table">
                <thead>
                    <tr>
                        
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Acões</th>
                    </tr>
                </thead>
                    <tbody>
                    {   cliente.map((cliente) => (

                        <tr key={cliente.id_cliente}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.sobrenome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <Link to={`/Cliente-Update/${cliente.id_cliente}`} className="btn btn-info">Editar</Link>
                                <button className="btn btn-danger" onClick={() => deleteCliente(cliente.id_cliente)} style={{marginLeft:"10px"}}>
                                    Deletar
                                </button>
                            </td>
                        </tr>
                        
                    ))
                        
                    }
                    </tbody>
            </table>
            <Link to="/Cliente-Create">Adicionar Novo Cliente</Link>
        </div>
    );
}