import axios from "axios";

export async function listCardapio(){
    const response = await axios.get("https://thisburger.herokuapp.com/cardapio/")
    return response.data
}

const teste = await listCardapio()
console.log(teste)

