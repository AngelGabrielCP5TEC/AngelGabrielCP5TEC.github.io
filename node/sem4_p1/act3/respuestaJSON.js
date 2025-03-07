import http from 'http';
import url from 'url';

const servidor = http.createServer((req, res) => {
    console.log("Ha llegado una solicitud");

    const urlProcesada = url.parse(req.url, true);
    const queryParams = urlProcesada.query;

    console.log(urlProcesada.query);

    const respuestaJSON= {
        "Autor":"Jose",
        "Edad":"Muerto"
    }


    res.writeHead(200, { 'Content-Type': 'application/json' });

    //
    res.end(JSON.stringify(respuestaJSON));
});

const puerto = 1984;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
