import React, { useState } from "react";

//abreviacion de sniper "sfc"
const SumarDosNumeros = () => {
  const [resultado, setResultado] = useState(0);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  //Suma de 2 numeros
  const handleValor1 = (evento) => {
    setValor1(evento.target.value);

    //console.log(valor1);
  };

  const handleValor2 = (evento) => {
    setValor2(evento.target.value);
  };

  const handleSumaDosNumb = () => {
    setResultado(parseInt(valor1) + parseInt(valor2));
    setValor1(0);
    setValor2(0);
    // valor1 = "";
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center ">
        <h1> SUMA DE 2 VALORES </h1>

        <label> Primer valor</label>
        <input
          type="number"
          className="text-center mt-2"
          value={valor1}
          onChange={handleValor1}
        ></input>
        <label> Segundo valor</label>

        <input
          type="number"
          className="text-center mt-2"
          value={valor2}
          onChange={handleValor2}
        ></input>

        <div className="text-center mt-2">{resultado}</div>

        <button
          className="btn btn-outline-secondary"
          onClick={handleSumaDosNumb}
        >
          SumarValores
        </button>
      </div>
    </div>
  );
};

export default SumarDosNumeros;
