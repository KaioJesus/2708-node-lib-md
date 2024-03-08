import pegaArquivo from "./index.js";
import chalk from 'chalk';
import fs from 'fs';

const caminho = process.argv; // valores de argumentos
// console.log(caminho[2]);

//node acessa as pastas onde estão os executáveis
async function processaTexto(args){
    const caminho = args[2]
    
    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho); // chamando o caminho do arquivo quando é passado na linha de comando do terminal
        console.log(chalk.yellow(`lista de links`, resultado))
    } 

    if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista =  await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            console.log(lista);
            console.log(`${caminho}/${nomeDeArquivo}`)
        })
        console.log(arquivos); // retorna um array de arquivo(s) no diretório (pasta)
    }
}

processaTexto(caminho);