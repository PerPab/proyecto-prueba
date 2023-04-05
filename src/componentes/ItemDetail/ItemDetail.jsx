
import React, { useEffect, useState, useContext } from "react";
import { miContexto } from "../../../context";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ datosParam }) => {

const {itemsAgregados, setItemsAgregados, onAdd, onRemove} = useContext(miContexto)
const [stateStock, setStateStock] = useState(datosParam.stock)

  return ( 
    <div className="itemDetail">
      <div className="contenedor-item">
        <h2 className="titulo">{datosParam.title}</h2>
        <p className="descripcion">{datosParam.description}</p>
        <div className="contenedor-imagen">
          <img className="imagen-1" src={datosParam.img1} />
          <img className="imagen-2" src={datosParam.img2} />
        </div>
        <ItemCount />
        <button className="btn-cont-carrito" onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
