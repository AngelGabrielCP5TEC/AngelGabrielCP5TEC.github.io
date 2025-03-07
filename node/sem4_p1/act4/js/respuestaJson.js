async function obtenerJSON() {
    try {
        const response = await fetch('http://localhost:1984');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        // Actualizar el DOM con la respuesta JSON
        const results = document.getElementById('results');
        results.innerHTML = `<li>Autor: ${data.Autor}</li><li>Edad: ${data.Edad}</li>`;
    } catch (error) {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    }
}

document.querySelector('button').addEventListener('click', obtenerJSON);
