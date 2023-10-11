import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = ({ p }) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <>
      <th
        className=" align-self-center text-center justify-content-center"
        scope="row"
      >
        <div className="">
          <img src={p.imagen} alt={p.alt} width="220rem" />
        </div>
      </th>
      <td className=" align-self-center text-center justify-content-center">
        {p.nombre}
      </td>
      <td className=" align-self-center text-center justify-content-center">
        ${p.precio}
      </td>
      <td className=" align-self-center text-center justify-content-center">
        {p.quantity}
      </td>
      <td>
        <button
          className=" align-self-center text-center justify-content-center"
          onClick={() => deleteItem(p.id)}
        >
          Borrar
        </button>
      </td>
    </>
  );
};

export default Cart;
