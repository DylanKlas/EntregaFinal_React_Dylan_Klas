import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Spinner } from "react-bootstrap";

const SendOrder = () => {
  const { cart, total } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [nombre, setnombre] = useState("");
  const [email, setEmail] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    nombre && email
      ? addDoc(orderCollection, order).then(({ id }) => setOrderId(id))
      : Swal.fire("Ingrese su nombre y su email correctamente para continuar.");
  };

  const tot = total();

  const order = {
    comprador: {
      nombre,
      email,
    },

    items: cart.map(({ id, nombre, precio, quantity }) => ({
      id,
      nombre,
      precio,
      quantity,
      tot,
    })),
  };

  const orderCollection = collection(db, "compras");

  return (
    <>
      <div className=" d-flex justify-content-center mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={(e) => setnombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su email con nadie.
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => (setOrderId = " ")}
          >
            Finalizar Compra
          </Button>
        </Form>
      </div>

      {orderId == " " ? (
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className=" d-flex justify-content-center mt-5">
          <p>Order ID:{orderId}</p>
        </div>
      )}
    </>
  );
};

export default SendOrder;
