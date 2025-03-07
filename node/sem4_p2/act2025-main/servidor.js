//Escribe un comentario explicando para qué sirve http
//---Para manejar una direccion en un servidor.
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
//---Sirve para abrir, leer, escribir, etc archivos (manipularlos).
import fs from 'fs';

    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
           //--- Significa que hubo un error por parte del servidor no previsto
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        //--- Indica que todo ha salido bien con la solicitud y se le respondio al cliente
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
        
        const escuelas ={ 
          escuelas: [
            {
              "nombre": "Escuela Benito Juárez",
              "direccion": "Av. Principal 123, Ciudad de México",
            },
            {
              "nombre": "Escuela Secundaria Tecnica",
              "direccion": "Av. Secundaria 456, Culiacan",
            }
          ]
        };
          
          
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      //---Transforma el res a un formato JSON adecuado para ser mandado.
      res.end(JSON.stringify(escuelas));
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('donantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
    
    const donantes ={ 
      donantes: [
        {
          "nombre": "samuel Hernandez",
          "edad": "46",
        },
        {
          "nombre": "Maria Curry",
          "edad": "27",
        }
      ]
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(donantes));
    }




    //Funciones del equipo
    function mostrarEquipo(req, res) {
      fs.readFile('equipo.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }


  function getEquipo(req, res) {
  const integrantesEquipo ={ 
    integrantes: [
      {
        "nombre": "Angel Gabriel Camacho Perez",
        "cualidad": "Soy yo",
      },
      {
        "nombre": "Jesus Eduardo Escibar Meza",
        "cualidad": "Es muy trabajador y sabe aprender mucho por si mismo.",
      },
      {
        "nombre": "Emilio Hernandez Flores",
        "cualidad": "Tambien es muy trabajador, carismatico y le gusta mucho el diseño.",
      },
      {
        "nombre": "Eloy Rodriguez Bonilla",
        "cualidad": "Trabaja bien, parece muy inteligente",
      },
      {
        "nombre": "Alejandro Gutierrez Zamudio",
        "cualidad": "Sabe sobre programacion web y da buenas ideas",
      },
      {
        "nombre": "Jose Pedro Gastelum Beltran",
        "cualidad": "Parece una persona centrada y trabajadora",
      }
    ]
  };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(integrantesEquipo));
  }




  //Funciones del opinion
  function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
  }


  function getOpinion(req, res) {
  const integrantesEquipo ={ 
    integrantes: [
      {
      }
    ]
  };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(integrantesEquipo));
  }





    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('A donde tan perdido? Aqui no hay pagina a donde llegar.');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      } else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      } 


      else if (url === '/api/equipo') {
        getEquipo(req, res);
      } 
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      } 
      /*
      else if (url === '/api/opinion') {
        getOpinion(req, res);
      } 
        */
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      } 



      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?
      //--- Todo bien cuando la imagen la agrego mediante su addres de algun lugar en linea, pero en local
      //--- no me deja. Capaz el backend cause alguna interferencia.

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? 
      //--- Si, el colonialismo digital presenta limitantes para el como desarrollo mi trabajo como desarrollador
      //--- de software ya que el que las grandes corporaciones controlen gran parte del mercado en todo tipo de 
      //--- de herramientas me podrian obligar a hacer uso de estas ya que no existiria conpetidor.
      // ¿Para tu vida persona?
      //--- De igual forma, este colonialismo digital presenta limitantes en las aplicaciones y herramientas
      //--- que uso, pero tambien en la informacion que se me es presentada. Aquellos dueños de las redes
      //--- de informacion mas inportantes (como las redes sociales) son quienes controlan lo que me hace
      //--- llegar. Ademas de que se les da el poder de conocer nuestra informacion personal y utilizarla.
      //¿Qué es el freedombox?
      //--- Es como un servidor descentralizado, permite el que cada usuario tenga su propio pequeño servidor
      //--- privado, evitando asi que los datos pasen por un intermediario que pueda utilizarlos para algo.

      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html