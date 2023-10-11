import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Swal from "sweetalert2";
import { CartContext } from "../context/ShoppingCartContext";

const CounterDetail = ({ p }) => {
  const [contador, setContador] = useState(0);
  const { addItem } = useContext(CartContext);

  const incremento = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const decremento = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const subirAlLocalStorage = () => {
    //Avances del código para una futura mejora en el Stock

    // let objeto = {
    //   idProducto: p.id,
    //   nombreProducto: p.nombre,
    //   precioProducto: p.precio,
    //   //      cantidadProducto: 0,
    // };
    // let ls = JSON.parse(localStorage.getItem(`Producto${objeto.idProducto}`));

    // //Si ya existe ese producto en el localStorage, sumale la cantidad del stock.
    // if (ls) {
    //   //Pero si la cantidad solicitada más la cantidad que había pedido previamente pasan los 10, no lo agregues.
    //   if (contador + ls.cantidadProducto > 10) {
    //     alert(`Stock Insuficiente de este producto`);
    //     objeto.cantidadProducto = ls.cantidadProducto;
    //     return false;
    //   } else {
    //     //Sino que se sume
    //     objeto.cantidadProducto = contador + ls.cantidadProducto;
    //   }
    // } else {
    //   //Si no existe ls, osea si es la primera vez que el usuario compra el producto, que la cantidad del producto sea igual a contador.
    //   objeto.cantidadProducto = contador;
    // }

    // localStorage.setItem(
    //   `Producto${objeto.idProducto}`,
    //   JSON.stringify(objeto)
    // );

    addItem(p, contador);

    return true;
  };

  const mensajeAgregado = () => {
    contador == 1
      ? Swal.fire(
          "Buen Trabajo!",
          `Se ha añadido el producto seleccionado
 al carrito`
        )
      : Swal.fire(
          "Buen Trabajo!",
          `Se han añadido ${contador} productos
 al carrito`
        );
  };

  const reseteo = () => setContador(0);

  const agregarAlCarrito = () => {
    subirAlLocalStorage() && mensajeAgregado();
    reseteo();
  };

  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="light" onClick={decremento}>
          -
        </Button>
        <label className="mx-4 mt-1 ">{contador}</label>
        <Button variant="light" onClick={incremento}>
          +
        </Button>
      </ButtonGroup>
      <br />
      <br />
      {contador == 0 ? (
        <Button variant="primary" disabled onClick={agregarAlCarrito}>
          Agregar al Carrito
        </Button>
      ) : (
        <Button variant="primary" onClick={agregarAlCarrito}>
          Agregar al Carrito
        </Button>
      )}
    </>
  );
};

export default CounterDetail;
