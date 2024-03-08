// import libChalk from 'chalk';

// console.log(chalk.blue('olá mundo'));
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.bgWhite.bold('Alura'));
// console.log(libChalk.blue.bgWhite.bold('Alura'));

// function pegaArquivo(caminhoDoArquivo){ ->> reescrevendo com funções assíncronas 
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{ /* tres parametros: o caminho do arquivo a ser lido, o encoding(caracteres) e uma função de callback que mostra o texto ou o erro*/
//     if(erro){
//         trataErro(erro)
//     }
//         console.log(chalk.green(texto));
//     })
// }

/*! // promises com then()
// function pegaArquivo(caminhoDoArquivo){ //uma forma
//     const enconding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, enconding)
//     .then( // para resolver o que veio da função
//         // recebe um callback -> função dentro de função
//         (texto)=> console.log(chalk.blue(texto))
//     )
//     .catch( // pega o erro se houver
//         (erro)=> trataErro(erro)
//     )
// }
*/