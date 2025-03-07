import http from 'http';
import url from 'url';

//http://localhost:1984/?a=15&b=20&cine=museo

const servidor = http.createServer((req, res) => {
    console.log("Ha llegado una solicitud");

    const urlProcesada = url.parse(req.url, true);
    const queryParams = urlProcesada.query;

    console.log(urlProcesada.query);

    let a= urlProcesada.query.a;
    let b= urlProcesada.query.b;
    let text="";

    if(a < 10){
        text= "El valor de la a es menor a diez";
    }else if(a > 10){
        text= "El valor de la a es mayor a diez";
    } else {
        text= "El valor de a es diez";
    }
    if(b < 50){
        text += " y el de la b es menor a cincuenta";
    }else if(b > 50){
        text += " y el de la b es mayor a cincuenta";
    } else {
        text += " y el de b es igual a cincuenta";
    }



  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(text+"\n");
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
