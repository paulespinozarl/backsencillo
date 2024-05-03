const http = require("http");
const axios = require("axios");

const server = http.createServer(async (req, res) => {
  // Configura las cabeceras CORS para permitir solicitudes desde cualquier origen
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    // Realiza la solicitud al servidor remoto
    const axiosResponse = await axios.get(
      "http://190.210.215.37/PruebaPHP/lista_usuarios.php"
    );
    // Envía la respuesta del servidor remoto como respuesta a la solicitud original
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(axiosResponse.data));
  } catch (error) {
    console.error("Error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

console.log("Proxy server running on port 3000");
server.listen(3000);
