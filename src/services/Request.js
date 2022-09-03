import axios from "axios";

export async function listCardapio(){
    const response = await axios.get("https://thisburger.herokuapp.com/cardapio/")
    return response.data
}

export async function listPedidos(){
        const response = await axios.get("https://thisburger.herokuapp.com/pedido/")
        return response.data
}

export async function updatePedidos(reqbody, id){
    const response = await axios.put(`https://thisburger.herokuapp.com/pedido/${id}`, reqbody)
    return response.status
}

export async function createPedidos(reqbody){
    const response = await axios.post(`https://thisburger.herokuapp.com/pedido/`, reqbody)
    return response.status
}

export async function deletePedidos(id){
    const response = await axios.delete(`https://thisburger.herokuapp.com/pedido/${id}`)
    return response.status
}

const Teste = await listPedidos()
console.log(Teste)
