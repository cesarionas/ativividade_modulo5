import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import PacoteService from "../../components/services/PacoteService";
export default function Create() {
   const [destino, setDestino] = useState("");
   const[urlImage,setUrlImage] = useState("");
   const [preco, setPreco] = useState("");
   const [descricao_destino, setDescriao_Destino] = useState("");

   const {id} = useParams();
   const navigate = useNavigate();

  
  const criarOuEditarDestino = (e) => {
     e.preventDefault();

     const pacote = {destino, urlImage, preco, descricao_destino};


     console.log(pacote)
     if(id){
        PacoteService.updatePacote(id, pacote)
        .then((response) => {
          navigate("/Pacotes")
      })
     } else {
        PacoteService.createPacote(pacote)
        .then((response) => {
            navigate("/Pacotes")
        })
     }
  }
  
  useEffect(() =>{
     function getPacoteById(){
       if(id) {
         PacoteService.getPacoteById(id)
         .then((response) => {
            setDestino(response.data.destino);
            setUrlImage(response.data.urlImage);
            setPreco(response.data.preco)
            setDescriao_Destino(response.data.descricao_destino)
         })
         .catch((error) => {
            console.log(error);
         })
       }
     }
     getPacoteById()
  }, [id])
    return (
       <div className="container py-3">
<form>
  <fieldset>
    <legend><h2 className="text-center">{id ? "Editar" : "Criar"}</h2></legend>
    <div className="mb-3">
      <label htmlFor="Nome" className="form-label">Destino</label>
      <input type="text" id="Destino" className="form-control" placeholder="Destino" value={destino} onChange={(e) => setDestino(e.target.value)}/>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="UrlImage" className="form-label">UrlImage</label>
      <input type="text" id="UrlImage" className="form-control" placeholder="UrlImg" value={urlImage} onChange={(e) => setUrlImage(e.target.value)}/>
    </div>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="Descricao" className="form-label">Descrição</label>
      <input type="text" id="Descricao" className="form-control" placeholder="Descrição" value={descricao_destino} onChange={(e) => setDescriao_Destino(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="Preco" className="form-label">Preço</label>
      <input type="text" id="Preco" className="form-control" placeholder="Preco" value={preco} onChange={(e) => setPreco(e.target.value)}/>
    </div>
    </div>
    <button type="submit" className="btn btn-primary" onClick={(e)=> criarOuEditarDestino(e)}>Submit</button>
    <Link to="Autores" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancelar</Link>
  </fieldset>
</form>
       </div>
    );
}
