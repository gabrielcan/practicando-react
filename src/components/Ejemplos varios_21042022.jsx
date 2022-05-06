import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import GabiNatBar from "../components/gabiNatBar/GabiNatBar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cambio, setCambio] = useState(false);
  const [texto, setTexto] = useState("");
  const [tareaEnviar, setTareaEnviar] = useState([]);
  console.log(tareaEnviar);
  const handleAbreMenu = () => {
    setCambio((stated) => !stated);
  };

  const handleTest = (text) => {
    setTexto(text);
  };

  const handleGuardar = () => {
    let crear = { id: uuidv4(), tarea: texto };

    // spread operator
    setTareaEnviar([...tareaEnviar, crear]);
    setTexto("");
  };
  return (
    <div className="App">
      <GabiNatBar test={cambio} handleAbreMenu={handleAbreMenu} />
      <div>
        <input
          value={texto}
          placeholder="holis"
          onChange={(e) => handleTest(e.target.value)}
        />
        <Button variant="primary" onClick={handleAbreMenu}>
          Primary
        </Button>
        {texto !== "" && (
          <Button variant="primary" onClick={handleGuardar} disabled={false}>
            guardar
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
