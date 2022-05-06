import React, { useState, Fragment } from "react";

const SumarDosNumerosConObjet = () => {
  const [valores, setValores] = useState({
    Numero1: 0,
    Numero2: 0,
  });
  const [resSuma, setResSuma] = useState(0);

  // Sumar 2 Numeros usando Objetos

  const handleCambiosEnInput = (event) => {
    console.log(event.target.value);

    setValores({
      ...valores, //hace una copia  del objeto
      [event.target.name]: event.target.value,
    });
  };

  const handleSumaNumeros = () => {
    setResSuma(parseInt(valores.Numero1) + parseInt(valores.Numero2));
    console.log(resSuma);
    valores.Numero1 = 0;
    valores.Numero2 = 0;
  };
  return (
    <Fragment>
      {/* Segunda forma de realizar suma de 2 NUMEROS */}
      <div className="d-flex justify-content-center mt-2">
        <div className="d-flex flex-column align-items-center">
          <h4> SUMA DE 2 VALORES</h4>
          <h4>SEGUNDA OPCION CON OBJETO </h4>

          <label> Primer valor</label>
          <input
            type="number"
            className="text-center mt-2"
            name="Numero1"
            value={valores.Numero1}
            onChange={handleCambiosEnInput}
          ></input>
          <label> Segundo valor</label>

          <input
            type="number"
            className="text-center mt-2"
            name="Numero2"
            value={valores.Numero2}
            onChange={handleCambiosEnInput}
          ></input>
        

        <div className="">{resSuma}</div>

        <button
          onClick={handleSumaNumeros}
          className="btn btn-outline-secondary"
        >
          SumarValores
          </button>
          </div>
      </div>
    </Fragment>
  );
};

export default SumarDosNumerosConObjet;
