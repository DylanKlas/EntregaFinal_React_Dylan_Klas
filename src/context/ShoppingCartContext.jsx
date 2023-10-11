import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      //Si ya está en el carrito
      setCart(
        cart.map((producto) => {
          if (producto.id === item.id) {
            return { ...producto, quantity: producto.quantity + quantity };
          } else {
            return producto;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cartQuantity = () => {
    let cantidad = 0;
    cart.forEach((element) => {
      cantidad += element.quantity;
    });
    return cantidad;
  };

  const total = () => {
    let tot = 0;
    cart.forEach((element) => {
      tot += element.quantity * element.precio;
    });

    return tot;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, deleteItem, cartQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
