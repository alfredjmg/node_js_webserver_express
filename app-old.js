const http = require('http');

http.createServer( (req,res) => {

    res.write(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Fernando',
        edad:32,
        url: req.url
    }

    res.write( JSON.stringify( salida ) );

    res.end();

})
.listen(8080);

console.log('Escuhando el puerto 8080');