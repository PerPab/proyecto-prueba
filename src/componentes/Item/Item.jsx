import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from "react";

const Item = ({ title, price, description, image, category, id }) => {

  const url = `/item/${id}`;

  const [producto, setProducto] = useState(null)

  /*useEffect(()=>{
    const db = getFirestore()
    const itemRef = doc(db, 'items','8Eh3P0jhyGD1T1qC6rY1' )
    getDoc(itemRef).then((result) =>{
      if(result.exists()) {
        setProducto({id: result.id, ...result.data()})
      }
    }).catch((error) => console.log(error))
  },[])*/

  return ( 
  
      <Link to={url} className='card-link'> 
    <li className="card-contenedor">
      <h3 className="nombre">{title}</h3>
        <img className="imagen" src={image} alt="imagen-juego" />
      <p className="descripcion">{description}</p>
      <p className="categoria">{category}</p>
      <h4 className="precio">${price}</h4>
    </li>
    </Link>
   
    
  );
};

export default Item;
