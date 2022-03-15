import { pegaArquivo } from '../index.js';
import { jest } from '@jest/globals';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]
describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar um array com resultados', async () => {
        const resultado = await pegaArquivo('D:\Arquivos_Gustavo\Git\NodeExample\nodestudy\test\arquivos\texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
});