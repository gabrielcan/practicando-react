import React, { useState } from "react";
import "../Contador/contador.css"

const Contador = () => {
  const [contador, setContador] = useState(0);

  //Contador
  const handleSuma = () => {
    setContador(contador + 1);
  };

  const handleResta = () => {
    if (contador <= 0) {
      contador = 0;
    } else {
      setContador(contador - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <h1> CONTADOR </h1>
        <div className="d-flex flex-row justify-content-evenly">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleResta}
          >
            Restar
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleSuma}
          >
            Sumar
          </button>
        </div>
        <input
          type="number"
          className="form-control"
          placeholder="Resultado"
          value={contador}
        ></input>
      </div>
    </div>
  );
};

export default Contador;
