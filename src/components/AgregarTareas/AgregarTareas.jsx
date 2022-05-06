import "./agregarTareas.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "../listaTareas/ListaTareas";
import CustomButton from "../CustomButton/CustomButton";

const AgregarTareas = ({ text, handleEnviarTarea, handleExtraerTarea,handleBorrarMarcados}) => {
  // const [texto,setTexto]=useState("")
  // const [tareaEnviar,setTareaEnviar]=useState([])

  //  const handleExtraerTarea =(text)=>{
  //     setTexto(text); // guardamos la tarea escrita en Input en la variable "texto"

  //   }

  //  const handleEnviarTarea=()=>{

  // let newTarea ={
  // id:"01",
  // nomTarea:texto,
  // };

  // setTareaEnviar([...tareaEnviar,newTarea]);
  // setTexto("")
  //   }

  return (
    <div className="contentAddTareeas">
      <h3 className="item_input">AGENDA DE TAREAS </h3>
      <Form.Group className="cont_Input">
        <Form.Control
          type="text"
          placeholder="Ingrese una Nueva Tarea"
          className="inputTarea"
          value={text}
          onChange={(e) => handleExtraerTarea(e.target.value)}
        />
      </Form.Group>
      {/* <Button variant="outline-primary" className="botonAdd" onClick={handleEnviarTarea}>
  Agregar
</Button> */}

      <div className="cont_Button">
      <CustomButton handle={handleEnviarTarea} nomButton="Add new Task" />
      <CustomButton handle={handleBorrarMarcados} nomButton="Remove Marked"/>
</div>
      {/* <ListaTareas item={tareaEnviar}/> */}
    </div>
  );
};

export default AgregarTareas;
