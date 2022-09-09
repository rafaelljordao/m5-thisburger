import axios from "axios";

const url = "https://thisburger.herokuapp.com/pedido";

export async function listCardapio() {
  const response = await axios.get(
    "https://thisburger.herokuapp.com/cardapio/"
  );
  return response.data;
}

export async function listPedidos() {
  const response = await axios.get(url);
  return response.data;
}

export async function listPedidosById(id) {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
}

export async function updatePedidos(reqbody, id) {
  const response = await axios.put(`${url}/${id}`, reqbody);
  return response.data;
}

export async function createPedidos(reqbody) {
  const response = await axios.post(url, reqbody);
  return response.data;
}

export async function deletePedidos(id) {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
}
