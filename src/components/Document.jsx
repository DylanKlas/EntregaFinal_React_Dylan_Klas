import React from "react";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Document = (id) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, `productos`, `productos${id}`);

    getDoc(oneItem).then(
      (snapshot) => snapshot.exists() && setProducto(snapshot.data())
    );
  }, []);

  return producto;
};

export default Document;
