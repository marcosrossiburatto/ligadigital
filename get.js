const http = require('http');
const url = require('url');      // the url module provides utilities for URL resolution and parsing.

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((requisicao, resposta) => {
//    const parametrosConsulta = url.parse(requisicao.url, true);  // buscando informacao no endereco do navegador
//    console.log(parametrosConsulta);

//    const urlParse = url.parse(requisicao.url, true);
//    console.log(urlParse.query);

//    const urlParse = url.parse(requisicao.url, true);
//    const parametrosConsulta = urlParse.query;
//    console.log(JSON.stringify(parametrosConsulta));

    const urlAnalise = url.parse(requisicao.url, true);
    const parametrosConsulta = urlAnalise.query;

    console.log(requisicao.url);
    resposta.setHeader('Content-Type', 'text/plain');

    if (requisicao.url.startsWith('/bye')) {
        resposta.statusCode = 200;
        resposta.end(`Tchau`);
    } else if (requisicao.url.startsWith('/hello')) {
        resposta.statusCode = 200;
        resposta.end(`Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`);
    } else {
        resposta.statusCode = 404;
        resposta.end(`Página não encontrada ${requisicao.url}`);
    }


//    resposta.statusCode = 200;  // codigo de informação da pagina tipo 404
//    resposta.setHeader('Content-Type', 'text/plain');
//    resposta.end('Hello World');
//   resposta.end(`Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/);`)
})