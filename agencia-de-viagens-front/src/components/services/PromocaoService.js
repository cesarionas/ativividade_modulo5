import axios from "axios";

const PROMOCAO_API_URL = "http://localhost:8080/promocoes";

class PromocaoService {
  getAllPromocao() {
    return axios.get(PROMOCAO_API_URL);
  }

  createPromocao(promocoes) {
    return axios.post(PROMOCAO_API_URL, promocoes);
  }

  getPromocaoById(promocoesId) {
    return axios.get(PROMOCAO_API_URL + "/" + promocoesId);
  }

  updatePromocao(promocoesId, promocoes) {
    return axios.put(PROMOCAO_API_URL + "/" + promocoesId, promocoes);
  }

  deletePromocao(promocoesId) {
    return axios.delete(PROMOCAO_API_URL + "/" + promocoesId);
  }
}

export default new PromocaoService();