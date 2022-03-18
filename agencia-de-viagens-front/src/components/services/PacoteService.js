import axios from "axios";

const PACOTE_API_URL = "http://localhost:8080/pacotes";

class PacoteService {
  getAllPacote() {
    return axios.get(PACOTE_API_URL);
  }

  createPacote(pacotes) {
    return axios.post(PACOTE_API_URL, pacotes);
  }

  getPacoteById(pacotesId) {
    return axios.get(PACOTE_API_URL + "/" + pacotesId);
  }

  updatePacote(pacotesId, pacotes) {
    return axios.put(PACOTE_API_URL + "/" + pacotesId, pacotes);
  }

  deletePacote(pacotesId) {
    return axios.delete(PACOTE_API_URL + "/" + pacotesId);
  }
}

export default new PacoteService();