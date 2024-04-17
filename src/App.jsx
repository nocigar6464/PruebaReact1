import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import { Container } from "react-bootstrap";
import MiApi from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container style={{ backgroundColor: "#b4d4e0" }}>
        <h1>
          <FontAwesomeIcon
            icon={faEarthAmericas}
            className="fa-duotone fa-earth-americas"
          />{" "}
          Paises del mundo
        </h1>

        <h5>
          Link de la explicacion{" "}
          <a href="https://www.loom.com/share/3b51b7681a184602b5244332bb3ee1ed?sid=409bc2a6-48b5-40ea-8373-be4a8da40805">
            ACA
          </a>
        </h5>
        <MiApi />
        <footer> Información obtenida desde restcountries.com</footer>
      </Container>
    </>
  );
}

export default App;
