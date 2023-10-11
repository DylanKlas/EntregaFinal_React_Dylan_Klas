import React from "react";
import Greetings from "./Greetings";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Collection from "./Collection";
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const mensajePrincipal = ["Bienvenido a Lapse! ", "Elija por Categoría"];
  const mensajeSecundario = [
    "Sentite cómodo de explorar los nuevos diseños",
    "Pruebe por su estilo",
  ];
  let home = true; //Dice si estamos en Home o en alguna categoría

  //Detecta el nombre de la categoría
  const { categoria } = useParams();

  //Carga los productos de la base de datos
  const productos = Collection(categoria);

  //Dice que se muestre los productos de la categoría que detectó el useParams
  let queProductosMostrar = productos.filter(
    (productos) => productos.categoria === categoria
  );

  //Para detectar si me tomo alguna categoría. En caso de que no, quiere decir que estamos en Home y vamos a mostrar toda la Base de Datos.
  queProductosMostrar.length > 0
    ? (home = false)
    : (home = true) && (queProductosMostrar = productos);

  return (
    <>
      <div className="mt-4 mb-4">
        {
          //Pregunta si estamos en "Home", y en caso de que sí, nos muestra el mensaje de bienvenida.
          home ? (
            <Greetings
              mensajePrincipal={mensajePrincipal[0]}
              mensajeSecundario={mensajeSecundario[0]}
            />
          ) : (
            <Greetings
              mensajePrincipal={mensajePrincipal[1]}
              mensajeSecundario={mensajeSecundario[1]}
            />
          )
        }
      </div>
      {/* Muestra los productos seleccionados, ya sea todos si estamos en "Home", o los de la categoria si estamos en `/category` */}
      {productos == 0 ? (
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
          <ItemList productos={queProductosMostrar} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
