import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import PromocaoService from "../../components/services/PromocaoService";

export default function Create() {
   const [urlImage, setUrlImage] = useState("");
   const [destino_promo, setDestino_promo] = useState("");
   const [descricao_promo, setDescricao_promo] = useState("");
   const [preco_promo, setPreco_Promo] = useState("")
   const {id} = useParams();
   const navigate = useNavigate();

  
  const criarOuEditarPromocao = (e) => {
     e.preventDefault();

     const promocao = {destino_promo, urlImage, descricao_promo, preco_promo};


     console.log(promocao)
     if(id){
        PromocaoService.updatePromocao(id, promocao)
        .then((response) => {
          navigate("/Promocao")
      })
     } else {
      PromocaoService.createPromocao(promocao)
        .then((response) => {
            navigate("/Promocao")
        })
     }
  }
  
  useEffect(() =>{
     function getPromocaoById(){
       if(id) {
         PromocaoService.getPromocaoById(id)
         .then((response) => {
            setDestino_promo(response.data.destino_promo);
            setUrlImage(response.data.urlImage)
            setDescricao_promo(response.data.descricao_promo)
            setPreco_Promo(response.data.preco_promo)
         })
         .catch((error) => {
            console.log(error);
         })
       }
     }
     getPromocaoById()
  }, [id])
  
    return (
<div className="container py-3">
<form>
  <fieldset>
    <legend><h2 className="text-center">{id ? "Editar" : "Criar"}</h2></legend>
    <div className="mb-3">
      <label htmlFor="Destino" className="form-label">Destino</label>
      <input type="text" id="Destino" className="form-control" placeholder="Destino Promo" value={destino_promo} onChange={(e) => setDestino_promo(e.target.value)}/>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="UrlImage" className="form-label">UrlImage</label>
      <input type="text" id="UrlImage" className="form-control" placeholder="UrlImage" value={urlImage} onChange={(e) => setUrlImage(e.target.value)}/>
    </div>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="DescPromo" className="form-label">Descrição Promo</label>
      <input type="text" id="DescPromo" className="form-control" placeholder="Descrição Promo" value={descricao_promo} onChange={(e) => setDescricao_promo(e.target.value)}/>
    </div>
    </div>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="Preco" className="form-label">Preço</label>
      <input type="text" id="Preco" className="form-control" placeholder="Preço" value={preco_promo} onChange={(e) => setPreco_Promo(e.target.value)}/>
    </div>
    </div>
    <button type="submit" className="btn btn-primary" onClick={(e)=> criarOuEditarPromocao(e)}>Submit</button>
    <Link to="/Promocao" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancelar</Link>
  </fieldset>
</form>
       </div>
    );
}
