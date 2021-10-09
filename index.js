import Queue from "./lib/Queue.js"
import axios from "axios"
import readline from 'readline-sync';
import { json } from "express";
const token = '20211008012102'
const option = {
    method: "GET",
    headers : {"Content-type": "application/json", 'X-VTEX-API-AppKey': token, 'X-VTEX-API-AppToken': token}
}

function searchWord(){
    return readline.question('Digite o que deseja procurar: ') //verificar um item específico no estoque.
}
async function start(){
    const word = searchWord()
    const api = await returnJSON(word)
    return console.log(`Existem ${api.data.length} itens ${word} disponíveis no estoque.`)
    
}

async function returnJSON(word){
    const response = await axios.get(`https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search/${word}`,option)
 //   JSON.parse(response)
    await Queue.add("RegistrationMail",response)

    .catch(err => console.error('error:' + err));
    return response
}
start()

