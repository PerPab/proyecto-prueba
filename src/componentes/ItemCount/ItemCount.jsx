import React, { useContext } from "react";
import "./ItemCount.css";
import { useState, useEffect } from "react";
import { miContexto } from "../../../context";


const ItemCount = ({stock, stateStock, setStateStock}) => {
  const sad = "/sad.png";
  
  const { itemsAgregados, setItemsAgregados, contador, setContador, state, setState} = useContext(miContexto)


  useEffect(()=>{
    setContador(state)
  
  },[state])

  function sumar () {
    setState(state + 1)
  
   
 
  }

  function restar () {
    setState(state - 1)
   
   
 
  }



  return (

    <div className="container-cont">
     {/*stock > 0 ? (
        <p className="stock">Stock disponible: {stock}</p>
      ) : (
        <p className="s-stock">
          Sin Stock <img className="sad" src={sad}></img>
        </p>
      )*/}


      <div className="contador">
        <button
          className="btn-contador" 
          onClick={restar}
          

        >
          -
        </button>

        <div>{state}</div>

        <button
          className="btn-contador" 
          onClick={sumar}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
