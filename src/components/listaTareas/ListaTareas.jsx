import React, { useState } from "react";
import { FormControl, InputGroup, ListGroup } from "react-bootstrap";
import AgregarTareas from "../AgregarTareas/AgregarTareas";
import "./listaTareas.css";
import CloseButton from "react-bootstrap/CloseButton";


const ListaTareas = ({ item, handlePrueba, handleChecked }) => {
  return (
    <div>
    
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
          <div className="buttonClose">
            <CloseButton
              onClick={() => handlePrueba(tareas.id)}
              className="closeButton"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaTareas;
