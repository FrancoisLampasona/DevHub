const http = require("http");
const fs = require("fs");
const path = require("path");

// Configura porta e host
const hostname = "127.0.0.1";
const port = 3000;

// Percorso del file immagine (modifica il percorso in base alla tua configurazione)
const imagePath = path.join(
  __dirname,
  "../ServerNode/cieli-piu-belli-per-vedere-le-stelle.jpg"
); // Assicurati che questo punti alla tua immagine sul desktop

// Crea il server
const server = http.createServer((req, res) => {
  if (req.url === "/immagine") {
    // Serve l'immagine quando l'URL è /immagine
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Errore nel caricamento dell'immagine");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg"); // Modifica se l'immagine è in un altro formato, es. 'image/png'
        res.end(data);
      }
    });
  } else {
    // Risposta di default per altre richieste
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Pagina non trovata");
  }
});

// Avvia il server
server.listen(port, hostname, () => {
  console.log(`Server in esecuzione su http://${hostname}:${port}/`);
  console.log(
    `Visita http://${hostname}:${port}/immagine per vedere l'immagine`
  );
});
