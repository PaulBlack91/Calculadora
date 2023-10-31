import React from "react";
import '../hojas-de-estilo/Clear.css'

const BotonClear = (props)=>(
  <div className="boton-clear" onClick={props.manejarClear}>
    Borrar
  </div>
)

export default BotonClear