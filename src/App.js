import "./App.css";
import React, { useState } from "react";
import Contador from "./components/Contador/Contador";
import AgregarTareas from "./components/AgregarTareas/AgregarTareas";
import ListaTareas from "./components/listaTareas/ListaTareas";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tareaEnviar, setTareaEnviar] = useState([]);
  const [texto, setTexto] = useState("");

  const handleExtraerTarea = (text) => {
    setTexto(text); // guardamos la tarea escrita en Input en la variable "texto"
  };

  const handleEnviarTarea = () => {
    let newTarea = {
      id: uuidv4(),
      nomTarea: texto,
      checked: false,
    };

    if (newTarea.nomTarea != "") {
      setTareaEnviar([...tareaEnviar, newTarea]);
      setTexto("");
    }
  };

  const handlePrueba = (idDelete) => {
    const newArray = tareaEnviar.filter((item) => item.id != idDelete);
    setTareaEnviar(newArray);
  };

  const handleChecked = (idcheckend) => {
    const newArrayCheckend = tareaEnviar.map((opcion) => {
      if (opcion.id === idcheckend) {
        return { ...opcion, checked: !opcion.checked }; // asignamos a la propiedad del objeto "checked" el valor contrario usando "!" del campo opcion.checked
      } else {
        return { ...opcion }; //retorna el array actual
      }
    });

    setTareaEnviar(newArrayCheckend);

    console.log(newArrayCheckend);
  };

  const handleBorrarMarcados = () => {
    const newArrayDeleteMarc = tareaEnviar.filter(
      (item) => item.checked === false
    );
    setTareaEnviar(newArrayDeleteMarc);
  };

  return (
    <div className="App">
      <AgregarTareas
        text={texto}
        handleEnviarTarea={handleEnviarTarea}
        handleExtraerTarea={handleExtraerTarea}
        handleBorrarMarcados={handleBorrarMarcados}
      />
      <ListaTareas
        item={tareaEnviar}
        handlePrueba={handlePrueba}
        handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;
