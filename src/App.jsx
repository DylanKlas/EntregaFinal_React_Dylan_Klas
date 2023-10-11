import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Detail from "./components/Detail";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartContext, {
  CartContext,
} from "./context/ShoppingCartContext";
import { Card } from "react-bootstrap";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:categoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartContext>
    </>
  );
}

export default App;
