import React from "react";

export default function Home() {
  return (
    <>
      <>
        <h1>Principais destinos internacionais dessa temporada</h1>
      </>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="imagens/1.png" alt="Promo"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="imagens/4.png" alt="França"/>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="imagens/1.png" alt="Promo"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}