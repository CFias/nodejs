let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res) {
    res.send('Testando Rota');
});

app.listen(3000, function() {
    console.log("A aplicação está funcionando na porta 3000");
});