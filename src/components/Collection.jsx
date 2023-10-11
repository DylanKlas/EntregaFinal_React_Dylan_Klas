import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = (categoria) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, `productos`);

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProductos(docs);
    });
  }, []);

  return productos;
};

export default Collection;
