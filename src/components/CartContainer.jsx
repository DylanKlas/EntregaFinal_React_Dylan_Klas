import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import SendOrder from "./SendOrder";
import { useState } from "react";

const CartContainer = () => {
  const { cart, clear, total } = useContext(CartContext);
  const [formActivo, setFormActivo] = useState(false);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Activo</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((p) => {
                return (
                  <tr key={p.id}>
                    <Cart p={p} />
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <div>
              <p className=" d-flex justify-content-end">
                Monto Total: ${total()}
              </p>
            </div>
            <button className=" justify-content-start" onClick={() => clear()}>
              Eliminar Seleccion
            </button>
            <button
              className="justify-content-start"
              onClick={() => setFormActivo(true)}
            >
              Terminar Compra
            </button>
          </div>
          {formActivo && <SendOrder />}
        </div>
      ) : (
        <>
          <p className="mt-4">No tiene productos en el Carrito.</p>
          <button type="button" className=" btn btn-primary ">
            <Link to={`/`} className="textoBlanco">
              Ir a la tienda
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default CartContainer;
