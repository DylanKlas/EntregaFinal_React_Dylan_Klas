import React from "react";
import Card from "react-bootstrap/Card";
import CounterDetail from "./CounterDetail";

const Detail = ({ p }) => {
  return (
    <>
      {
        <Card style={{ width: "36rem" }} className="mt-4 mb-4">
          <div className="d-flex justify-content-center">
            <img src={p.imagen} alt={p.alt} width="220rem" className=" " />
          </div>
          <Card.Body>
            <Card.Title>{p.nombre}</Card.Title>
            <Card.Text>$ {p.precio}</Card.Text>
            <Card.Text>{p.descripcion}</Card.Text>
            <CounterDetail p={p} />
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default Detail;
