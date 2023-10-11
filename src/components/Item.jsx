import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ p }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-4 mb-4">
        <div className="d-flex justify-content-center">
          <img src={p.imagen} alt={p.alt} width="220rem" className=" " />
        </div>
        <Card.Body>
          <Card.Title>{p.nombre}</Card.Title>
          <Card.Text>$ {p.precio}</Card.Text>
          <Button variant="primary">
            <Link to={`/item/${p.id}`} className="textoBlanco p-1">
              Detalles
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
