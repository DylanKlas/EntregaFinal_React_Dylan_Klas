import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      {cartQuantity() !== 0 ? (
        <div className="cartWidget p-0 mx-2"> 🛒 {cartQuantity()}</div>
      ) : (
        <div className="cartWidget p-0 mx-2"> 🛒 </div>
      )}
    </>
  );
};

export default CartWidget;
