import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const NuoveUscite = function () {
  const [searchResults, setSearchResults] = useState([]); // Stato per memorizzare i risultati della ricerca
  const query = "rap"; // Puoi cambiare questa stringa con la tua ricerca dinamica

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.data); // Salva i risultati della ricerca nello stato
        } else {
          console.error("Errore nel recupero dei dati");
        }
      } catch (error) {
        console.error("Errore di rete:", error);
      }
    };

    fetchData();
  }, [query]); // Effettua la fetch ogni volta che cambia `query`

  // Limita i risultati a 10 per desktop e 6 per mobile
  const limitedResultsLg = searchResults.slice(0, 8); // 8 album per desktop
  const limitedResultsSm = searchResults.slice(0, 6); // 6 album per mobile

  return (
  <>
  <Container className="bg-dark">
    <div className="container-fluid bg-dark">
      <h2 className="text-white">Nuove uscite</h2>

      {/* Layout per mobile */}
      <div className="row d-lg-none">
        {limitedResultsSm.map((result) => (
          <div
            key={result.id}
            className="col-6 col-sm-4 col-md-2 text-white mb-4" // 3 per riga su mobile
          >
            <img
              src={result.album.cover_medium}
              alt={result.title}
              className="radio-img rounded-4 w-100"
            />
            <p className="mt-2">{result.title}</p>
          </div>
        ))}
      </div>

      {/* Layout per desktop */}
      <div className="row d-none d-lg-flex">
        {limitedResultsLg.map((result) => (
          <div
            key={result.id}
            className="col-6 col-sm-4 col-md-2 col-lg-3 text-white mb-4" // 8 per riga su desktop
          >
            <img
              src={result.album.cover_medium}
              alt={result.title}
              className="radio-img rounded-4 w-100"
            />
            <p className="mt-2">{result.title}</p>
          </div>
        ))}
      </div>
    </div>
    </Container>
    </>
  );
};

export default NuoveUscite;
