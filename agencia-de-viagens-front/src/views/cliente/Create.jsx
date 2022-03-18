import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import ClienteService from "../../components/services/ClienteService";
export default function Create() {
   const [nome, setNome] = useState("");
   const[sobrenome,setSobrenome] = useState("");
   const[cpf,setCpf] = useState("");
   const[telefone,setTelefone] = useState("");
   const[email,setEmail] = useState("");
   const {id} = useParams();
   const navigate = useNavigate();

  
  const criarOuEditarCliente = (e) => {
     e.preventDefault();

     const cliente = {nome, sobrenome, cpf, telefone, email};


     console.log(cliente)
     if(id){
        ClienteService.updateCliente(id, cliente)
        .then((response) => {
          navigate("/Cliente")
      })
     } else {
        ClienteService.createCliente(cliente)
        .then((response) => {
            navigate("/Cliente")
        })
     }
  }
  
  useEffect(() =>{
     function getClienteById(){
       if(id) {
         ClienteService.getClienteById(id)
         .then((response) => {
            setNome(response.data.nome);
            setSobrenome(response.data.sobrenome);
            setCpf(response.data.cpf);
            setTelefone(response.data.telefone);
            setEmail(response.data.email);

         })
         .catch((error) => {
            console.log(error);
         })
       }
     }
     getClienteById()
  }, [id])
    return (
<div className="container py-3">
<form>
  <fieldset>
    <legend><h2 className="text-center">{id ? "Editar" : "Criar"}</h2></legend>
    <div className="mb-3">
      <label htmlFor="Nome" className="form-label">Nome</label>
      <input type="text" id="Nome" className="form-control" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="Sobrenome" className="form-label">Sobrenome</label>
      <input type="text" id="sobrenome" className="form-control" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
    </div>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="Cpf" className="form-label">CPF</label>
      <input type="text" id="cpf" className="form-control" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
    </div>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="Telefone" className="form-label">Telefone</label>
      <input type="text" id="telefone" className="form-control" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
    </div>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="Email" className="form-label">Email</label>
      <input type="text" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    </div>
    <button type="submit" className="btn btn-primary" onClick={(e)=> criarOuEditarCliente(e)}>Enviar</button>
    <Link to="/Cliente" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancelar</Link>
  </fieldset>
</form>
       </div>
    );
}
