import axios from 'axios';


axios.get('https://api.datos.gob.mx/v2/sinaica')
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


