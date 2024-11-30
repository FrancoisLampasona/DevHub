const array_cani = document.getElementsByClassName("dogcard");

const funzione_fetch = async function inviaDati() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all", {
      method: "GET", // Cambiato a GET, poiché il metodo POST non è supportato
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Errore nella richiesta: " + response.status);
    }

    const data = await response.json();
    console.log("Risposta:", data); // Visualizza l'elenco delle razze
  } catch (error) {
    console.error("Errore:", error);
  }
};

inviaDati();
