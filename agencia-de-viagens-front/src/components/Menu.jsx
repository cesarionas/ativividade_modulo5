import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link to="/">
        <img className="logo" src="imagens/logo.png" alt="logo" />
      </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/Pacotes" className="nav-link active">Pacotes</Link>
            </li>
            <li className="nav-item">
            <Link to="/Promocao" className="nav-link active">Promoçoes</Link>
            </li>
            <li className="nav-item">
            <Link to="/Cliente" className="nav-link active">Clientes</Link>
            </li>
            <li className="nav-item">
            <Link to="/Contato" className="nav-link active">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
