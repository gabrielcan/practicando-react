import React, { useState } from "react";
import { FormControl, InputGroup, ListGroup } from "react-bootstrap";
import AgregarTareas from "../AgregarTareas/AgregarTareas";
import "./listaTareas.css";
import CloseButton from "react-bootstrap/CloseButton";
import { GrCompliance } from "react-icons/gr";

const ListaTareas = ({ item, handlePrueba, handleChecked }) => {
  const handleComponente = (check, id) => {
    if (check) {
      return <GrCompliance className="closeButton" />;
    } else {
      return (
        <CloseButton onClick={() => handlePrueba(id)} className="closeButton" />
      );
    }
  };

  return (
    <div className="contListaTareas">
      {item.map((tareas) => (
        <div
          key={tareas.id}
          className={
            tareas.checked == false ? "cont_tareas" : "cont_tareas_check"
          }
        >
          <div className="text_tarea" onClick={() => handleChecked(tareas.id)}>
            <p>{tareas.nomTarea}</p>
          </div>
          <div className="buttonClose" key={tareas.id}>
            {handleComponente(tareas.checked, tareas.id)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaTareas;
