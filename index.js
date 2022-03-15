import { default as chalk } from "chalk";
import { default as fs } from "fs";


const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;


function trataErro(erro) {
    throw new Error(chalk.redBright(erro.code, 'Não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellowBright('operação concluída'));
    }
}

function extraiLinks(texto) {
    try {
        const arrayResultados = [];
        let temp;
        while ((temp = regex.exec(texto)) !== null) {
            arrayResultados.push({
                [temp[1]]: temp[2]
            });
        }
        return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
    } catch (erro) {
        trataErro(erro);
    }
}

export { pegaArquivo };