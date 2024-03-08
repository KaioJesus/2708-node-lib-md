// const chalk = require('chalk') // forma antiga de importar
import fs from 'fs'; // biblioteca nativa do Node.js
import chalk from 'chalk'; //importando o arquivo

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; // uma forma de trabalhar com regex
    const regEx = new RegExp(/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm); // outra forma de trabalhar com regex
    const capturas = regex.exec(texto)  // regex recebe o texto e retorna um array 
    // const capturas2 = [...texto.match(regEx)]; // match -> combinar e retorna o que foi bateu com o texto
    const capturas3 = [...texto.matchAll(regex)] // retorna todas as recorrencias;
    const resultados = capturas3.map(captura => ({[captura[1]]: captura[2]}))
    // console.log(capturas3)
    // console.log(capturas2)
    // console.log(capturas);
    return resultados.length !== 0 ?  resultados:`Não há links no arquivo`;

}// recebe um texto e extrai link



// function trataErro(erro){
//     console.log(erro)
//     throw new Error(chalk.red(erro.code, 'não há arquivo no'));
// }

export default async function pegaArquivo(caminhoDoArquivo){
    try{ // tente/experimente
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding); // await => pega os dados, resolve e depois joga para variável
        return extraiLinks(texto);
    }catch(erro){ // caso de erro, pega o erro
        trataErro(erro)
    }
    finally {
        console.log(chalk.yellow('operação concluída'));
      }
}


// pegaArquivo('./arquivos/texto')

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\) -> grupos são definidos por parênteses


//Síncrono -> sequencial, uma instrução pós a outra

// Assíncrono -> não espera finalização de uma tarefa para iniciar a seguinte
// aguarda a finalização da tarefa para retornar o resultado