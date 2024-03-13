import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";
import chalk from 'chalk';
import fs from 'fs';

const caminho = process.argv; // valores de argumentos
// console.log(caminho[2]);

async function imprimeLista(valida, resultado, identificador = '') {

    if(valida){
        console.log(
          chalk.yellow('lista validada'),
          chalk.black.bgGreen(identificador),
          await listaValidada(resultado));
      } else{
          console.log(
            chalk.yellow('lista de links'),
            chalk.black.bgGreen(identificador),
            resultado);
      }        
    }
  

//node acessa as pastas onde estão os executáveis
async function processaTexto(args){
    const caminho = args[2]
    const valida = args[3] === '--valida';
    console.log(valida);

    try{
        fs.lstatSync(caminho)
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existe');
            return; // para retornar nada além do conselog log
        }
    }
    
    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho); // chamando o caminho do arquivo quando é passado na linha de comando do terminal
        imprimeLista(valida, resultado)
    } 

    if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista =  await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            // console.log(lista);
            // console.log(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo)
        })
    // retorna um array de arquivo(s) no diretório (pasta)
    }
    
}

processaTexto(caminho);


