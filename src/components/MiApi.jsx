import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const MiApi = () => {
  const [paises, setPaises] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState(null);

  const obtenerInformacion = async () => {
    try {
      let infoApi = await fetch("https://restcountries.com/v3.1/all");
      let result = await infoApi.json();
      setPaises(result);
    } catch (error) {
      console.log("Error al obtener la información:", error);
    }
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  const ordenarPorNombre = () => {
    const nuevoOrden = orden === "asc" ? "desc" : "asc";
    const paisesOrdenados = [...paises].sort((a, b) => {
      if (a.name.common < b.name.common) {
        return nuevoOrden === "asc" ? -1 : 1;
      }
      if (a.name.common > b.name.common) {
        return nuevoOrden === "asc" ? 1 : -1;
      }
      return 0;
    });
    setPaises(paisesOrdenados);
    setOrden(nuevoOrden);
  };

  return (
    <div>
      <input
        type="text"
        style={{ width: "500px" }}
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
        }}
      />

      <h5>Presiona en Nombre para ordenar</h5>
      {paises && paises.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>°</th>
              <th onClick={ordenarPorNombre}>Nombre</th>
              <th>Moneda</th>
              <th>Capital</th>
              <th>Región</th>
            </tr>
          </thead>
          <tbody>
            {paises
              .filter((pais) =>
                Object.values(pais).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(busqueda.toLowerCase())
                )
              )
              .map((pais, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pais.name.common}</td>
                  <td>
                    {pais.currencies
                      ? Object.values(pais.currencies)[0].name
                      : "-"}
                  </td>
                  <td>{pais.capital}</td>
                  <td>{pais.region}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <h2>No hay países</h2>
      )}
    </div>
  );
};

export default MiApi;
