const {createServer} = require('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"Contente-Type": "text/html"})
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);
    response.end();

});

server.listen(8000);

console.log("Ouvindo porta 8000");