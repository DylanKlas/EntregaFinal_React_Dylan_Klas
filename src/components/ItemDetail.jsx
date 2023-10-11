import React from "react";
import Detail from "./Detail";

const ItemDetail = ({ p }) => {
  return (
    <div key={p.id}>
      <Detail p={p} />
    </div>
  );
};

export default ItemDetail;
