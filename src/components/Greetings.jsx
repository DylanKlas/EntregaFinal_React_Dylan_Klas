import React from "react";

const Greetings = ({ mensajePrincipal, mensajeSecundario }) => {

  return (
    <>
      <div>
        <h5>{mensajePrincipal}</h5>
      </div>
      <div>
        <h6>{mensajeSecundario}</h6>
      </div>
    </>
  );
};

export default Greetings;
