import express from 'express';
import fs from 'fs';

const app = express();
const puerto = 1984;

app.use(express.static('img'));

app.get('/', (req, res) => {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
});

app.get('/api/escuelas', (req, res) => {
    const escuelas = {
        escuelas: [
            { "nombre": "Escuela Benito Juárez", "direccion": "Av. Principal 123, Ciudad de México" },
            { "nombre": "Escuela Secundaria Tecnica", "direccion": "Av. Secundaria 456, Culiacan" }
        ]
    };
    res.json(escuelas);
});

app.get('/escuelas', (req, res) => {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
});

app.get('/api/donantes', (req, res) => {
    const donantes = {
        donantes: [
            { "nombre": "Samuel Hernandez", "edad": 46 },
            { "nombre": "Maria Curry", "edad": 27 }
        ]
    };
    res.json(donantes);
});

app.get('/donantes', (req, res) => {
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
});

app.get('/api/equipo', (req, res) => {
    const integrantesEquipo = {
        integrantes: [
            { "nombre": "Angel Gabriel Camacho Perez", "cualidad": "Soy yo" },
            { "nombre": "Jesus Eduardo Escibar Meza", "cualidad": "Es muy trabajador y sabe aprender mucho por sí mismo." },
            { "nombre": "Emilio Hernandez Flores", "cualidad": "Tambien es muy trabajador, carismatico y le gusta mucho el diseño." },
            { "nombre": "Eloy Rodriguez Bonilla", "cualidad": "Trabaja bien, parece muy inteligente" },
            { "nombre": "Alejandro Gutierrez Zamudio", "cualidad": "Sabe sobre programación web y da buenas ideas" },
            { "nombre": "Jose Pedro Gastelum Beltran", "cualidad": "Parece una persona centrada y trabajadora" }
        ]
    };
    res.json(integrantesEquipo);
});

app.get('/equipo', (req, res) => {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
});

app.get('/opinion', (req, res) => {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.send(data);
    });
});


//Ejercicio 12
app.delete('/api/escuela/del/:nombre', (req, res) => {
    const nombre= req.params.nombre;
    console.log(`Escuela con el nombre ${nombre} borrada`)
    res.send(`Escuela con el nombre ${nombre} borrada`);
});

app.delete('/api/escuelas/del', (req, res) => {
    console.log(`Escuelas borradas`)
    res.send(`Escuela borradas`);
});







app.use((req, res) => {
    res.status(404).send('A donde tan perdido? Aqui no hay pagina a donde llegar.');
});


app.use((req, res) => {
    res.status(404).send('A donde tan perdido? Aqui no hay pagina a donde llegar.');
});

//Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});




