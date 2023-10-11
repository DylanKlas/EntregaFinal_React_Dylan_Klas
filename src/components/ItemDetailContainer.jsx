import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Document from "./Document";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  //Detecta el nombre del producto
  const { id } = useParams();

  let queProductoMostrar = Document(id);

  return (
    <>
      {/* Muestra los productos seleccionados, ya sea todos si estamos en "Home", o los de la categoria si estamos en `/category` */}
      {queProductoMostrar == 0 ? (
        <div className="mt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
          <ItemDetail p={queProductoMostrar} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
